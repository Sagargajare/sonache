// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::sync::{Arc, Mutex};

pub mod solana_local_validator;
use solana_local_validator::start_solana_process;
use tauri::WindowEvent;

use crate::solana_local_validator::stop_solana_process;


#[derive(Default)]
struct Counter(
  Arc<Mutex<i32>>
);


fn main() {
  tauri::Builder::default()
  .setup(|_app|{

    tauri::async_runtime::spawn(async move {
      start_solana_process();
    });
    
    Ok(())
  }).on_window_event(move |event| match event.event() {
    WindowEvent::Destroyed => {
      stop_solana_process();
      println!("Window destroyed");
    }
    _ => {}
})
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name:&str) -> String {
  format!("Hello, {}!", name)
}

// #[tauri::command]
// fn start_local_validator() -> String {
//   let output = Command::new("solana").arg("--help").output().unwrap();
//   println!("output: {:?}",output);
//   format!("Hello, Saga")
// }
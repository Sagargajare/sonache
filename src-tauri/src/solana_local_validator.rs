
use std::{process::Command, sync::Mutex};

use lazy_static::lazy_static;


lazy_static! {
    static ref SOLANA_PROCESS: Mutex<Option<std::process::Child>> = Mutex::new(None);
}

pub fn start_solana_process(){
    let mut solana_process = SOLANA_PROCESS.lock().unwrap();

  if solana_process.is_none() {
      // Command to start the solana-test-validator
      let mut solana_command = Command::new("solana-test-validator");
      solana_command.current_dir("../../");

      // Spawn the process and store it
      if let Ok(child) = solana_command.spawn() {
          *solana_process = Some(child);
          println!("Solana process started and stored globally.");
      } else {
          println!("Failed to start Solana process.");
      }
  } else {
      println!("Solana process is already running.");
  }
}

pub fn stop_solana_process(){
    let mut solana_process = SOLANA_PROCESS.lock().unwrap();

  if solana_process.is_some() {
      // Kill the process and remove it
      if let Some(mut child) = solana_process.take() {
          child.kill().unwrap();
          println!("Solana process killed and removed globally.");
      } else {
          println!("Failed to kill Solana process.");
      }
  } else {
      println!("Solana process is not running.");
  }
}
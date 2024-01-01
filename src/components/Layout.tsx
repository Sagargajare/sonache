import { useState } from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const smVariant = { navigation: 'drawer', navigationButton: true }
  const mdVariant = { navigation: 'sidebar', navigationButton: false }
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton ? 200: 0} h="100vh">
        <Outlet/>
      </Box>
    </>
  )
}

import React from 'react'
import { Box, Flex, Container, VStack, Text, Link, useColorModeValue } from '@chakra-ui/react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const bgColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box minH="100vh" bg={bgColor}>
      <Navbar />
      <Container maxW="container.xl" pt="60px">
        <Flex>
          <Box w="300px" position="fixed" top="60px" h="calc(100vh - 60px)" borderRight="1px" borderColor="gray.200" p={4}>
            <Sidebar />
          </Box>
          <Box ml="300px" w="calc(100% - 300px)" p={4}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  )
} 
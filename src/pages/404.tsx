import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function Custom404() {
  const router = useRouter()

  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={6}>
          404 - Page Not Found
        </Heading>
        <Text fontSize="xl" mb={6}>
          The page you're looking for does not exist.
        </Text>
        <Button colorScheme="blue" onClick={() => router.push('/')}>
          Return Home
        </Button>
      </Box>
    </Layout>
  )
} 
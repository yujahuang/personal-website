import React from 'react'
import { Box, Flex, Text, HStack, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'

const NAV_ITEMS = [
  { label: 'about', href: '/about' },
  { label: 'projects', href: '/projects' },
  { label: 'resume', href: '/resume' },
  { label: 'experience', href: '/experience' },
  { label: 'contact', href: '/contact' },
]

export default function Navbar() {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Box position="fixed" w="100%" zIndex={1} bg="white" borderBottom="1px" borderColor="gray.200">
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto" px={4}>
        <NextLink href="/" passHref>
          <Text fontSize="xl" fontWeight="bold" cursor="pointer">
            Yujia Huang
          </Text>
        </NextLink>

        <HStack spacing={8}>
          {NAV_ITEMS.map((item) => (
            <NextLink key={item.href} href={item.href} passHref>
              <Text cursor="pointer">{t(`nav.${item.label}`)}</Text>
            </NextLink>
          ))}
          <Select value={router.locale} onChange={handleLanguageChange} w="100px">
            <option value="en">English</option>
            <option value="zh">中文</option>
          </Select>
        </HStack>
      </Flex>
    </Box>
  )
} 
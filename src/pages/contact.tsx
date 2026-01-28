import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, Text, VStack, Link, HStack, Icon, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import NewLayout from '../components/NewLayout'

export default function Contact() {
  const { t, i18n } = useTranslation('contact')
  const isZh = i18n.language === 'zh'
  
  return (
    <NewLayout>
      <VStack spacing={8} align="start" width="100%">
        <Box width="100%">
          <Heading as="h1" size="xl" mb={6} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('title')}
          </Heading>
          <Text fontSize="lg" mb={6} className={isZh ? "zh-text" : "en-text"}>
            {t('description')}
          </Text>
          


        <Divider borderColor="gray.300" width="100%" />

        <VStack spacing={6} align="start" width="100%">
          <HStack spacing={4}>
            <Icon as={EmailIcon} w={6} h={6} color="blue.500" />
            <Link href={`mailto:${t('contact_info.email')}`} color="blue.500" className="en-text">
              {t('contact_info.email')}
            </Link>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaGithub} w={6} h={6} color="gray.700" />
            <Link href="https://github.com/yujahuang" isExternal color="blue.500" className="en-text">
              {t('contact_info.github')}
            </Link>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaLinkedin} w={6} h={6} color="blue.500" />
            <Link href="https://www.linkedin.com/in/yujia-huang-a47375354" isExternal color="blue.500" className="en-text">
              {t('contact_info.linkedin')}
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </NewLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'common'])),
    },
  }
} 

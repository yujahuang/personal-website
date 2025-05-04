import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, Text, VStack, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import NewLayout from '../components/NewLayout'

export default function About() {
  const { t, i18n } = useTranslation('about')
  const isZh = i18n.language === 'zh'

  return (
    <NewLayout>
      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h1" size="xl" mb={6} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('intro.title')}
          </Heading>
          <Text fontSize="lg" mb={4} className={isZh ? "zh-text" : "en-text"}>
            {i18n.language === 'zh' 
              ? t('intro.description') 
              : "I am a Finance student in the International Experimental Class (Economics and Management) at SWUFE. I have a strong background in investment strategies and blockchain technologies. I've achieved over 300% returns through discretionary trading and provided consultancy to WorldQuant Brain. I'm also experienced in mathematical modeling, full-stack development, and evaluating 10+ cryptocurrency projects in depth. I'm passionate about exploring the intersection of finance, computer science, and artificial intelligence."}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('study.title')}
          </Heading>
          <UnorderedList spacing={2}>
            {['trading', 'blockchain', 'web', 'ml', 'finance'].map((item) => (
              <ListItem key={item} className={isZh ? "zh-text" : "en-text"}>
                {t(`study.items.${item}`)}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('likes.title')}
          </Heading>
          <UnorderedList spacing={2}>
            {[
              'basketball', 'badminton', 'tableTennis', 'volleyball',
              'latin', 'piano', 'cycling', 'drawing', 'go', 'chess'
            ].map((item) => (
              <ListItem key={item} className={isZh ? "zh-text" : "en-text"}>
                {t(`likes.items.${item}`)}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('meet.title')}
          </Heading>
          <UnorderedList spacing={2}>
            {Object.keys(t('meet.items', { returnObjects: true })).map((item) => (
              <ListItem key={item} className={isZh ? "zh-text" : "en-text"}>
                {t(`meet.items.${item}`)}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>

        <Box 
          pt={6} 
          borderTop="1px" 
          borderColor="gray.200" 
          width="100%" 
          mt={4}
        >
          <Text fontSize="sm" color="gray.500" className={isZh ? "zh-text" : "en-text"}>
            {t('reference', { defaultValue: isZh ? '页面设计参考：' : 'Page design reference: '})}
            <Link 
              href="https://github.com/mldangelo/personal-site" 
              isExternal 
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
              className="en-text"
            >
              https://github.com/mldangelo/personal-site
            </Link>
          </Text>
        </Box>
      </VStack>
    </NewLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  }
} 

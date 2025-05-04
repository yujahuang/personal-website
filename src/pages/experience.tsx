import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, Text, VStack, Divider, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import NewLayout from '../components/NewLayout'
import Image from 'next/image'

export default function Experience() {
  const { t, i18n } = useTranslation('experience')
  const isZh = i18n.language === 'zh'

  return (
    <NewLayout>
      <VStack spacing={12} align="start">
        <Box>
          <Heading as="h1" size="xl" mb={8} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('title')}
          </Heading>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('blockchain.title')}
          </Heading>
          <Text color="gray.600" mb={6} fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
            {t('blockchain.period')}
          </Text>
          
          <Box 
            position="relative" 
            width="100%" 
            height="320px" 
            mb={6} 
            overflow="hidden"
            borderRadius="md"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ 
              transform: "scale(1.02)",
              boxShadow: "lg"
            }}
          >
            <Image
              src="/assets/images/experience/blockchain.png"
              alt="Blockchain Research"
              fill
              style={{ 
                objectFit: 'cover',
                transition: "all 0.5s ease" 
              }}
            />
          </Box>
          
          <Text fontSize="md" mb={4} className={isZh ? "zh-text" : "en-text"}>
            {t('blockchain.position')}
          </Text>
          <List spacing={3}>
            {[
              'research',
              'framework',
              'tracking',
              'returns',
              'monitoring'
            ].map((item) => (
              <ListItem key={item} display="flex" alignItems="center" fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {t(`blockchain.achievements.${item}`)}
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider />

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('worldquant.title')}
          </Heading>
          <Text color="gray.600" mb={6} fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
            {t('worldquant.period')}
          </Text>
          
          <Box 
            position="relative" 
            width="100%" 
            height="280px" 
            mb={6} 
            overflow="hidden"
            borderRadius="md"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ 
              transform: "scale(1.02)",
              boxShadow: "lg"
            }}
            bg="black"
          >
            <Image
              src="/assets/images/experience/worldquant.jpg"
              alt="WorldQuant Experience"
              fill
              style={{ 
                objectFit: 'contain',
                transition: "all 0.5s ease" 
              }}
            />
          </Box>
          
          <List spacing={3}>
            {[
              'alpha',
              'models',
              'sharpe',
              'ranking'
            ].map((item) => (
              <ListItem key={item} display="flex" alignItems="center" fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {t(`worldquant.achievements.${item}`)}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </NewLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['experience', 'common'])),
    },
  }
} 
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, Text, VStack, List, ListItem, ListIcon, useColorModeValue } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import NewLayout from '../components/NewLayout'
import Image from 'next/image'

export default function Projects() {
  const { t, i18n } = useTranslation('projects')
  const isZh = i18n.language === 'zh'
  const imageBgColor = useColorModeValue('gray.50', 'gray.700')

  return (
    <NewLayout>
      <VStack spacing={12} align="start">
        <Box>
          <Heading as="h1" size="xl" mb={8} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('title')}
          </Heading>
        </Box>

        <Box width="100%">
          <Heading as="h2" size="lg" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('backtesting.title')}
          </Heading>
          <Text fontSize="md" mb={6} className={isZh ? "zh-text" : "en-text"}>
            {t('backtesting.description')}
          </Text>
          <Box 
            position="relative" 
            width="100%" 
            height="320px"
            mb={6} 
            overflow="hidden"
            borderRadius="md"
            boxShadow="2xl"
            transition="all 0.3s ease"
            _hover={{ 
              transform: "scale(1.02)",
              boxShadow: "2xl"
            }}
            bg="black"
            p={2}
          >
            <Image
              src="/assets/images/projects/project1.png"
              alt="Backtesting System Screenshot"
              fill
              style={{ 
                objectFit: 'contain',
                transition: "all 0.5s ease",
                padding: '12px'
              }}
            />
          </Box>

          <Heading as="h3" size="md" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('backtesting.features.title')}
          </Heading>
          <List spacing={3}>
            {[
              'frontend',
              'backend',
              'optimizations',
              'cicd',
              'indicators',
              'performance'
            ].map((feature) => (
              <ListItem key={feature} display="flex" alignItems="center" fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {t(`backtesting.features.items.${feature}`)}
              </ListItem>
            ))}
          </List>

          <Text mt={6} fontStyle="italic" fontSize="sm" className={isZh ? "zh-text" : "en-text"}>
            {t('backtesting.note')}
          </Text>
        </Box>
      </VStack>
    </NewLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects', 'common'])),
    },
  }
} 
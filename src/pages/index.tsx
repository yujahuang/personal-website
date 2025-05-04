import React from 'react'
import type { NextPage } from 'next'
import { Box, Heading, Text, VStack, Link as ChakraLink, Divider } from '@chakra-ui/react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import type { GetStaticProps } from 'next'
import NextLink from 'next/link'
import NewLayout from '../components/NewLayout'

const Home: NextPage = () => {
  const { t, i18n } = useTranslation('common')
  const isZh = i18n.language === 'zh'
  
  // 中文版本的欢迎文本
  const ChineseWelcomeText = () => (
    <>
      欢迎访问我的网站。你可以随意了解更多{' '}
      <NextLink href="/about" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="zh-text">关于我</ChakraLink>
      </NextLink>
      ，也可以查看我的{' '}
      <NextLink href="/resume" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="zh-text">简历</ChakraLink>
      </NextLink>
      、{' '}
      <NextLink href="/projects" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="zh-text">项目</ChakraLink>
      </NextLink>
      、{' '}
      <NextLink href="/experience" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="zh-text">经历</ChakraLink>
      </NextLink>
      ，或者{' '}
      <NextLink href="/contact" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="zh-text">联系我</ChakraLink>
      </NextLink>
      。
    </>
  )

  // 英文版本的欢迎文本
  const EnglishWelcomeText = () => (
    <>
      Welcome to my site. Feel free to learn more{' '}
      <NextLink href="/about" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="en-text">about me</ChakraLink>
      </NextLink>
      , browse my{' '}
      <NextLink href="/resume" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="en-text">resume</ChakraLink>
      </NextLink>
      ,{' '}
      <NextLink href="/projects" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="en-text">projects</ChakraLink>
      </NextLink>
      ,{' '}
      <NextLink href="/experience" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="en-text">experience</ChakraLink>
      </NextLink>
      , or{' '}
      <NextLink href="/contact" passHref legacyBehavior>
        <ChakraLink color="blue.500" textDecoration="underline" className="en-text">contact me</ChakraLink>
      </NextLink>
      .
    </>
  )
  
  return (
    <NewLayout>
      <VStack spacing={8} align="start" width="100%">
        <Box width="100%">
          <Heading as="h1" size="xl" mb={6} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('home.about.title')}
          </Heading>
          <Text fontSize="lg" mb={4} className={isZh ? "zh-text" : "en-text"}>
            {t('home.about.description')}
          </Text>
        </Box>
        
        <Divider borderColor="gray.300" />
        
        <Box width="100%">
          <Text fontSize="lg" lineHeight="tall" className={isZh ? "zh-text" : "en-text"}>
            {isZh ? <ChineseWelcomeText /> : <EnglishWelcomeText />}
          </Text>
        </Box>
        
        <Box mt={4} width="100%">
          <ChakraLink href="https://github.com/yujahuang/personal-website" isExternal color="blue.500" className={isZh ? "zh-text" : "en-text"}>
            {t('home.source')}
          </ChakraLink>
        </Box>
      </VStack>
    </NewLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

export default Home 
import React from 'react'
import { VStack, Text, Link, Heading } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export default function Sidebar() {
  const { t, i18n } = useTranslation('common')

  // 根据当前语言选择适当的翻译键
  const introKey = i18n.language === 'zh' ? 'sidebar.intro.zh' : 'sidebar.intro.en'

  return (
    <VStack spacing={6} align="start">
      <Heading as="h3" size="md">
        Yujia Huang
      </Heading>

      <Text>
        yujiahuang.research@gmail.com
      </Text>

      <VStack align="start" spacing={4}>
        <Text>
          {t(introKey)}
        </Text>
      </VStack>
    </VStack>
  )
}

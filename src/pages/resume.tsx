import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Box, Heading, Text, VStack, Button, Flex, Link as ChakraLink } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import NewLayout from '../components/NewLayout'

interface SkillProps {
  name: string;
  level: number; 
  max?: number;
  color?: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, max = 5, color = "blue.500" }) => {
  return (
    <Box mb={8} width="100%">
      <Flex justify="flex-end" mb={1}>
        <Text fontSize="md" color="gray.500">{level}/{max}</Text>
      </Flex>
      <Box position="relative" width="100%" 
        sx={{
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px', 
            bottom: '-2px',
            background: color,
            opacity: '0.3',
            filter: `blur(8px)`,
            zIndex: '0'
          }
        }}
      >
        <Box 
          bg="gray.200" 
          height="32px" 
          width="100%" 
          borderRadius="0"
          position="relative"
          zIndex="1"
        />
        <Box 
          bg={color} 
          height="32px" 
          borderRadius="0"
          width={`${(level / max) * 100}%`}
          position="absolute"
          top="0"
          left="0"
          zIndex="2"
          _hover={{
            boxShadow: `0 0 10px ${color}`,
          }}
          transition="all 0.3s ease"
        />
        <Text
          position="absolute"
          top="0"
          left="10px"
          color="white"
          fontSize="md"
          fontWeight="bold"
          lineHeight="32px"
          zIndex="3"
          textShadow="1px 1px 3px rgba(0,0,0,0.5)"
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
};

export default function Resume() {
  const { t } = useTranslation('resume')
  const { i18n } = useTranslation()
  const isZh = i18n.language === 'zh'

  const handleView = (fileName: string) => {
    window.open(`/assets/docs/${fileName}`, '_blank');
  };

  return (
    <NewLayout>
      <VStack spacing={10} align="start">
        <Box w="100%">
          <Heading as="h1" size="xl" mb={6} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('title')}
          </Heading>
          <Text mb={4} className={isZh ? "zh-text" : "en-text"}>
            {t('view_text')}
          </Text>
          <Flex gap={4}>
            <Button
              leftIcon={<DownloadIcon />}
              colorScheme="gray"
              variant="solid"
              bgGradient="linear(to-r, gray.400, gray.600)"
              _hover={{ 
                bgGradient: "linear(to-r, gray.500, gray.700)",
                transform: "translateY(-2px)",
                boxShadow: "xl"
              }}
              boxShadow="md"
              transition="all 0.3s ease"
              onClick={() => handleView('resume_en.pdf')}
              className={isZh ? "zh-text" : "en-text"}
            >
              {t('en_resume')}
            </Button>
            <Button
              leftIcon={<DownloadIcon />}
              colorScheme="pray"
              variant="solid"
              bgGradient="linear(to-r, gray.400, gray.600)"
              _hover={{ 
                bgGradient: "linear(to-r, gray.500, gray.700)",
                transform: "translateY(-2px)",
                boxShadow: "xl"
              }}
              boxShadow="md"
              transition="all 0.3s ease"
              onClick={() => handleView('resume_zh.pdf')}
              className={isZh ? "zh-text" : "en-text"}
            >
              {t('zh_resume')}
            </Button>
            <Button
              leftIcon={<DownloadIcon />}
              colorScheme="gray"
              variant="solid"
              bgGradient="linear(to-r, gray.400, gray.600)"
              _hover={{ 
                bgGradient: "linear(to-r, gray.500, gray.700)",
                transform: "translateY(-2px)",
                boxShadow: "xl"
              }}
              boxShadow="md"
              transition="all 0.3s ease"
              onClick={() => handleView('Academic_CV.pdf')}
              className={isZh ? "zh-text" : "en-text"}
            >
              {t('academic_cv')}
            </Button>
          </Flex>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={6} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
            {t('skills.title')}
          </Heading>

          <VStack spacing={4} align="start">
            <Box w="100%">
              <Heading as="h3" size="md" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
                {t('skills.languages.title')}
              </Heading>
              <Box w="100%">
                <SkillBar name={t('skills.languages.chinese')} level={5} color="teal.500" />
                <SkillBar name={t('skills.languages.english')} level={4} color="teal.500" />
                <SkillBar name="Java" level={4} color="blue.500" />
                <SkillBar name="MySQL" level={4} color="blue.500" />
                <SkillBar name="Python" level={3} color="blue.500" />
                <SkillBar name="VBA" level={2} color="blue.500" />
                <SkillBar name="PostgreSQL" level={2} color="blue.500" />
                <SkillBar name="C++" level={1} color="blue.500" />
                <SkillBar name="R" level={1} color="blue.500" />
              </Box>
            </Box>

            <Box w="100%">
              <Heading as="h3" size="md" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
                {t('skills.blockchain.title')}
              </Heading>
              <Box w="100%">
                <SkillBar name="Dune Analytics" level={4} color="purple.500" />
                <SkillBar name="Etherscan" level={4} color="purple.500" />
                <SkillBar name="DeBank" level={3} color="purple.500" />
              </Box>
            </Box>

            <Box w="100%">
              <Heading as="h3" size="md" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
                {t('skills.finance.title')}
              </Heading>
              <Box w="100%">
                <SkillBar name={t('skills.finance.financial_analysis')} level={3} color="green.500" />
                <SkillBar name={t('skills.finance.valuation')} level={3} color="green.500" />
              </Box>
            </Box>

            <Box w="100%">
              <Heading as="h3" size="md" mb={4} textTransform="capitalize" className={isZh ? "zh-text" : "en-text"}>
                {t('skills.productivity.title')}
              </Heading>
              <Box w="100%">
                <SkillBar name="WIND" level={4} color="orange.500" />
                <SkillBar name="ThinkCell" level={3} color="orange.500" />
                <SkillBar name="Visio" level={3} color="orange.500" />
              </Box>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </NewLayout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['resume', 'common'])),
    },
  }
} 

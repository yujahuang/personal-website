import React from 'react';
import { Box, Flex, Text, Link as ChakraLink, VStack, HStack, Container, useColorModeValue, Button, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { label: 'about', href: '/about' },
  { label: 'resume', href: '/resume' },
  { label: 'projects', href: '/projects' },
  { label: 'experience', href: '/experience' },
  { label: 'contact', href: '/contact' },
];

export default function NewLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  
  // 背景颜色设置固定值，确保一致性
  const bgColor = '#f5f5f5';
  const contentBgColor = 'white';
  const borderColor = 'gray.200';
  
  // 字体设置：英文用 Times New Roman，中文用楷体
  const fontFamily = i18n.language === 'zh' 
    ? "KaiTi, '楷体'" 
    : "'Times New Roman', serif";

  const switchLanguage = () => {
    const newLocale = router.locale === 'en' ? 'zh' : 'en';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Top Navigation */}
      <Box borderBottom="1px" borderColor={borderColor} py={3} bg={contentBgColor} position="sticky" top="0" zIndex="1" shadow="sm">
        <Container maxW="container.xl">
          <Flex alignItems="center">
            <NextLink href="/" passHref legacyBehavior>
              <Text fontSize="lg" fontWeight="bold" cursor="pointer" letterSpacing="wide" color="gray.700" textTransform="capitalize" mr={4} fontFamily={fontFamily} as="a" className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}>
                {i18n.language === 'zh' ? "黄雨佳" : "Yujia Huang"}
              </Text>
            </NextLink>
              
            <Text color="gray.400" mx={1}>|</Text>
              
            <HStack spacing={1} flex="1">
              {NAV_ITEMS.map((item) => (
                <NextLink key={item.href} href={item.href} passHref legacyBehavior>
                  <Text 
                    cursor="pointer" 
                    fontSize="md"
                    letterSpacing="wider"
                    fontWeight="medium"
                    textTransform="uppercase"
                    color={router.pathname === item.href ? "gray.800" : "gray.500"}
                    _hover={{ color: "gray.800" }}
                    px={2}
                    fontFamily={fontFamily}
                    as="a"
                    className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}
                  >
                    {t(`nav.${item.label}`)}
                  </Text>
                </NextLink>
              ))}
            </HStack>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={switchLanguage}
              fontSize="md"
              minW="45px"
              fontFamily={fontFamily}
              className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}
            >
              {router.locale === 'en' ? 'EN' : '中文'}
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={8}>
        <Container maxW="container.xl">
          <Flex>
            {/* Left Sidebar */}
            <VStack w="280px" align="start" spacing={8} pr={10} borderRight="1px" borderColor={borderColor}>
              <Box>
                <Box 
                  borderRadius="full" 
                  overflow="hidden" 
                  width="180px" 
                  height="180px" 
                  position="relative"
                  mb={5}
                >
                  <Image
                    src="/assets/images/avatar/avatar.png"
                    alt="Yujia Huang"
                    width={180}
                    height={180}
                    priority
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </Box>
                <Text fontSize="xl" fontWeight="bold" mb={2} letterSpacing="wide" textTransform="capitalize" color="gray.700" fontFamily={fontFamily} className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}>
                  {i18n.language === 'zh' ? "黄雨佳" : "Yujia Huang"}
                </Text>
                <Text color="gray.600" mb={4} fontSize="md" fontFamily={fontFamily} className="en-text">yujiahuang.research@gmail.com</Text>
                <Divider borderColor="gray.300" mb={4} />
              </Box>
              
              <Box>
                <Text fontWeight="bold" fontSize="md" mb={3} textTransform="uppercase" letterSpacing="wide" color="gray.700" fontFamily={fontFamily} className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}>
                  {t('sidebar.title')}
                </Text>
                <Text color="gray.600" fontSize="md" lineHeight="taller" fontFamily={fontFamily} className={i18n.language === 'zh' ? 'zh-text' : 'en-text'}>
                  {i18n.language === 'zh' ? t('sidebar.intro.zh') : t('sidebar.intro.en')}
                </Text>
                <Divider borderColor="gray.300" mt={4} />
              </Box>
              
              <HStack spacing={4} mt={6}>
                <ChakraLink href="https://github.com/yujahuang" isExternal color="gray.600" _hover={{ color: "gray.800" }}>
                  <Box as="span" fontSize="xl">
                    <FaGithub />
                  </Box>
                </ChakraLink>
                <ChakraLink href="https://linkedin.com/" isExternal color="gray.600" _hover={{ color: "gray.800" }}>
                  <Box as="span" fontSize="xl">
                    <FaLinkedin />
                  </Box>
                </ChakraLink>
              </HStack>
            </VStack>
            
            {/* Main Content */}
            <Box flex="1" pl={10} bg={contentBgColor} p={8} borderRadius="md" boxShadow="sm">
              {children}
            </Box>
          </Flex>
        </Container>
        
        {/* 底部留白 */}
        <Box pb={12}></Box>
      </Box>
    </Box>
  );
} 

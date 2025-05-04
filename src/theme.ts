import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: "'Times New Roman', serif",
    body: "'Times New Roman', serif",
  },
  fontSizes: {
    xs: "0.6875rem",   // 11px
    sm: "0.8125rem",   // 13px
    md: "0.9375rem",   // 15px
    lg: "1.0625rem",   // 17px
    xl: "1.375rem",    // 22px
    "2xl": "1.6875rem", // 27px
    "3xl": "2.0625rem"  // 33px
  },
  colors: {
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    }
  },
  styles: {
    global: (props: any) => {
      const zhFontFamily = "KaiTi, '楷体'";
      const enFontFamily = "'Times New Roman', serif";
      
      return {
        'html, body': {
          fontFamily: props.locale === 'zh' ? zhFontFamily : enFontFamily,
          bg: '#f5f5f5',
          color: 'gray.800',
          fontSize: 'md',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: props.locale === 'zh' ? zhFontFamily : enFontFamily,
        },
        'p, li, span, div, button, a': {
          fontFamily: props.locale === 'zh' ? zhFontFamily : enFontFamily,
        },
        'ul, ol': {
          li: {
            '.zh-text': {
              fontFamily: `${zhFontFamily} !important`
            },
            '.en-text': {
              fontFamily: `${enFontFamily} !important`
            },
            fontFamily: props.locale === 'zh' ? zhFontFamily : enFontFamily,
          }
        },
        // 确保所有中文使用楷体
        '[lang="zh"]': {
          fontFamily: `${zhFontFamily} !important`
        },
        // 确保所有英文使用Times New Roman
        '[lang="en"]': {
          fontFamily: `${enFontFamily} !important`
        },
        // 特殊类设置
        '.zh-text': {
          fontFamily: `${zhFontFamily} !important`
        },
        '.en-text': {
          fontFamily: `${enFontFamily} !important`
        }
      };
    }
  },
})

export default theme 
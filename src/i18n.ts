import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const ns = ['common', 'about', 'projects', 'experience', 'resume', 'contact']
const supportedLngs = ['en', 'zh']

// 避免在服务器端初始化i18next
if (typeof window !== 'undefined') {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      ns,
      defaultNS: 'common',
      supportedLngs,
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
    })
}

export default i18n 
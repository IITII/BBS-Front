import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// 默认语言中文，会被浏览器语言设置覆盖
const DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'localeLanguage'

const locales = {
  zh: require('./libs/zh.json'),
  en: require('./libs/en.json')
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

export const setup = lang => {
  if (lang === undefined) {
    // 读取浏览器语言设置
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)

  Object.keys(locales).forEach(lang => {
    document.body.classList.remove(`lang-${lang}`)
  })
  document.body.classList.add(`lang-${lang}`)
  document.body.setAttribute('lang', lang)

  Vue.config.lang = lang
  i18n.locale = lang
}

setup()
// 覆盖 init 方法，保证 i18n 可以正常被读取
const init = Vue.prototype._init
Vue.prototype._init = function (options) {
  init.call(this, {
    i18n,
    ...options
  })
}

export default i18n

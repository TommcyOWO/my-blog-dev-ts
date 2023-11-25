import enUS from './en-us/'
import chTW from './ch-tw/'

export default defineI18nConfig(()=>({
  legacy: false,
  locale: 'ch_tw',
  messages: {
    en:enUS,
    ch_tw:chTW
  }
}))
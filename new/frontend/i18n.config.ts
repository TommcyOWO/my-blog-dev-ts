import { local as en} from '@/langs/en'
import { local as tw_zh} from '@/langs/tw_zh'

export default defineI18nConfig(()=>({
  legacy: false,
  locale: 'tw_zh',
  messages: {
    en:en,
    tw_zh:tw_zh
  }
}))
export default defineI18nConfig(()=>({
  legacy: false,
  locale: 'taiwan_ch',
  messages: {
    en: {
      index: 'Home',
      about:'About me',
      overview_development:'Overview development',
      work:'Works',
      username:'Username',
      password:'Password',
      welcom:"Welcom ~!Here is Tomycat's blog"
    },
    taiwan_ch: {
      index:'首頁',
      about:'關於我',
      overview_development:'開發介紹',
      work:'作品',
      username:'使用者名稱',
      password:'使用者密碼',
      welcom:"歡迎來到Tomycat 的部落格"
    }
  }
}))
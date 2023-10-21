export default defineI18nConfig(()=>({
  legacy: false,
  locale: 'taiwan_ch',
  messages: {
    en: {
      index: 'Home',
      about:'About me',
      overview_development:'Overview development',
      works:'Works',
      username:'Username',
      password:'Password',
      welcom:"Welcom ~!Here is Tomycat's blog",
      frontend:'Frontend',
      backend:'Backend',
      database:'Database'
    },
    taiwan_ch: {
      index:'首頁',
      about:'關於我',
      overview_development:'開發介紹',
      works:'作品集',
      username:'使用者名稱',
      password:'使用者密碼',
      welcom:"歡迎來到Tomycat 的部落格",
      frontend:'前端框架',
      backend:'後端框架',
      database:'資料庫'
    }
  }
}))
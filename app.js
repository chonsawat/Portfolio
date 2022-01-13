new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
      return {
        name: "Chonsawat Nakanam",
        title: "Chonsawat's Portfolio",
        about: "สวัสดีครับ😊 ผมชนม์สวัสดิ์ นาคนาม นักศึกษาวิทยาการคอมพิวเตอร์ วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่นครับ",
        description: "",
        contact: {
          github: "https://github.com/chonsawat",
          linkedIn: "https://www.linkedin.com/in/chonsawat-nakanam-0a09241b0",
          email: "chonsawat.nakanam@kkumail.com",
          facebook: "https://www.facebook.com/chonsawt.naknam",
          instagram: "https://www.instagram.com/cmmbit/",
          twitter: "https://twitter.com/CNakanam"
        },
        programmingList: [
          { id: 0, text: 'Python' },
          { id: 1, text: 'Java Script' },
          { id: 2, text: 'Java' },
          { id: 3, text: 'C' },
        ],
        cardShow: false,
      }
  },
})
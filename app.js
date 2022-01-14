App = {
  programmingList: [
    { id: 0, text: 'Python' },
    { id: 1, text: 'Java Script' },
    { id: 2, text: 'Java' },
    { id: 3, text: 'C' },
    { id: 3, text: 'C++' },
  ],

  contact: {
    github: "https://github.com/chonsawat",
    linkedIn: "https://www.linkedin.com/in/chonsawat-nakanam-0a09241b0",
    email: "chonsawat.nakanam@kkumail.com",
    facebook: "https://www.facebook.com/chonsawt.naknam",
    instagram: "https://www.instagram.com/cmmbit/",
    twitter: "https://twitter.com/CNakanam"
  },

  contents: [
    {
      title: "ChestXray",
      subTitle: "Deep Neural Network, Multi-label Classification",
      link: "https://colab.research.google.com/drive/1wKeS6WROIFh5lFDp1QRJsYe47S3aEBtg?usp=sharing",
      text: "โปรเจ็ครายวิชา Research Methodology เกี่ยวกับการจำแนกประเภทแบบหลายป้ายด้วยภาพรังสีทรวงอก",
      img: "https://images.unsplash.com/photo-1631563019701-efcf403bc5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Computer Network",
      subTitle: "-",
      link: "https://github.com/chonsawat/Computer-Network",
      text: "",
      img: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Data Engineer",
      subTitle: "-",
      link: "https://github.com/chonsawat/Data-Engineer",
      text: "",
      img: "https://images.unsplash.com/photo-1634942536846-e9863ef9e78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
      title: "Mini Drink Shop",
      subTitle: "-",
      link: "https://github.com/chonsawat/MiniDrinkShop",
      text: "",
      img: "https://images.unsplash.com/photo-1625726124021-feb7ec3f281b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
  ]
}

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
      return {
        name: "Chonsawat Nakanam",
        title: "Chonsawat's Portfolio",
        about: "สวัสดีครับ😊 ผมชนม์สวัสดิ์ นาคนาม นักศึกษาวิทยาการคอมพิวเตอร์ วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่นครับ",
        description: "",
        contact: App.contact,
        programmingList: App.programmingList,
        cardShow: false,
        projectCards: App.contents,
      }
  },
})
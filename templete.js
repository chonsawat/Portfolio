Vue.component('todo-item', {
    props: ['todo'],
    template: /*html*/`<li>{{ todo.text }}</li>`
})

var data = {
    title: "ChestXray",
    subTitle: "Deep Neural Network, Multi-label Classification",
    link: "https://colab.research.google.com/drive/1wKeS6WROIFh5lFDp1QRJsYe47S3aEBtg?usp=sharing",
    text: "โปรเจ็ครายวิชา Research Methodology เกี่ยวกับการจำแนกประเภทแบบหลายป้ายด้วยภาพรังสีทรวงอก"
};

Vue.component('project-card', {
    props: ['data'],
    data: function () {
        return {
            cardShow: false
        }
    },
    template: /*html*/`
    <v-card max-width="350">
        <v-img :src="data.img" height="200px"></v-img>
        <v-card-title>{{data.title}}</v-card-title>
        <v-card-subtitle>{{data.subTitle}}</v-card-subtitle>
        <v-card-actions>
            <a :href="data.link" target="_blank"> <v-btn text dark color="pink"> 🔍 EXplore </v-btn> </a>
            <v-spacer></v-spacer>
            <v-btn icon @click="cardShow = !cardShow">
                <v-icon>{{ cardShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="cardShow">
                <v-divider></v-divider>
                <v-card-text>
                {{data.text}}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
    `
})

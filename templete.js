Vue.component('todo-item', {
    props: ['todo'],
    template: /*html*/`<li>{{ todo.text }}</li>`
})

import { model } from './model'
import { App } from './classes/app'
import "./styles/style.css"



new App(model).init()


// import { title, text, columns, image} from "./templates"
// import {templates} from "./templates"

// const $site = document.getElementById('site')


// model.forEach(block => {
//     // let html = ''
//     // if (block.type === 'title'){
//     //     html = title(block)
//     // }
//     // else if (block.type === 'text'){
//     //     html = text(block)
//     // }
//     // else if (block.type === 'columns'){
//     //     html = columns(block)
//     // }
//     // else if (block.type === 'image'){
//     //     html = image(block)
//     // }
//     // $site.insertAdjacentHTML("beforeend", html)


//     // const toHTML = templates[block.type]
//     // if(toHTML){
//     //     $site.insertAdjacentHTML("beforeend", toHTML(block))
//     // }

//     $site.insertAdjacentHTML("beforeend", block.toHTML())
// })
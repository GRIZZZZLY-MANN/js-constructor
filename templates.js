import {row, col, css} from './utils'
function title(block){
    // return`
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    //     `
    
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles
    const {tag='h1',styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function text(block){
    // return`
    //     <div class="row">
    //         <div class="col-sm">
    //             <p>${block.value}</p>
    //         </div>
    //     </div>
    //     `
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}
function columns(block){
    // let html = ''
    // block.value.forEach(item => {
    //     html += `
    //     <div class="col-sm">
    //           ${item}      
    //     </div>
    //     `
    // })
    // return`
    //     <div class="row">
    //     ${html}
    //     </div>
    //     `

    // const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    // return`
    //     <div class="row">
    //     ${html.join('')}
    //     </div>
    //     `


    const html = block.value.map(col).join('')
    return row(html, css(block.options.styles))
}
function image(block){
    // return `
    // <div class="row">
    //     <img src="${block.value}" alt="">
    // </div>
    // `
    return row(`<img src="${block.value}" alt="image" />`, )
}

export const templates = {
    title,
    image,
    columns,
    text
}
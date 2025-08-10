import imagePath from './assets/image.png'
import {TitleBlock,ImageBlock, ColumnsBlock, TextBlock} from './classes/block.js'
export const model = [
    new TitleBlock('Коструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)', 
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }}),
    new ImageBlock(imagePath,),
    new ColumnsBlock([
        '1111111111111',
        '1111114111111',
        '1111113111111',
        '1111112111111'], 
        {styles: 
            {
            'justify-content': 'center', 
            display: 'flex',
            'font-style': 'italic'
        }}),
    new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perspiciatis.',
        {styles: 
            {
            'text-align': 'center', 
            'font-weight': 'bold',
            background:'orange'
        }}),
]

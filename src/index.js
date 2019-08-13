import 'normalize.css'
import './global.css'

import bg from 'res/bg.jpg'

const image = document.createElement('img')
image.style.width = '100%'
image.style.height = '100%'
image.style.objectFit = 'cover'
image.src = bg

document.body.querySelector('#root').appendChild(image)

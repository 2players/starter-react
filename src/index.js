import 'normalize.css'
import './global.css'

import bg from './assets/bg.jpg'

const image = document.createElement('img')
image.src = bg

document.body.querySelector('#root').appendChild(image)

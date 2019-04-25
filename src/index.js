import 'normalize.css'
import 'web-candy/css/border-box.css'
import 'web-candy/css/native-font.css'
import './global.css'
import bg from './assets/bg.jpg'

const body = document.querySelector('body')
body.style.backgroundImage = `url(${bg})`
body.style.backgroundSize = 'cover'
body.style.backgroundPosition = 'center'

import Kiwi from './kiwi.png'
import './kiwi-image.scss'

class KiwiImage {
  render () {
    const img = document.createElement('img')
    img.alt = 'Kiwi'
    img.src = Kiwi
    img.classList.add('kiwi-image')

    const bodyDomElement = document.querySelector('body')
    bodyDomElement.appendChild(img)
  }
}

export default KiwiImage

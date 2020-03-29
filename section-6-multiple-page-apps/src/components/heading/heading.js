import './heading.scss'
import { upperFirst } from 'lodash'

class Heading {
  render (pageName) {
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')

    h1.innerHTML = `Webpack is awesome. This is "${upperFirst(pageName)}"`
    body.appendChild(h1)
  }
}

export default Heading

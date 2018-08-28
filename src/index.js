import lottie from 'lottie-web'
// import water from './water.json'
import fingerPrint from './fingerPrint.json'

console.log(lottie)
lottie.loadAnimation({
  container: document.querySelector('#container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  // animationData: water,
  animationData: fingerPrint,
  // path: './water.json',
})
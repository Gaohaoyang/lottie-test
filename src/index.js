import lottie from 'lottie-web'
import './index.css'

lottie.loadAnimation({
  container: document.querySelector('.img-area'),
  renderer: 'svg',
  name: 'myLottieAnim',
  loop: true,
  autoplay: true,
  path: '/assets/water.json',
  // path: '/assets/fingerPrint.json',
})

const ctrlArea = document.querySelector('.ctrl-area')
console.log(ctrlArea)
console.log(lottie)

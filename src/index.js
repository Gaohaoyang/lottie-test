import lottie from 'lottie-web'
import './index.css'

const addCtrl = () => {
  const ctrlArea = document.querySelector('.ctrl-area')
  const stopBtn = ctrlArea.querySelector('.stop')
  stopBtn.addEventListener('click', () => {
    lottie.stop('myLottieAnim')
  })

  const pauseBtn = ctrlArea.querySelector('.pause')
  pauseBtn.addEventListener('click', () => {
    lottie.pause('myLottieAnim')
  })
  const playBtn = ctrlArea.querySelector('.play')
  playBtn.addEventListener('click', () => {
    lottie.play('myLottieAnim')
  })

  console.log(ctrlArea)
}

const render = () => {
  lottie.loadAnimation({
    container: document.querySelector('.img-area'),
    renderer: 'svg',
    name: 'myLottieAnim',
    loop: true,
    autoplay: true,
    path: './assets/funky_chicken.json',
    // path: '/assets/water.json',
    // path: '/assets/fingerPrint.json',
  })
  console.log(lottie)
  addCtrl()
}

render()

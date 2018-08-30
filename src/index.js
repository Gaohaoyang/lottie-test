import lottie from 'lottie-web'
import Stats from 'stats.js'

import './index.css'

const addCtrl = (myLottie) => {
  const ctrlArea = document.querySelector('.ctrl-area')
  const stopBtn = ctrlArea.querySelector('.stop')
  const pauseBtn = ctrlArea.querySelector('.pause')
  const playBtn = ctrlArea.querySelector('.play')
  const speed2 = ctrlArea.querySelector('.speed2')
  const speedHalf = ctrlArea.querySelector('.speed5')
  const speed1 = ctrlArea.querySelector('.speed1')
  const direction1 = ctrlArea.querySelector('.direction1')
  const directionBack = ctrlArea.querySelector('.directionBack')
  const gotoStop = ctrlArea.querySelector('.goto-stop')
  const gotoPlay = ctrlArea.querySelector('.goto-play')
  const segment = ctrlArea.querySelector('.segment')

  stopBtn.addEventListener('click', () => {
    myLottie.stop()
  })
  pauseBtn.addEventListener('click', () => {
    myLottie.pause()
  })
  playBtn.addEventListener('click', () => {
    myLottie.play()
  })
  speed2.addEventListener('click', () => {
    myLottie.setSpeed(4)
  })
  speedHalf.addEventListener('click', () => {
    myLottie.setSpeed(0.5)
  })
  speed1.addEventListener('click', () => {
    myLottie.setSpeed(1)
  })
  direction1.addEventListener('click', () => {
    myLottie.setDirection(1)
  })
  directionBack.addEventListener('click', () => {
    myLottie.setDirection(-1)
  })
  gotoStop.addEventListener('click', () => {
    myLottie.goToAndStop(1, true)
  })
  gotoPlay.addEventListener('click', () => {
    myLottie.goToAndPlay(1, true)
  })
  segment.addEventListener('click', () => {
    myLottie.playSegments([10, 20], true)
  })
}

const render = () => {
  const myLottie = lottie.loadAnimation({
    container: document.querySelector('.img-area'),
    renderer: 'svg',
    name: 'myLottieAnim',
    loop: true,
    autoplay: true,
    path: './assets/motorcycle.json',
    // path: './assets/funky_chicken.json',
    // path: './assets/water.json',
    // path: './assets/fingerPrint.json',
  })
  console.log(lottie)
  console.log(myLottie)
  addCtrl(myLottie)
}

render()

const stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

function animate() {
  stats.update()
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)

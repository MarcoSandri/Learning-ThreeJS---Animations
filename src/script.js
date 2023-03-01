import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// Time

// let time = Date.now()

// const clock = new THREE.Clock()

const timeline = gsap.timeline({repeat : -1})

timeline.to(mesh.rotation, { y: Math.PI, duration: 1, ease: 'linear'})

// Animations
const tick = () => {

    // // Using js time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime

    // Using three.js clock
    // const elapsedTime = clock.getElapsedTime()

    // console.log(elapsedTime)


    // console.log(deltaTime)


    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick();
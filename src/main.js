import '../styles/main.css'
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="p-6">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="text-3xl font-bold text-indigo-600">Hello Vite + Tailwind!</h1>
    <div class="card mt-4">
      <button id="counter" type="button" class="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"></button>
    </div>
    <p class="read-the-docs mt-4 text-gray-500">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

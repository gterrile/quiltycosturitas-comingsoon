import quiltyLogo from './assets/quilty-transparent.PNG'
import instagram from './assets/instagram.svg'
import tiktok from './assets/tiktok.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="layout">
        <header class="header">
          <div className='menu'>
            <div className='menu-item borel-regular'>Shop coming soon</div>
          </div>
        </header>
        <main class="content">
          <img src={quiltyLogo} class="logo"/>
          <div class="text-container">
            <h2 class="borel-regular">my little rincon where old telas find new purpose</h2>
          </div>
        </main>
        <footer class="footer">
          <a href="https://www.tiktok.com/@quiltycosturitas">
            <img src={tiktok} class="logo-mini"/>
          </a>
          <a href="https://www.instagram.com/quiltycosturitas/">
          <img src={instagram} class="logo-mini"/>
          </a>
        </footer>
      </div>
    </>
  )
}

export default App

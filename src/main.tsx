import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './HomePage/Home.tsx'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'
import VoceSpace from './VoceSpace/VoceSpaceHome.tsx'
import AppleHome from './AppleStudy/AppleHome.tsx'
import NotFound from './NotFound.tsx'
import RouteChange from './RouteChange.tsx'
import '@fontsource-variable/source-serif-4'
import '@fontsource/ibm-plex-mono/400.css' // one line per Plex Mono weight you use
import MobileNotice from './MobileNotice.tsx'
import { prefetchImages } from './prefetchImages.ts'

window.addEventListener('load', prefetchImages)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteChange />
      <div className="flex min-h-svh flex-col">
        <MobileNotice />
        <NavBar />
        <main className="flex flex-1 flex-col">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work/apple-privacy-label' element={<AppleHome />} />
            <Route path='/work/vocespace' element={<VoceSpace />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)

import React, { useState } from 'react'
import Intro from './components/Intro.jsx'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout.jsx'
import Home from './pages/Home'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

function App() {

  const [showIntro, setShowIntro] = useState(false);

    const hasSeenIntro = sessionStorage.getItem('IntroPlayed');
    if (!hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem('IntroPlayed', 'true');
    }

  return (
    <div>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      {!showIntro && (<Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />} />
          <Route path='skills' element={<Skills />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path={`/projects/:id`} element={<ProjectPage/>} />
        </Route>
      </Routes>)}
    </div>
  )
}

export default App

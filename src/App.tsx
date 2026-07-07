import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppShell } from './components/layout/AppShell'
import { Home } from './pages/Home'
import { Calendar } from './pages/Calendar'
import { DayDetail } from './pages/DayDetail'
import { About } from './pages/About'
import { Profile } from './pages/Profile'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/day/:dayId" element={<DayDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

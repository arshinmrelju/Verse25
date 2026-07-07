import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HomeIcon, CalendarIcon, InfoIcon, UserIcon } from '../ui/Icons'
import { cn } from '../../utils/cn'

const tabs = [
  { path: '/', label: 'Home', icon: HomeIcon },
  { path: '/calendar', label: 'Calendar', icon: CalendarIcon },
  { path: '/about', label: 'About', icon: InfoIcon },
  { path: '/profile', label: 'Profile', icon: UserIcon },
]

export function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-forest-dark/90 backdrop-blur-lg border-t border-christmas-gold/10 safe-area-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2 px-2">
        {tabs.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={cn(
                'relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors duration-200',
                isActive ? 'text-christmas-gold' : 'text-cream/40 hover:text-cream/70',
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-christmas-gold/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={22} className="relative" />
              <span className="relative text-[10px] font-medium tracking-tight">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

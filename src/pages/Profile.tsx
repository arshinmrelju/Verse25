import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { UserIcon } from '../components/ui/Icons'
import { staggerContainer, fadeInUp, scaleIn } from '../animations/variants'
import { signInAnonymously, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../lib/firebase'
import { useCurrentDay } from '../hooks/useDayLock'

export function Profile() {
  const { user, loading } = useAuth()
  const currentDay = useCurrentDay()

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div variants={fadeInUp} className="text-center mb-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-christmas-gold/10 border border-christmas-gold/20">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" className="h-16 w-16 rounded-full object-cover" />
          ) : (
            <UserIcon className="text-christmas-gold" size={28} />
          )}
        </div>
        <h2 className="text-xl font-bold text-cream">{user ? (user.displayName || 'Friend') : 'Guest'}</h2>
        <p className="mt-0.5 text-xs text-cream/50">{user ? user.email : 'Not signed in'}</p>
      </motion.div>

      {!user && !loading && (
        <motion.div variants={scaleIn} className="space-y-3">
          <Card className="text-center mb-4">
            <p className="text-sm text-cream/70 mb-4">
              Sign in or continue as a guest to track your Advent journey.
            </p>
            <div className="flex flex-col gap-2.5">
              <Button size="md" onClick={() => signInWithPopup(auth, googleProvider)} className="w-full">
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Sign in with Google
              </Button>
              <Button variant="ghost" size="sm" onClick={() => signInAnonymously(auth)}>
                Continue as Guest
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {user && (
        <motion.div variants={fadeInUp} className="space-y-3">
          <Card>
            <h3 className="text-sm font-semibold text-christmas-gold mb-3">Your Journey</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream/60">Current Day</span>
                <span className="text-cream font-medium">{currentDay > 0 ? `Dec ${currentDay}` : 'Not started'}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream/60">Progress</span>
                <span className="text-cream font-medium">0 / 25</span>
              </div>
            </div>
          </Card>

          <Button variant="ghost" size="sm" onClick={() => signOut(auth)} className="w-full text-cream/50 hover:text-christmas-red">
            Sign Out
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}

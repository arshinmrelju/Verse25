import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { Snowfall } from '../ui/Snowfall'

export function AppShell() {
  return (
    <div className="min-h-dvh bg-forest-dark flex flex-col">
      <Snowfall />
      <Header />
      <main className="flex-1 pb-20">
        <div className="mx-auto max-w-lg px-4 py-6">
          <Outlet />
        </div>
      </main>
      <Navigation />
    </div>
  )
}

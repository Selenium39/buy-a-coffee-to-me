import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Supporters } from './pages/Supporters'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/supporters" element={<Supporters />} />
      </Route>
    </Routes>
  )
}

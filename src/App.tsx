import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Otherwise } from './pages/Otherwise'
import { Work } from './pages/Work'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/otherwise" element={<Otherwise />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

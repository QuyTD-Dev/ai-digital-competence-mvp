import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { DashboardPage } from './pages/DashboardPage'
import { AssessmentPage } from './pages/AssessmentPage'
import { CertificatePage } from './pages/CertificatePage'
import { LandingPage } from './pages/LandingPage'
import { LegalFrameworkPage } from './pages/LegalFrameworkPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RoleDetailPage } from './pages/RoleDetailPage'
import { RoleSelectionPage } from './pages/RoleSelectionPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { VideoPlayerPage } from './pages/VideoPlayerPage'

export default function App() {
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <AppShell>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/roles" element={<RoleSelectionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/assessment/accounting" element={<AssessmentPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dashboard/learn/:videoId" element={<VideoPlayerPage />} />
          <Route path="/roles/accounting/learn/:videoId" element={<VideoPlayerPage />} />
          <Route path="/framework" element={<LegalFrameworkPage />} />
          <Route path="/roles/:slug" element={<RoleDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

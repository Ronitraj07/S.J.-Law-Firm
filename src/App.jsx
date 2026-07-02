import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';
import ResourcesPage from './pages/ResourcesPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';

import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminRoute from './components/admin/AdminRoute';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* ── Public site ── */}
          <Route path="/" element={
            <><ScrollToTop /><Navbar /><main><HomePage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/services" element={
            <><ScrollToTop /><Navbar /><main><ServicesPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/services/:slug" element={
            <><ScrollToTop /><Navbar /><main><ServiceDetailPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/team" element={
            <><ScrollToTop /><Navbar /><main><TeamPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/team/:slug" element={
            <><ScrollToTop /><Navbar /><main><TeamMemberPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/resources" element={
            <><ScrollToTop /><Navbar /><main><ResourcesPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/resources/:slug" element={
            <><ScrollToTop /><Navbar /><main><ArticlePage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/contact" element={
            <><ScrollToTop /><Navbar /><main><ContactPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/privacy-policy" element={
            <><ScrollToTop /><Navbar /><main><PrivacyPolicyPage /></main><Footer /><WhatsAppButton /></>
          } />
          <Route path="/disclaimer" element={
            <><ScrollToTop /><Navbar /><main><DisclaimerPage /></main><Footer /><WhatsAppButton /></>
          } />

          {/* ── Admin ── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="/admin" element={<Navigate to="/admin/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

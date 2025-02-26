import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Report } from "./pages/Report"
import { SOS } from "./pages/SOS"
import { Volunteer } from "./pages/Volunteer"
import { Incidents } from "./pages/Incidents"
import { AdminDashboard } from "./pages/admin/Dashboard"
import { AdminIncidents } from "./pages/admin/Incidents"
import { AdminUsers } from "./pages/admin/Users"
import { AdminLayout } from "./components/admin/AdminLayout"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/incidents" element={<AdminIncidents />} />
                  <Route path="/users" element={<AdminUsers />} />
                </Routes>
              </AdminLayout>
            }
          />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/sos" element={<SOS />} />
                  <Route path="/volunteer" element={<Volunteer />} />
                  <Route path="/incidents" element={<Incidents />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App


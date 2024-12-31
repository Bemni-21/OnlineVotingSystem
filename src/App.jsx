import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import NomineesSection from './components/NomineesSection';
import NomineesDetail from './pages/NomineesDetailPage';
import Dashboard from './Layout/Dashboard';
import DashboardOverview from './pages/DashboardOverview';
import UserProfile from './pages/UserProfile';
import AddInformation from './pages/AddInformation';
import ProgressPage from './pages/ProgressPage';
import AdminDashboard from './Layout/AdminDashboard';
import NomineeTable from './pages/NomineeTable';
import VoterTable from './pages/VoterTable';
import EligibleNomineeTable from './pages/EligibleNomineeTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authpage" element={<AuthPage />} />
        
        {/* Dashboard Layout with nested route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<DashboardOverview />} />
        </Route>

        <Route path="/profile" element={<Dashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<UserProfile/>} />
        </Route>
        <Route path="/add-information" element={<Dashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<AddInformation/>} />
        </Route>
        <Route path="/progress" element={<Dashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<ProgressPage/>} />
        </Route>
        <Route path="/admin/nominees" element={<AdminDashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<NomineeTable />} />
        </Route>
     
        <Route path="/admin/voters" element={<AdminDashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<VoterTable/>} />
        </Route>
        <Route path="/admin/eligible-nominees" element={<AdminDashboard />}>
          {/* Nested route for DashboardOverview */}
          <Route path="" element={<EligibleNomineeTable/>} />
        </Route>
        <Route path="/nominees" element={<NomineesSection />} />
        <Route path="/nominee-detail/:id" element={<NomineesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

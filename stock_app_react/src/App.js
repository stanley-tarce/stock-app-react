import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainTraderDashboard';
import MainAdminDashboard from './Pages/Admin/MainAdminDashboard';
import AdminHomeDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminHomeDisplay';
import AdminUsersDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminUsersDisplay';
import AdminPerUserDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminPerUserDisplay';
import TraderHomeDisplay from './Pages/Trader/MainTraderDashboardChildren/TraderHomeDisplay';
import TraderUserDisplay from './Pages/Trader/MainTraderDashboardChildren/TraderUserDisplay'

function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },   
    { path: '/signup', element: <Signup />, exact: true },
    { 
      path: '/main', element: <MainDashboard />, children: [
        { path: '', element: <TraderHomeDisplay /> }
      ]
    },
    
    {
      path: '/admin', element: <MainAdminDashboard />, children: [
        { path: '', element: <AdminHomeDisplay /> },
        { path: 'users', element: <AdminUsersDisplay /> },
        { path: 'users/:id', element: <AdminPerUserDisplay /> }
      ]
    }
  ])
  return (
    <DataHooks>
      {routes}
    </DataHooks>
  );
}

export default App;

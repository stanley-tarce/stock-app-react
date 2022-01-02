import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainDashboard';
import MainAdminDashboard from './Pages/Admin/MainAdminDashboard';
import { AdminHomeDisplay, AdminUsersDisplay, AdminPerUserDisplay, AdminCreateTrader, AdminMarketsDisplay } from './Pages/Admin/MainAdminDashboardChildrens'
// import PendingAccounts from './Components/PendingAccounts';


function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },
    { path: '/signup', element: <Signup />, exact: true },
    { path: '/main', element: <MainDashboard /> },
    {
      path: '/admin', element: <MainAdminDashboard />, children: [
        { path: '', element: <AdminHomeDisplay /> },
        { path: 'users', element: <AdminUsersDisplay /> },
        { path: 'users/:id', element: <AdminPerUserDisplay /> },
        { path: 'markets', element: <AdminMarketsDisplay /> },
        { path: 'createtrader', element: <AdminCreateTrader /> }
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

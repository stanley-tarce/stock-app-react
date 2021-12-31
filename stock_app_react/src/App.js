import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainDashboard';
import MainAdminDashboard from './Pages/Admin/MainAdminDashboard';
import AdminDashboardMainDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminDashboardMainDisplay';
import AdminDashboardUserDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminDashboardUserDisplay';
import PendingAccounts from './Components/PendingAccounts';



const test = <>Stanleyasd </>
function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },
    { path: '/signup', element: <Signup />, exact: true },
    { path: '/main', element: <MainDashboard /> },

    { path: '/pending', element: <PendingAccounts/>},
    {
      path: '/admin', element: <MainAdminDashboard />, children: [
        { path: '', element: <AdminDashboardMainDisplay /> },
        { path: 'user', element: <AdminDashboardUserDisplay /> }
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

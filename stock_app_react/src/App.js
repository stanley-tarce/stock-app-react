import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainDashboard';
import MainAdminDashboard from './Pages/Admin/MainAdminDashboard';
import AdminDashboardMainDisplay from './Pages/Admin/MainAdminDashboardChildrens/AdminDashboardMainDisplay';



const test = <>Stanleyasd </>
function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },
    { path: '/signup', element: <Signup />, exact: true },
    { path: '/main', element: <MainDashboard /> },
    {
      path: '/admin', element: <MainAdminDashboard />, children: [
        { path: '', element: <AdminDashboardMainDisplay /> },
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

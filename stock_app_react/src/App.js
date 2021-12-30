import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainDashboard';



function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },
    { path: '/signup', element: <Signup />, exact: true },
    { path: '/main', element: <MainDashboard /> }
  ])
  return (
    <DataHooks>
      {routes}
    </DataHooks>
  );
}

export default App;

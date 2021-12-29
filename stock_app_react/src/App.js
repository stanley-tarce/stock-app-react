import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';



function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn /> },
    { path: '/signup', element: <Signup /> }
  ])
  return (
    <DataHooks>
      {routes}
    </DataHooks>
  );
}

export default App;

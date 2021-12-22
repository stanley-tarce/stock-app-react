import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';



function App() {
  const routes = useRoutes([
    { path: '/', element: <SignIn /> },
  ])
  return (
    <DataHooks>
      {routes}
    </DataHooks>
  );
}

export default App;

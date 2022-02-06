import { useRoutes } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import DataHooks from './Data/DataHooks';
import Signup from './Pages/Signup';
import MainDashboard from './Pages/Trader/MainTraderDashboard';
import MainAdminDashboard from './Pages/Admin/MainAdminDashboard';
import { AdminHomeDisplay, AdminUsersDisplay, AdminPerUserDisplay, AdminCreateTrader, AdminMarketsDisplay } from './Pages/Admin/MainAdminDashboardChildrens'
import { Toaster } from 'react-hot-toast'
import { TraderHomeDisplay, TraderUserDisplay, TraderWalletDisplay, TraderMarketDisplay, TraderDepositDisplay, TraderWithdrawDisplay } from './Pages/Trader/MainTraderDashboardChildren';
import { TraderSingleStockView, TraderStocks, TraderTransactions } from './Pages/Trader/MainTraderDashboardChildren/TraderWalletChildren';
import NewMarket from './Pages/Admin/MainAdminDashboardChildrens/NewMarket';
// import PendingAccounts from './Components/PendingAccounts';


function App() {

  const routes = useRoutes([
    { path: '/', element: <SignIn />, exact: true },
    { path: '/signup', element: <Signup />, exact: true },
    {
      path: '/main', element: <MainDashboard />, children: [
        { path: '', element: <TraderHomeDisplay /> },
        { path: 'user', element: <TraderUserDisplay /> },
        { path: 'markets', element: <TraderMarketDisplay /> },
        { path: 'markets/:id', element: <TraderSingleStockView /> },
        { path: 'deposit', element: <TraderDepositDisplay /> },
        { path: 'withdraw', element: <TraderWithdrawDisplay /> },

        {
          path: 'wallet', element: <TraderWalletDisplay />, children: [
            { path: 'transactions', element: <TraderTransactions /> },
            { path: '', element: <TraderStocks /> }
          ]
        },


      ]
    },

    {
      path: '/admin', element: <MainAdminDashboard />, children: [
        { path: '', element: <AdminHomeDisplay /> },
        { path: 'users', element: <AdminUsersDisplay /> },
        { path: 'users/:id', element: <AdminPerUserDisplay /> },
        { path: 'markets', element: <AdminMarketsDisplay /> },
        { path: 'markets/:id', element: <NewMarket /> },
        { path: 'createtrader', element: <AdminCreateTrader /> },
      ]
    }
  ])
  return (
    <DataHooks>
      {routes}
      <Toaster reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: 'w-auto h-[50px] text-[14px]',
          duration: 5000,
          style: {
            background: '#0F253A',
            color: 'white',
          },
          // Default options for specific types
          success: {
            position: 'top-center',
            // className: 'relative top-[-70px]',
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
          error: {
            duration: 4000,
            position: 'top-center',
            theme: {
              primary: 'red',
              secondary: 'black',
            }
          }
        }} />

    </DataHooks>
  );
}

export default App;

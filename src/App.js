import logo from './logo.svg';
import './App.css';
import Header from"./components/Header";
import  ReactDOM  from 'react-dom/client';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body  from './components/Body';
import BestSellers from './components/BestSellers';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import Login from './components/Login';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={appStore}>
     <div>
      <Header/>
      <Outlet/>
      
     </div>
     </Provider>
      
  );
}

const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/" ,
        element:<Body/>
      },
      {
        path: "/bestsellers" ,
        element:<BestSellers/>
      },
      {
        path: "/login" ,
        element:<Login/>
      },
      {
        path: "/cart" ,
        element:<Cart/>
      },
      
      
    ],
  }
]);

export default App;

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
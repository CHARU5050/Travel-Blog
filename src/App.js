import {createBrowserRouter,RouterProvider,Route, Outlet,useLocation} from"react-router-dom";
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import Single from './pages/single'
import Write from './pages/write'
import Actual from './pages/actual';
import Navbar from './navbar'
import Footer from './footer'
import Search from './pages/search';
const ScrollToTop=()=>{
  const{pathname}=useLocation();
  window.scrollTo(0,0);
  return null;
}

  const Layout=()=>{
    return(
      <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </>
    )

  }
  const router=createBrowserRouter([
    {
      path:"/front",
      element:<Actual></Actual>
    },
    {
      path:"/",
      element:<Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },{
          path:"/posts/:id",
          element:<Single></Single>
        },{
          path:"/search",
          element:<Search></Search>
        },
        {
          path:"/write",
          element:<Write></Write>
        }

      ]
    },
    {
      path:"/register",
      element:<Register></Register> },
    {
      path:"/login",
      element:<Login></Login>,
    }
  ]);
  function App() {
  return (<div className="app">
    <div className="container">
    <RouterProvider router={router}> <ScrollToTop/></RouterProvider>
    </div>
    </div>
  
  );
}

export default App;

import InfoPage from './InfoPage';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path:'/browse/:id',
      element:<InfoPage/>
    }
   
  ]);


  

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
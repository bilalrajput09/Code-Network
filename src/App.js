import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RootElement from './components/RootElement';
import Feature from './components/Feature';
import Login from './components/Login';
import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      { path: '/', element: <WelcomePage /> },
      { path: '/features', element: <Feature /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

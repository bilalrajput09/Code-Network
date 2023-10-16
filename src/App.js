import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import RootElement from './components/RootElement';
import Feature from './components/Feature';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      { path: '/', element: <WelcomePage /> },
      { path: '/features', element: <Feature /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

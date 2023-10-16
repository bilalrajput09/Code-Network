import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

const router = createBrowserRouter([{ path: '/', element: <WelcomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

const router = createBrowserRouter([{ path: '/', element: <HelloWorld /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

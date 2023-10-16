import Navigation from './Navigation';
import Footer from './Footer';
import { Outlet } from 'react-router';

const RootElement = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootElement;

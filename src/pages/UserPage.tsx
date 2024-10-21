import Bienvenida from '../components/Bienvenida';
import NavbarUser from '../components/NavbarUser';
import Others from '../components/Others';
import Popular from '../components/Popular';
import Footer from '../components/Footer';

const UserPage: React.FC = () => {
  return (
    <div>
      <NavbarUser/>
      <Bienvenida/>
      <Popular/>
      <Others/>
      <Footer/>
    </div>
  );
};

export default UserPage;
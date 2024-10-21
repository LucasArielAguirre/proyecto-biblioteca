import Bienvenida from '../components/Bienvenida';
import Others from '../components/Others';
import Popular from '../components/Popular';
import Footer from '../components/Footer';
import NadvarAdmin from '../components/NavbarAdmin';
const AdminPage: React.FC = () => {
  return (
    <div>
        <NadvarAdmin/>
        <Bienvenida/>
        <Popular/>
        <Others/>
        <Footer/>
    </div>
  );
};

export default AdminPage;
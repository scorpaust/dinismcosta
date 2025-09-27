import { Outlet } from "react-router-dom";
import ContactFooter from "../../components/contact-footer/contact-footer.component";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
      <ContactFooter />
    </div>
  );
};

export default Home;

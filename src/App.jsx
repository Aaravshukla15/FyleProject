import ClientsFeedBack from "./components/ClientsFeedBack";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ourgrowth from "./components/Ourgrowth";
import OurProjects from "./components/OurProject";
import OurWorks from "./components/OurWorks";
import Whyus from "./components/Whyus";

const App = () => {
  return (
    <div>
      <Home />
      <OurWorks />
      <Whyus />
      <OurProjects />
      <Ourgrowth />
      <ClientsFeedBack />
      <Footer />
    </div>
  );
};

export default App;

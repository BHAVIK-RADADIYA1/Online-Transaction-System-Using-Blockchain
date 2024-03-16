import { Navbar, Services, Transaction, Welcome } from "../components";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
    </div>
  );
};

export default Hero;

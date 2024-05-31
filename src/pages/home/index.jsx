import Header from "@/components/Header";
import Feature from "@/components/Feature";
import NewestUpdate from "@/components/NewestUpdate";
import Banner from "@/components/Banner";
import SlidesImg from "@/components/SlidesImg";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate , NavLink } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <NewestUpdate />
      <SlidesImg />
      <Footer />
    </>
  );
}

export default Home;

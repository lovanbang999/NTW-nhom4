import Header from "@/components/Header";
import Feature from "@/components/Feature";
import NewestUpdate from "@/components/NewestUpdate";
import Banner from "@/components/Banner";
import SlidesImg from "@/components/SlidesImg";
import Footer from "@/components/Footer";
function LandingPage(){
    return(
        <>
            <Header/>
            <Banner/>
            <Feature/>
            <NewestUpdate/>
            <SlidesImg/>
            <Footer/>
        </>
    )
}


export default LandingPage;
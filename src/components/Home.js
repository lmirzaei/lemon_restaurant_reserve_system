import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Specials from "./Specials";


const Home = ({bookingData}) => {
    console.log(bookingData);
    return (
        <>
            <Header/>
            <br/><br/><br/><br/><br/>
            <Hero/>
            <Specials/>
            <Footer/>
        </>
    );
};

export default Home;

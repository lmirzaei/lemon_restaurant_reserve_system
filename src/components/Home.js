import Header from "./Header";
import Main from './Main';
import Footer from "./Footer";
import Hero from "./Hero";


const Home = ({bookingData}) => {
    console.log(bookingData);
    return (
        <>
            <Header/>
            <br/><br/><br/><br/><br/>
            <Hero/>
            <Footer/>
        </>
    );
};

export default Home;

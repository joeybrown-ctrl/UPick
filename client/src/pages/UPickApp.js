import HomeNav from '../components/HomeNav';
import JumboImage from '../components/JumboImage';
import About from '../components/About';
import FunctionCarousel from '../components/FunctionCarousel';
import Functionality from '../components/Functionality'; 
import Design from '../components/Design';
import Developers from '../components/Developers';


function UPickApp() {

    return(
        
        <>
            <HomeNav/>
            <JumboImage/>
            <About/>
            <FunctionCarousel/>
            <Functionality/>
            <Design/>
            <Developers/>
        </>  
    );
}

export default UPickApp;
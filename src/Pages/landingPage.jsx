import Navbar from "../navBar/Navbar";
import SectionOne from "../firstPageComponent/sectionOne";
import SocialMedia from "../firstPageComponent/socialMedia";
import AboutMe from "../firstPageComponent/aboutMe";
import Footer from "../Footer/Footer";
import Gallery from "../firstPageComponent/Gallery";
function landingPage(){

    return<>
   <Navbar />
   <SectionOne /> 
   <SocialMedia />
   <AboutMe />
   <Gallery /> 
   <Footer/>

    </>
}
export default landingPage;
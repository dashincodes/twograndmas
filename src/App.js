import "./App.css";
import HeroHeader from "./Components/HeroHeader";
import LocationSection from "./Components/LocationSection";
import NavBar from "./Components/NavBar";
import MenuSection from "./Components/MenuSection";
import BookTheTruckSection from "./Components/BookTheTruckSection";
import TestimonialSection from "./Components/TestimonialSection";
import WelcomeSection from "./Components/WelcomeSection";
import CateringSection from "./Components/CateringSection";
import Footer from "./Components/Footer";
import { ArrowUpwardRounded } from "@mui/icons-material";

function App() {
  return (
    <div className="App ">
      <div>
        <NavBar />
      </div>
      <div>
        <HeroHeader />
      </div>
      <div>
        <LocationSection />
      </div>
      <div>
        <MenuSection />
      </div>
      <div>
        <BookTheTruckSection />
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <WelcomeSection />
      </div>
      <div>
        <CateringSection />
      </div>
      <div>
        <Footer />
      </div>
      <div className="fixed bottom-10 right-5 bg-red-600 rounded-full p-1" ><ArrowUpwardRounded style={{fontSize: 50, color: "white"}}/></div>
     
    </div>
  );
}

export default App;

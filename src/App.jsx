import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plan from "./components/Plans/Plan";
import Testimonials from "./components/testimonials/Testimonials";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";


import './App.css'

function App() {
    return(
        <div className="App">
            <Hero/>
            <Programs/>
            <Reasons/>
            <Plan/>
            <Testimonials />
            <Join />
            <Footer />
        </div>
    );
}

export default App

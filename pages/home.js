import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";
import AddMovie from "../components/AddMovie/AddMovie";
import DataMovie from "../utils/constans/DataMovie";

function Main() {
   //state
   const [item, setItem] = useState(DataMovie)

    return (
      <main>
        <Hero />
        <Movies item={item}/>
        <AddMovie movies={item} setMovies={setItem}/>
      </main>
    );
  }
  
function Home() {
    return (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    );
  }

export default Home;
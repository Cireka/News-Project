import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import NewsBox from "./Components/NewsBox";

function App() {
  return (
    <div className="mx-[auto] max-w-[1300px] ">
      <Navbar />
      <Hero />
      <NewsBox />
    </div>
  );
}

export default App;

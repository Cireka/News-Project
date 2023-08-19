import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="mx-[auto] max-w-[1300px] ">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;

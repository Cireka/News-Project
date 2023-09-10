import { Fragment } from "react";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Main />
    </Fragment>
  );
}

export default App;

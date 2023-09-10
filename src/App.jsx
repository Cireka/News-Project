import { Fragment } from "react";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { NewsContext } from "./Context/NewsContext";

function App() {
  return (
    <Fragment>
      <NewsContext>
        <Navbar />
        <Hero />
        <Main />
      </NewsContext>
    </Fragment>
  );
}

export default App;

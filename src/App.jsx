import { Fragment } from "react";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";


function App() {
  // https://newsdata.io/api/1/news?apikey=pub_281999e30d44e61a0eb6a2e8c76d095edecfe&q=pizza

  return (
    <Fragment>
      <div className="mx-[auto] max-w-[1300px] ">
        <Navbar />
        <Hero />
        <Main />
      </div>
    </Fragment>
  );
}

export default App;

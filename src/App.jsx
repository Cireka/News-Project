import { Fragment } from "react";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { appContext } from "./Context/NewsContext";
import LoaderAnimaton from "../utils/LoaderAnimaton";

function App() {
  const ctx = useContext(appContext);
  const loading = ctx.loading;
  return (
    <Fragment>
      <Navbar />
      {loading && <LoaderAnimaton loading={loading} />}

      {!loading && (
        <>
          <Hero />
          <Main />
        </>
      )}
    </Fragment>
  );
}

export default App;

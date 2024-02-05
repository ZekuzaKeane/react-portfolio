import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Portfolio from "./components/Portfolio";
import { useLocation } from "react-router-dom";

function App() {
  const activePage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav activePage={activePage} />
      </Header>
      <main>
        <Page activePage={activePage} />
      </main>
    </div>
  );
}

export default App;
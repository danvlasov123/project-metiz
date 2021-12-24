import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";

import { HeaderDefault } from "./components/HeaderDefault";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modals from "./components/Modals/Modals";

import MainPage from "./views/Main/Main";
import Card from "./views/Card/Card";
import Cart from "./views/Cart/Cart";
import Catalog from "./views/Catalog/Catalog";
import PriceList from "./views/PriceList/PriceList";
import Awards from "./views/Awards/Awards";
import News from "./views/News/News";
import Contact from "./views/Contact/Contact";
import Result from "./views/Result/Result";
import NotFound from "./views/404/404";

function App() {
  return (
    <Router>
      <HeaderDefault>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/catalog/card" component={Card} />
            <Route exact path="/price" component={PriceList} />
            <Route exact path="/awards" component={Awards} />
            <Route exact path="/news" component={News} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/404" component={NotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </HeaderDefault>

      <Modals />
    </Router>
  );
}

export default App;

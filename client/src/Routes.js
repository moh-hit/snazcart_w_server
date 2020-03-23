import React from 'react'

import Home from "./Views/Home";
import Accessories from "./Views/Category/Accessories";
import BagsandWallets from "./Views/Category/BagsandWallets"
// import CakesandBakes from "./Views/Category/CakesandBakes"
// import Clothing from "./Views/Category/Clothing"
// import GiftsandCards from "./Views/Category/GiftsandCards"
// import HealthandBeauty from "./Views/Category/HealthandBeauty"
// import HomeandDecor from "./Views/Category/HomeandDecor"
// import More from "./Views/Category/More"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default function Routes() {
    return (
  
        <Router>
          <main>
            <Route exact path="/" exact component={Home} />
            <Route exact path="/Accessories" component={Accessories} />
            <Route path="/Category/BagsandWallets" component={BagsandWallets} />
            {/* <Route path="/Category/CakesandBakes" component={CakesandBakes} />
            <Route path="/Category/Clothing" component={Clothing} />
            <Route path="/Category/GiftsandCards" component={GiftsandCards} />
            <Route path="/Category/HealthandBeauty" component={HealthandBeauty} />
            <Route path="/Category/HomeandDecor" component={HomeandDecor} />
            <Route path="/Category/More" component={More} /> */}
          </main>
        </Router>
       
    );
  }
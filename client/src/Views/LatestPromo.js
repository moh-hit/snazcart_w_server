import React, { Fragment } from "react";
import LatestPromoCard from "../Components/LatestPromoCard";

class Home extends React.Component {
  render() {
    const sources = [
      "https://storage.cloud.google.com/snazcartweb/promo%20cards/promo_1.jpg",
      "https://storage.cloud.google.com/snazcartweb/promo%20cards/promo_2.jpg",
      "https://storage.cloud.google.com/snazcartweb/promo%20cards/promo_3.jpg",
      "https://storage.cloud.google.com/snazcartweb/promo%20cards/promo_4.jpg"
    ];
    const slides = sources.map(source => (
      <LatestPromoCard src={source} />
    ));
    return (
      <section>
        <div className="container-custom">
          <div className="row">
            {slides}
          </div>
        </div>
      </section>
    );
  }
}
export default Home;

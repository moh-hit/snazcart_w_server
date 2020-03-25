import React, { Component } from "react";
import SectionTitle from "../Components/SectionTitle";
import TrendingProductsCard from "../Components/TrendingProductsCard";

class TrendingProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var trending_products = [
      {
        image:
          "https://i.etsystatic.com/6032137/r/il/9e75e6/1941982764/il_1588xN.1941982764_ajr8.jpg",
        price: "524",
        name: "Men Navy Blue  Shirt"
      },
      {
        image:
          "https://i.etsystatic.com/22328170/d/il/4bc910/2209267278/il_340x270.2209267278_4pp4.jpg",
        price: "559",
        name: "Women Navy Blue  Kurta"
      },
      {
        image:
          "https://i.etsystatic.com/6110380/d/il/3afe83/1903103544/il_340x270.1903103544_fau2.jpg",
        price: "764",
        name: "Women Yellow Jumpsuit"
      },
      {
        image:
          "https://i.etsystatic.com/13759830/d/il/32b2df/1241278520/il_340x270.1241278520_836q.jpg",
        price: "699",
        name: "Men Grey Sweatshirt"
      },
      {
        image:
          "https://i.etsystatic.com/8774067/c/943/749/0/97/il/65a93d/1304249684/il_340x270.1304249684_9d3i.jpg",
        price: "26499",
        name: "Unisex Silver-Toned Series "
      },
      {
        image:
          "https://i.etsystatic.com/7371176/r/il/47f375/1400337873/il_794xN.1400337873_b22x.jpg",
        price: "1574",
        name: "Men Gray Sneakers"
      }

    ];
    var all_trending = trending_products.map(products => {
      return (
        <TrendingProductsCard
          source={products.image}
          price={products.price}
          name={products.name}
        />
      );
    });

    return (
      <div className="container-custom">
        <SectionTitle title="Trending Products" />
        <div className="row justify-content-between">{all_trending}</div>
      </div>
    );
  }
}

export default TrendingProducts;

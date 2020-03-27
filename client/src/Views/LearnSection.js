import React, { Component } from "react";
import SectionTitle from "../Components/SectionTitle";
import LearnVideoCard from "../Components/LearnVideoCard";


class LearnSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var trending_products = [
      {
        image:
          "https://www.unheap.com/wp-content/uploads/jQuery-Video-Extend.png",
        author: "Radhika Mohan",
        name: "How to make a plane with paper in 3 easy steps",
        views: "265"
      },
      {
        image:
          "https://snazcartassets.s3.ap-south-1.amazonaws.com/web/videos/1.mp4",
        author: "Fatima Delgadillo",
        name: "Women Navy Blue  Kurta",
        views: "265"
      },
      {
        image:
          "https://www.unheap.com/wp-content/uploads/jQuery-Video-Extend.png",
        author: "Fatima Delgadillo",
        name: "Women Yellow Jumpsuit",
        views: "265"
      },
      {
        image:
          "https://www.unheap.com/wp-content/uploads/jQuery-Video-Extend.png",
        author: "Fatima Delgadillo",
        name: "Women Yellow Jumpsuit",
        views: "265"
      },
      {
        image:
          "https://www.unheap.com/wp-content/uploads/jQuery-Video-Extend.png",
        author: "Fatima Delgadillo",
        name: "Men Grey Sweatshirt",
        views: "265"
      },
      {
        image:
          "https://www.unheap.com/wp-content/uploads/jQuery-Video-Extend.png",
        author: "Fatima Delgadillo",
        name: "Men Grey Sweatshirt",
        views: "265"
      }
    ];
    var all_trending = trending_products.map(learnvideo => {
      return (
        <LearnVideoCard
          source={learnvideo.image}
          author={learnvideo.author}
          name={learnvideo.name}
          views={learnvideo.views}
        />
      );
    });

    return (
      <div className="container-custom section-padding my-5">
        <SectionTitle title="Learn & Make" />
        <div className="d-flex justify-content-between">{all_trending}</div>
      </div>
    );
  }
}

export default LearnSection;


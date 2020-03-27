import React, { Fragment } from "react";
import HeaderSlider from "../Components/HeaderSlider";
import LatestPromo from "./LatestPromo";
import TrendingProducts from "./TrendingProducts";
import BannerImage from "../Components/BannerImage";
import GridGallery from "../Components/GridGallery";
import LearnSection from "./LearnSection";


class Home extends React.Component {

  render() {
    
    return (
      <>
      
        <HeaderSlider />
        <LatestPromo />
        
        <TrendingProducts />
        <BannerImage source="https://storage.cloud.google.com/snazcartweb/promo%20slide/promo_slide_1.jpg"/>
        <GridGallery />
        <LearnSection />
        <BannerImage source="https://storage.cloud.google.com/snazcartweb/promo%20slide/promo_slide_2.jpg"/>

      </>
    );
  }
}
export default Home;

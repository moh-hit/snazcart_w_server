import React, { lazy, Suspense } from "react";
import HeaderSliders from "../Components/HeaderSlider";
import LatestPromo from "./LatestPromo";
import TrendingProducts from "./TrendingProducts";
import BannerImage from "../Components/BannerImage";
import GridGallery from "../Components/GridGallery";
import LearnSection from "./LearnSection";

const HeaderSlider = lazy(() => import("../Components/HeaderSlider"));

class Home extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<HeaderSliders />}>
          <HeaderSlider />
        </Suspense>
        <LatestPromo />

        <TrendingProducts />
        <BannerImage source="https://storage.cloud.google.com/snazcartweb/promo%20slide/promo_slide_1.jpg" />
        <GridGallery />
        <LearnSection />
        <BannerImage source="https://storage.cloud.google.com/snazcartweb/promo%20slide/promo_slide_2.jpg" />
      </>
    );
  }
}
export default Home;

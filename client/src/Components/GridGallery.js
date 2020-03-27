import React from "react";
import SectionTitle from "../Components/SectionTitle";

export default function GridGallery() {
  return (
    <div className="container-custom d-none d-lg-block my-5">
      <SectionTitle title="Explore The Popular Collections" />

      <div className="d-flex justify-content-between">
        <div>
          <img
            width="100%"
            style={{ paddingRight: 10, borderRadius: 5 }}
            src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_1.jpg"
          />
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <img
                width="100%"
                style={{ paddingRight: 5, borderRadius: 5 }}
                src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_2.jpg"
              />
            </div>
            <div>
              <img
                width="100%"
                style={{ paddingLeft: 5, borderRadius: 5 }}
                src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_3.jpg"
              />
            </div>
          </div>
          <div>
            <div>
              <img
                width="100%"
                style={{ paddingTop: 10, borderRadius: 5 }}
                src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default  function SectionTitle(props){
  return (
    <div className="row section-title">
      <h4 className="float-left">{props.title}</h4>
      <a className="float-right text-uppercase section-more">Explore More</a>
    </div>
  )
}


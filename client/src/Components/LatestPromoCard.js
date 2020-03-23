import React, { Component } from 'react';

class LatestPromoCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <div class="col-lg-3 col-sm-6 col-md-3 my-5">
                        <div class="service-img-icon">
                            <img src={this.props.src} alt="promo" class="promo-img" />
                        </div>
                        
                </div>
        );
    }
}

export default LatestPromoCard;
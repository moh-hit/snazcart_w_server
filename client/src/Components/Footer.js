import React, { Component } from "react";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import Divider from "@material-ui/core/Divider";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from "@material-ui/core/colors";
import Sticky from "react-sticky-el";


class Footer extends Component {
  render() {
    const numbers = [
      "Accessories",
      "Bags & Wallets",
      "Cakes & Bakes",
      "Clothing",
      "Gifts",
      "Health & Beauty",
      "Home & Decor",
      "More",
      "Accessories",
      "Bags & Wallets",
      "Cakes & Bakes",
      "Clothing",
      "Gifts",
      "Health & Beauty",
      "Home & Decor",
      "More",
      "Accessories",
      "Bags & Wallets",
      "Cakes & Bakes",
      "Clothing",
      "Gifts",
      "Health & Beauty",
      "Home & Decor",
      "More"
    ];
    const listItems = numbers.map(number => (
      <li>
        <a href="/category">
          {number}&nbsp; |
        </a>
      </li>
    ));
    return (
      <>
<Sticky>
          <div className="footer-newsletter container-custom justify-content-between">
          <p className="align-text-bottom">Sign up for our newsletters to receive latest offers and products. We don't spam.

</p>
          <ul className="button-ul row">
            <li>
              
							<input class="rectangle" type="text" placeholder="Your Email" />
            </li>
            <li className="count-me-in">
              <a>Count me in</a>
            </li>
          </ul>
        </div>
        <footer id="footer">
          <div className="container-footer row col-lg-12 pt-5">
            <div className="col-lg-2">
              <strong>
                <span> Online Shopping</span>
              </strong>
              <ul className="footer-list mt-3">
                <li>
                  <a>Accessories</a>
                </li>
                <li>
                  <a>Bags & Wallets</a>
                </li>
                <li>
                  <a>Cakes & Bakes</a>
                </li>
                <li>
                  <a>Clothing</a>
                </li>
                <li>
                  <a>Gifts & cards</a>
                </li>
                <li>
                  <a>Health & Beauty</a>
                </li>
                <li>
                  <a>Toys</a>
                </li>
              </ul>
              
            </div>
            <div className="col-lg-2">
              <strong>
                <span> Online Shopping</span>
              </strong>
              <ul className="footer-list mt-3">
                <li>
                  <a>FACEBOOK</a>
                </li>
                <li>
                  <a>TWITTER</a>
                </li>
                <li>
                  <a>INSTAGRAM</a>
                </li>
                <li>
                  <a>SNAPCHAT</a>
                </li>
              </ul>
             
            </div>
            <div className="col-lg-2">
              <strong>
                <span> Company</span>
              </strong>
              <ul className="footer-list mt-3">
                <li>
                  <a>FACEBOOK</a>
                </li>
                <li>
                  <a>TWITTER</a>
                </li>
                <li>
                  <a>INSTAGRAM</a>
                </li>
                <li>
                  <a>SNAPCHAT</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 row">
              <div>
                <strong>
                  <span> Follow us on</span>
                </strong>
                <ul className="footer-list mt-3">
                  <li>
                    <a><FacebookIcon fontSize="small" /> Facebook</a>
                  </li>
                  <li>
                    <a><TwitterIcon fontSize="small" /> Twitter</a>
                  </li>
                  <li>
                    <a href="http://www.instagram.com/snazcart"><InstagramIcon fontSize="small" /> Instagram</a>
                  </li>
                  <li>
                    <a><LinkedInIcon fontSize="small" /> LinkedIn</a>
                  </li>
                  <li>
                    <a><YouTubeIcon fontSize="small" /> YouTube</a>
                  </li>
                </ul>
              </div>
            </div>
            <Divider orientation="vertical" flexItem light="true" />

            <div className="col-lg-3 feature-main">
              <div className="row feature">
                <AccountBalanceWalletOutlinedIcon style={{ fontSize: 40 }} />
                <p className="col-lg-8 feature-desc">
                  Lightweight cushioning and durable support with a Phylon
                  midsole
                </p>
              </div>
              <div className="row feature">
                <AlternateEmailOutlinedIcon style={{ fontSize: 40 }} />
                <p className="col-lg-8 feature-desc">
                  Lightweight cushioning and durable support with a Phylon
                  midsole
                </p>
              </div>
              <div className="row feature">
                <LocalShippingOutlinedIcon style={{ fontSize: 40 }} />
                <p className="col-lg-8 feature-desc">
                  Lightweight cushioning and durable support with a Phylon
                  midsole
                </p>
              </div>
            </div>
          
          </div>
          <div className=" container-custom d-flex col-8">
          <ul className="footer-list ">
                <li>
                  <img height="45" width="300" src="" />
                </li>
              </ul>
       

             
          </div>
         
          <Divider variant="middle" light="true" />
          <div className="container-footer popular-searches">
            <strong>
              <span>Popular Searches</span>
            </strong>
            <p className="d-flex">
              <ul className="footer-list-searches">{listItems}</ul>
            </p>
          </div>
          <Divider variant="middle" light="true" />
          <div className="container-footer d-flex">
            <div className="copyright col-5 pt-3">
              © 2020
              <strong>
                <span> Snazcart</span>
              </strong>
              . All Rights Reserved
            </div>
            <p className="text-align-center col-3 pt-3">Made With <FavoriteIcon style={{ color: red[500] }}/> In India</p>
            <div className="credits col-4">
              <img className="float-right" width="150" src="https://fuliatant.com/img/cms/Payment/cards.png" /> 
            </div>
          </div>
          
        </footer>
        </Sticky>

      </>
    );
  }
}


export default Footer;

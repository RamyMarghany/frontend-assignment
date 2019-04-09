import React from 'react'

import item from '../assets/images/footer-icon.png'


const Footer = () => (
  <div className="row footer-container">
    <div className="col-md-4 col-xs-12">
      <div className="footer">
          <div className="footer__border">
            <img src={item} className="footer__img img-responsive" alt="iphone6"/>
          </div>
          <p className="footer__name">iPhone 6 Black</p>
          <p className="footer__price">aed 1000</p>
        </div>
    </div>
    <div className="col-md-4 col-xs-12">
      <div className="footer">
          <div className="footer__border">
            <img src={item} className="footer__img img-responsive" alt="iphone7"/>
          </div>
          <p className="footer__name">iPhone 7 Black</p>
          <p className="footer__price">aed 2000</p>
        </div>
    </div>
    <div className="col-md-4 col-xs-12">
      <div className="footer">
          <div className="footer__border">
            <img src={item} className="footer__img img-responsive" alt="iphone8"/>
          </div>
          <p className="footer__name">iPhone 8 Black</p>
          <p className="footer__price">aed 3000</p>
        </div>
    </div>
  </div>
)


export default Footer;

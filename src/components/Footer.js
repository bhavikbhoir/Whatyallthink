import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-12 col-sm-12">
              <h4>GET IN TOUCH</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/"><FaFacebook /></a>
                  <a href="https://www.twitter.com/"><FaTwitter /></a>
                  <a href="https://www.instagram.com/"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                </li>
              </ul>
              <ul class="actions">
                <li><FaPhone /><a href="#"> (000) 000-0000</a></li>
                <li><FaEnvelope /><a href="#"> information@whatyallthink.com</a></li>
                <li><FaMapMarker /><a href="#"> 123 Somewhere Road, xxxxx, xx 12345</a></li>
              </ul>
            </div>
            </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Whatyallthink - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        padding-top: 20px;
        background: #d0e9ed;
        color: #0D5863;
        align: center;
    }
    .footer-middle h4{
        color: #0D5863;
        text-align: center;
    }
    .footer-middle .list-unstyled li{
        padding-top: 10px;
        text-align: center;
    }   
    .footer-bottom {
        color: #0D5863;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
    }
    .list-unstyled li a{
      color: #0D5863;
      font-size: 20px;
      padding: 10px;
    }
    .list-unstyled li a: hover{
      color: #000;
    }
    .actions{
      width: 100%;
      text-align: center;
      margin-left: -15px;
    }
    .actions li{
      color: #0D5863;
      list-style: none;
      display: inline-block;
      padding: 10px;
    }
    .actions li a{
      color: #0D5863;
      font-size: 18px;
      padding: 5px;
    }
    .actions li a: hover{
      color: #000;
    }
`;
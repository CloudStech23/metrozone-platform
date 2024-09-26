import React from "react";
import "./Main.css";
import Navbar from "./Navbar";


function Carousel() {
  return (
    <div className="bg-CSR" style={{ backgroundImage: 'url("https://www.tatasustainability.com/images/Banners/CSR-Banner.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '464px' }}>
      <div className="bs-demo-showcase">
       <Navbar/>
        <div className="clear captionP" style={{ paddingTop: '123px', clear: 'both' }} />
        <div className="container" style={{ maxWidth: '1210px', width: '100%' }}>
          <div className="captionPL" style={{ paddingLeft: '15px' }}>
            <div className="captionBox" style={{ border: '1px solid rgb(255, 255, 255)', padding: '5px 8px', display: 'inline-block', fontFamily: 'Lato, sans-serif', fontWeight: '300', fontSize: '11px', lineHeight: '12px', color: 'rgb(255, 255, 255)', letterSpacing: '2px' }}>
              Social
            </div>
            <div className="bannerT topP20" style={{ paddingTop: '20px', fontFamily: 'Lato, sans-serif', fontWeight: '700', fontSize: '43px', lineHeight: '40px', letterSpacing: '-0.78px', color: 'rgb(255, 255, 255)' }}>
              CSR
            </div>
          </div>
          <div className="containerIn topP2515" style={{ margin: '0px auto', maxWidth: '1045px', paddingTop: '25px' }}>
            <div className="bannerGr banIpro" style={{ paddingLeft: '0px' }}>
              <div className="borCon" style={{ position: 'relative' }}>
                <div className="greBor borTB" style={{ background: 'linear-gradient(rgb(243, 168, 73) 0%, rgb(12, 177, 226) 100%) left top / 10px 100% no-repeat rgb(119, 119, 119)', textAlign: 'center', width: '5px', position: 'absolute', bottom: '5px', top: '5px' }}>
                  &nbsp;
                </div>
                <div className="bannerTextF" style={{ fontFamily: 'Lato, sans-serif', fontWeight: '400', fontSize: '16px', color: 'rgb(255, 255, 255)', lineHeight: '22px', maxWidth: '360px', paddingLeft: '15px' }}>
                  For over 150 years, we have been serving the communities in which we operate. Community is pivotal to the Tata mission and is at the heart of everything we do, how we think and who we are.
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

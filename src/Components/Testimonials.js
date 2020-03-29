import React, { Component } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

class Testimonials extends Component {
   render() {
      if(this.props.data){
         return (
            <section id="testimonials">
            <div className="text-container">
               <div className="row">
                  <div className="twelve columns flex-container">
                     <h1>Parceiros e Clientes</h1>
                     <InfiniteCarousel
                           breakpoints={[
                              {
                              breakpoint: 500,
                              settings: {
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                              },
                              },
                              {
                              breakpoint: 768,
                              settings: {
                                 slidesToShow: 2,
                                 slidesToScroll: 2,
                              },
                              },
                           ]}
                           dots={false}
                           showSides={true}
                           sidesOpacity={.5}
                           sideSize={.2}
                           slidesToScroll={2}
                           slidesToShow={2}
                           scrollOnDevice={true}
                           cycleInterval={5000}
                           autoCycle={true}
                        >
                           {  
                           
                           this.props.data.testimonials.map((partner) => {
                              var partnerImage = 'images/partners/'+partner.image;
                              return  (<div key={partner.name} >
                                       <a href={partner.link} title={partner.name}>
                                          <img alt={partner.name} src={partnerImage} />
                                       </a>
                                    </div>);
                           })}
                        </InfiniteCarousel>
                     </div>
                  </div>
               </div>
         </section>
         );
         }
      else{
         return null;
      }
   }
}
export default Testimonials;

import ADVERTS_DATA from '../data/ADVERTS';
import TESTIMONIAL_DATA from '../data/TESTIMONIAL';
import TESTIMONIAL_DATA from '../data/SERVICES';

const ConstructingAdvertItem = () => {
  const destinationDom = document.querySelector('.advert');
  ADVERTS_DATA.map( data => {
      destinationDom.insertAdjacentHTML('beforeend', 
      `
      <div class="advert__item">
        <<div class="hero__img"></div>
        <div class="content">
          <h2 class="content__header">${data.title}</h2>
          <p class="content__text">${data.description}</p>
          <a href="#" class="content__link">${data.link}</a>
        </div>
      </div>
      `
    )
  })
};

const ConstructingServices = () => {
  const destinationDom = document.querySelector('.advert');
  ADVERTS_DATA.map( data => {
      destinationDom.insertAdjacentHTML('afterend', 
      `
      div class="services">
        <div class="content">
          <h2 class="content__header">Somthing</h2>
          <p class="content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error omnis vel blanditiis!</p>
        </div>
      </div>
      `
    )
  })
};
// 

const ConstructingTestimonials = () => {
  const destinationDom = document.querySelector('.testimonials');
  TESTIMONIAL_DATA.map( data => {
      destinationDom.insertAdjacentHTML('beforeend', 
      `
      <h4 class="testimonials__header">Client Testimonials</h4>
      <div class="testimonials-item">
        <img src="${data.profileImg}" alt="user_avatar" class="testimonials-item__img">
        <p>${data.comment}</p>
        <h4>${data.name}</h4>
        <p class="text-small">${data.role}</p>
      </div>
      `
    )
  })
};

export { ConstructingAdvertItem, ConstructingServices, ConstructingTestimonials };
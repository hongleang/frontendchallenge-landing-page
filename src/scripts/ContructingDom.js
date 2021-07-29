import ADVERTS_DATA from '../data/ADVERTS';
import TESTIMONIAL_DATA from '../data/TESTIMONIAL';
import SERVICES from '../data/SERVICES';

const ConstructingAdvertItem = () => {
  const destinationDom = document.querySelector('.advert');
  ADVERTS_DATA.map( data => {
      destinationDom.insertAdjacentHTML('beforeend',
      `
      <div class="advert__item">
        <div class="advert__img" style="background-image: url(${data.desktopImg});"></div>
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
  const destinationDom = document.querySelector('.services-wrapper');
  SERVICES.map( data => {
      destinationDom.insertAdjacentHTML('beforeend', 
      `
      <div class="services" style="background-image: url(${data.desktopImg});">
        <div class="content">
          <h2 class="content__header">${data.title}</h2>
          <p class="content__text">${data.description}</p>
        </div>
      </div>
      `
    )
  })
};

const ConstructingTestimonials = () => {
  const destinationDom = document.querySelector('.testimonials-wrapper');
  TESTIMONIAL_DATA.map( data => {
      destinationDom.insertAdjacentHTML('beforeend', 
      `      
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
import { accordion } from "./modules/_accordion";
import { anchorLink } from "./modules/_anchorLink";
import { headerScroll } from "./modules/_headerScroll";
import { menuOpen } from "./modules/_menuOpen";
import { swiperJS } from "./modules/_swiper";
import { tabs } from "./modules/_tabs";
import {gsapBenefits,gsapTtl,gsapList,gsapLocation} from "./lib/_gsap";
import { marquee } from "./modules/_marquee";
import { headerLink } from "./modules/_headerLink";
$( function() {
  
  // General
  anchorLink();
  headerScroll();
  menuOpen.init();
  headerLink();
  // Layouts
  accordion();
  tabs();
  
  // API Configurations
  swiperJS();

  //Marquee
  marquee();
  
  gsapBenefits();
  gsapTtl();
  gsapList();
  gsapLocation();

} );

$( window ).on( 'scroll', function() {
  headerScroll();
} );

$( window ).on( 'resize', function() {
  menuOpen.resize();
} );
import { accordion } from "./modules/_accordion";
import { anchorLink } from "./modules/_anchorLink";
import { headerScroll } from "./modules/_headerScroll";
import { menuOpen } from "./modules/_menuOpen";
import { swiperJS } from "./modules/_swiper";
import { tabs } from "./modules/_tabs";
import {gsapBenefits,gsapTtl,gsapList} from "./lib/_gsap";
import { marquee } from "./modules/_marquee";
$( function() {
  
  // General
  anchorLink();
  headerScroll();
  menuOpen.init();
  
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

} );

$( window ).on( 'scroll', function() {
  headerScroll();
} );

$( window ).on( 'resize', function() {
  menuOpen.resize();
} );
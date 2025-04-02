import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapBenefits = () => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {  

        let delSections = document.querySelectorAll(".list-01__item");
        delSections.forEach(section => {
            let outer = section.querySelector(".list-01__outerCon");
            let container = section.querySelector(".list-01__innerCon");
        
            let outerAnim = gsap.to(outer, {
                ease: "none",
                paused: true
            });
        
            let progressTo = gsap.quickTo(outerAnim, "progress", {
                duration: parseFloat(section.dataset.scrub) || 0.9
            });
        
            gsap.to(container, {
                y: "-20vh",
                ease: "none",
                scrollTrigger: {
                    scrub: true,
                    trigger: section,
                    start: "top bottom",
                    end: "-200px 500px",
                    // markers: true,
                    onUpdate: self => progressTo(self.progress)
                }
            });
        });

        return () => {
            gsap.killTweensOf(".list-01__innerCon"); 
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
        };
    });
};



export const gsapTtl = () => {
    let sections = document.querySelectorAll(".ttl-01");

    sections.forEach((section) => {
        let title = section.querySelector(".ttl-01__ttl");
        let txt = section.querySelector(".ttl-01__txt");

        let tl = gsap.timeline();

        
        tl.fromTo(
            title, 
            { xPercent: 50, opacity: 0 },          
            { xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        if (txt) {
            tl.fromTo(
                txt,
                { xPercent: 50, opacity: 0 }, 
                { xPercent: 0, opacity: 1, duration: .7, ease: "power2.out" },
                "-=0.5" 
            );
        }

        ScrollTrigger.create({
            trigger: section,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            animation: tl,
        });
    });
};

export const gsapList = () => {
    let items = document.querySelectorAll(".js-list_item");

    items.forEach((item, index) => {
        let tl = gsap.timeline();

        tl.fromTo(
            item, 
            { yPercent: 50, opacity: 0 },          
            { yPercent: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        ScrollTrigger.create({
            trigger: item,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            animation: tl,
            // markers: true, /
        });
    });
};

export const gsapLocation = () => {
    let sections = document.querySelectorAll(".top-location__item");

    sections.forEach((section) => {
        let img = section.querySelector(".top-location__img");
        let wrap = section.querySelector(".top-location__wrap");

        let tl = gsap.timeline();

        tl.fromTo(
            img, 
            { xPercent: -50, opacity: 0 },          
            { xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        if (wrap) {
            tl.fromTo(
                wrap,
                { xPercent: 50, opacity: 0 }, 
                { xPercent: 0, opacity: 1, duration: .7, ease: "power2.out" },
                "-=0.5" 
            );
        }

        ScrollTrigger.create({
            trigger: section,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            animation: tl,
        });
    });
};

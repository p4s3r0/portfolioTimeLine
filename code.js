//learn how this was made at https://www.youtube.com/watch?v=ersN5fk8py0 

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

gsap.defaults({ease: "none"});

const pulses = gsap.timeline({
  defaults: {
    scale: 2,
    autoAlpha:1,
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1.5)"
  }})
.to("#ballNow,  .Now", {}, 0) 
.to("#ball2022, .T2022", {}, 0.05)
.to("#ball2018, .T2018", {}, 0.25)
.to("#ball2017, .T2017", {}, 0.3)
.to("#ball2013, .T2013", {}, 0.52)
.to("#ball2010, .T2010", {}, 0.8)
.to("#ball1999, .T1999", {}, 1)
.to("#ende", {}, 2)


const main = gsap.timeline({
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
})
.from(".theLine", {drawSVG:0, duration:1}, 0)
.add(pulses, 0)
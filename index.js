const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let tl = gsap.timeline();


tl.to(".page1",{
    y:"100vh",
    scale:0.6,
    duration:1,
})

tl.to(".page1",{
    y:"30vh",
    duration:2,
    delay:0.2
})

tl.to(".page1",{
    y:"0vh",
    rotation:-360,
    scale:1,
    duration:0.8
})
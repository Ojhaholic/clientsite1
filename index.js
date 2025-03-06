gsap.from("#backvid", {
    opacity : 0,
    duration : 2,
})

gsap.from(".sec1", {
    y : -20,
    opacity : 0,
    duration :1,
})

gsap.from(".sec2", {
    y : 40,
    opacity : 0,
    duration :2,
})

// document.body.querySelector(".sec1 .appoint").addEventListener("mouseover", ()=>{
//     gsap.to(".sec1 .appoint", {
//         backgroundColor: "#d5a7662c",
        
//     })
// })
// document.body.querySelector(".sec1 .appoint").addEventListener("mouseleave", ()=>{
//     gsap.to(".sec1 .appoint", {
//         backgroundColor: "#d5a76600",
        
//     })
// })

// document.body.querySelector("#btn2").addEventListener("mouseover", ()=>{
//     gsap.to("#btn2", {
//         backgroundColor: "#d5a7662c",
        
//     })
// })
// document.body.querySelector("#btn2").addEventListener("mouseleave", ()=>{
//     gsap.to("#btn2", {
//         backgroundColor: "#d5a76600",
        
//     })
// })


gsap.from(".s3left", {
    x: -100,
    opacity: 0.2,
    scrollTrigger: {
        trigger: ".sec3",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".s3right", {
    x: 100,
    opacity: 0.2,
    scrollTrigger: {
        trigger: ".sec3",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".s4cont", {
    opacity: 0.1,
    y: 30,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
        trigger: ".s42",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".page2", {
    opacity: 0.8,
    // y: 30,
    scale: 0.6,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".p3left", {
    opacity: 0,
    x: -70,
    duration: 1,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".p3right", {
    opacity: 0,
    x: 120,
    duration: 1,
    scrollTrigger: {
        trigger: ".p3left",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 70%",
        scrub: 5
    }
})


gsap.from(".p41", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".p41",    
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".r1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".p41",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".r2", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".r1",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".r3", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".r2",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

gsap.from(".p43", {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
        trigger: ".r3",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: 5
    }
})

document.body.querySelector(".c1").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c1 img").src="media/black svg/woman-silhouette-svgrepo-com.svg"
})
document.body.querySelector(".c1").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c1 img").src="media/gold svg/woman-silhouette-svgrepo-com.svg"
})

document.body.querySelector(".c2").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c2 img").src="media/black svg/gun-svgrepo-com.svg"
})
document.body.querySelector(".c2").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c2 img").src="media/gold svg/gun-svgrepo-com (1).svg"
})

document.body.querySelector(".c3").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c3 img").src="media/black svg/court-svgrepo-com.svg"
})
document.body.querySelector(".c3").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c3 img").src="media/gold svg/court-svgrepo-com.svg"
})

document.body.querySelector(".c4").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c4 img").src="media/black svg/flight-svgrepo-com.svg"
})
document.body.querySelector(".c4").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c4 img").src="media/gold svg/flight-svgrepo-com.svg"
})

document.body.querySelector(".c5").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c5 img").src="media/black svg/drugs-svgrepo-com.svg"
})
document.body.querySelector(".c5").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c5 img").src="media/gold svg/drugs-svgrepo-com (1).svg"
})

document.body.querySelector(".c6").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c6 img").src="media/black svg/bank-svgrepo-com.svg"
})
document.body.querySelector(".c6").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c6 img").src="media/gold svg/bank-svgrepo-com.svg"
})

document.body.querySelector(".c7").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c7 img").src="media/black svg/write-svgrepo-com.svg"
})
document.body.querySelector(".c7").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c7 img").src="media/gold svg/write-svgrepo-com.svg"
})

document.body.querySelector(".c8").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c8 img").src="media/black svg/agreement-svgrepo-com.svg"
})
document.body.querySelector(".c8").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c8 img").src="media/gold svg/agreement-svgrepo-com (1).svg"
})

document.body.querySelector(".c9").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c9 img").src="media/black svg/money-dollar-svgrepo-com.svg"
})
document.body.querySelector(".c9").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c9 img").src="media/gold svg/money-dollar-svgrepo-com.svg"
})

document.body.querySelector(".c10").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c10 img").src="media/black svg/fight-svgrepo-com.svg"
})
document.body.querySelector(".c10").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c10 img").src="media/gold svg/fight-svgrepo-com.svg"
})

document.body.querySelector(".c11").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c11 img").src="media/black svg/lawyer-svgrepo-com.svg"
})
document.body.querySelector(".c11").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c11 img").src="media/gold svg/lawyer-svgrepo-com.svg"
})

document.body.querySelector(".c12").addEventListener("mouseenter", ()=>{
    document.body.querySelector(".c12 img").src="media/black svg/marriage-rings-couple-with-a-heart-svgrepo-com.svg"
})
document.body.querySelector(".c12").addEventListener("mouseleave", ()=>{
    document.body.querySelector(".c12 img").src="media/gold svg/marriage-rings-couple-with-a-heart-svgrepo-com (1).svg"
})



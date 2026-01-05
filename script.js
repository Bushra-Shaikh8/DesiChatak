
  // ================== GSAP ANIMATIONS ==================
  gsap.registerPlugin(ScrollTrigger);

  // ---------------- Preloader Logo Animation ----------------
  gsap.to(".preloader-logo", {
    opacity: 1,
    scale: 1.2,
    duration: 1.2,
    ease: "power2.out",
    onComplete: () => {
      // Scale down + move to navbar
      gsap.to(".preloader-logo", {
        scale: 0.4,
        x: -window.innerWidth / 2 + 200,  // adjust left
        y: -window.innerHeight / 2 + 40,  // adjust top
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Hide preloader
          document.querySelector(".preloader").style.display = "none";

          // ---------------- Hero Section ----------------
          gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
          gsap.from(".hero-subtitle", { y: 40, opacity: 0, delay: 0.3, duration: 1 });
          gsap.from(".hero-buttons", { opacity: 0, scale: 0.8, delay: 0.6, duration: 0.8 });

          // Scroll arrow animation
          gsap.to(".scroll-arrow span", { y: 10, opacity: 0, duration: 1, repeat: -1, ease: "power1.inOut" });

          // ---------------- Featured Circle Motion ----------------
          gsap.to(".circle-img", {
            scrollTrigger: {
              trigger: ".featured-modern",
              start: "top 70%",
              end: "bottom 60%",
              scrub: true
            },
            motionPath: {
              path: [
                { x: 0, y: -120 },
                { x: 120, y: 0 },
                { x: 0, y: 120 },
                { x: -120, y: 0 },
                { x: 0, y: -120 }
              ],
              curviness: 1.5
            },
            rotation: 360,
            ease: "none"
          });

          // ---------------- About Story ----------------
          gsap.from(".story-image", {
            scrollTrigger: { trigger: ".about-story", start: "top 70%"},
            x: -80, opacity: 0, duration: 1, ease: "power2.out"
          });
          gsap.from(".story-content", {
            scrollTrigger: { trigger: ".about-story", start: "top 65%"},
            x: 80, opacity: 0, duration: 1,stagger: 0.25, delay: 0.2, ease: "power2.out"
          });

          // ---------------- Exclusive Deals ----------------
          gsap.from(".deal-card", {
            scrollTrigger: { trigger: ".exclusive-deals", start: "top 60%" },
          stagger: 0.25, ease: "power2.out",opacity: 0, scale: 0.8, delay: 0.6, duration: 0.8
          });

          // ---------------- Guest Reviews ----------------
          gsap.from(".review-card", {
            scrollTrigger: { trigger: ".guest-reviews", start: "top 60%"},
         opacity: 0, duration: 1.2, stagger: 1, ease: "power2.out"
          });

          // ---------------- Reservation Section ----------------
          gsap.from(".reservation-left > *", {
            scrollTrigger: { trigger: ".reservation-premium", start: "top 70%" },
            y: 40, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out"
          });
          gsap.from(".point", {
            scrollTrigger: { trigger: ".reservation-premium", start: "top 65%" },
            x: -30, opacity: 0, stagger: 0.2, duration: 0.9, ease: "power3.out"
          });
          gsap.from(".reservation-form-card", {
            scrollTrigger: { trigger: ".reservation-premium", start: "top 65%" },
            x: 60, opacity: 0, duration: 1, ease: "power3.out"
          });

          // ---------------- Opening Visit Section ----------------
          gsap.from(".visit-left *", {  // future-proof selector
            scrollTrigger: { trigger: ".opening-visit", start: "top 70%" },
            y: 40, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out"
          });
          gsap.from(".visit-row", {
            scrollTrigger: { trigger: ".opening-visit", start: "top 65%" },
            y: 30, opacity: 0, stagger: 0.2, duration: 0.8
          });
          gsap.from(".info-card", {
            scrollTrigger: { trigger: ".opening-visit", start: "top 65%" },
            x: 40, opacity: 0, stagger: 0.2, duration: 0.9, ease: "power3.out"
          });

          // ---------------- Footer Animation ----------------
          gsap.from(".lux-footer .col-lg-4, .lux-footer .col-lg-2, .lux-footer .col-lg-3", {
            scrollTrigger: { trigger: ".lux-footer", start: "top 75%" },
            y: 40, opacity: 0, stagger: 0.2, duration: 1, ease: "power3.out"
          });

        } // onComplete preloader
      });
    }
  });

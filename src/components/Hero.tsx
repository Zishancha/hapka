import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });

      // Create timeline for hero animations
      const tl = gsap.timeline({ delay: 0.3 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToMap = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: `url(${heroFood})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            Momos That Understand You<br />
            <span className="text-secondary">Better Than Your Ex</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-secondary/80 mb-8 font-medium max-w-2xl mx-auto">
            Where schezwan rice meets your soul and momos heal your heartbreak
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToMenu} className="btn-hero group">
              Peek The Menu
            </Button>
            
            <Button onClick={scrollToMap} variant="outline" className="btn-secondary bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary">
              Find Us
            </Button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OurVibePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, galleryRef.current, testimonialRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(galleryRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      }, "-=0.5")
      .to(testimonialRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3")
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.3");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-secondary/10">
      <Navbar />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={titleRef} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Catch the Vibe Inside Hapka ☕✨
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sneak peek of where the magic happens – food, friends, and vibes.
            </p>
          </div>

          {/* Image Gallery */}
          <div ref={galleryRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Placeholder images - will be replaced with actual cafe photos */}
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary font-semibold">Kitchen Vibes</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 transform origin-center" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-accent/20 to-primary/20">
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary font-semibold">Counter Magic</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 transform origin-center" />
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-primary/30 to-accent/30 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-primary font-semibold">Happy Vibes</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 group-hover:scale-110 transform origin-center" />
            </div>
          </div>

          {/* Testimonial */}
          <div ref={testimonialRef} className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center mb-12">
            <blockquote className="text-2xl md:text-3xl font-semibold text-primary mb-4 italic">
              "Hapka Café feels like home — but with better noodles."
            </blockquote>
            <cite className="text-muted-foreground text-lg">– A Happy Soul</cite>
          </div>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/">
              <Button 
                variant="outline" 
                className="px-8 py-3 rounded-full text-lg font-medium hover-lift"
              >
                Back to Home
              </Button>
            </Link>
            <a 
              href="https://www.zomato.com/mumbai/hapka-cafe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="px-8 py-3 rounded-full text-lg font-medium hover-lift bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Order Online
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVibePage;
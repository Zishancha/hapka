import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurVibe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current?.children || [], 
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );

      // Story section animation
      gsap.fromTo(storyRef.current, 
        {
          opacity: 0,
          scale: 0.95
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
          }
        }
      );

      // Mission cards animation
      gsap.fromTo(missionRef.current?.children || [], 
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const vibeFeatures = [
    {
      emoji: "🔥",
      title: "Chaos in a Bowl",
      description: "We serve chaos in the form of schezwan rice and call it therapy."
    },
    {
      emoji: "❤️",
      title: "Food That Gets You",
      description: "Our momos understand your problems better than most humans do."
    },
    {
      emoji: "✨",
      title: "Gen Z Approved",
      description: "No cap, our food hits different when you're stressed about life."
    },
    {
      emoji: "🏠",
      title: "Cozy Corner Vibes",
      description: "That friend's place energy where you can eat, laugh, and forget your problems."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Vibe ✨
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              Welcome to Hapka by Aapka Jags — where food meets feelings and every bite tells a story.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We're not just another café in Thane. We're that cozy corner where college stress melts away 
              with hot momos, where work pressure dissolves in spicy schezwan rice, and where friendship 
              bonds over shared plates of chaos. 
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vibeFeatures.map((feature, index) => (
            <Card key={index} className="hover-lift hover-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={storyRef} className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Why We Started This? 🤔
          </h3>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Because we believe good food should be accessible, affordable, and absolutely delicious. 
            We've been that broke college student ordering the cheapest thing on the menu, 
            and we've been that working professional needing comfort food after a long day.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            So we created a space that gets it. A place where the vibes are immaculate, 
            the food is fire, and nobody judges you for ordering extra momos. 
            <span className="text-accent font-semibold"> Again. </span>
          </p>
        </div>

        <div ref={missionRef} className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-primary mb-2">Our Mission</h4>
            <p className="text-sm text-muted-foreground">
              Making every meal a mood booster, one delicious bite at a time.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="font-bold text-primary mb-2">Our Promise</h4>
            <p className="text-sm text-muted-foreground">
              Fresh ingredients, bold flavors, and food that actually cares about your taste buds.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💫</div>
            <h4 className="font-bold text-primary mb-2">Our Energy</h4>
            <p className="text-sm text-muted-foreground">
              Warm, welcoming, and wonderfully chaotic — just like your favorite hangout spot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVibe;
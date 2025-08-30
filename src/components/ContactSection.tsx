import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

      // Form and info sections slide in from sides
      gsap.fromTo(formRef.current, 
        {
          opacity: 0,
          x: -80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(infoRef.current, 
        {
          opacity: 0,
          x: 80
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const emojiRatings = ['🤮', '😤', '😐', '😊', '😍'];
  const ratingLabels = ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Feedback Received! 🎉",
      description: "Thanks for sharing your thoughts. We'll make sure to keep serving the good vibes!",
    });
    
    setFormData({ name: '', message: '', rating: 5 });
    setIsSubmitting(false);
  };

  const handleRatingChange = (newRating: number) => {
    setFormData({ ...formData, rating: newRating });
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect! 💬
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Slide into our DMs or just tell us how we're doing. We promise we read everything! 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef}>
            <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <span>📝</span>
                Drop Us a Line
              </CardTitle>
              <CardDescription>
                Tell us what's on your mind — feedback, suggestions, or just a random thought!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="What should we call you?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Spill the tea... what's your experience been like?"
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-foreground mb-4 block">
                    Rate Your Experience
                  </Label>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      {emojiRatings.map((emoji, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleRatingChange(index + 1)}
                          className={`text-4xl transition-all duration-200 ${
                            formData.rating === index + 1 
                              ? 'scale-125 filter drop-shadow-lg' 
                              : 'scale-100 opacity-60 hover:opacity-100 hover:scale-110'
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-medium text-accent">
                        {ratingLabels[formData.rating - 1]}
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-hero"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>🚀</span>
                      Send It Our Way
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>

          {/* Location & Info */}
          <div ref={infoRef} className="space-y-8">
            <Card className="hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span>📍</span>
                  Find Us Here
                </CardTitle>
                <CardDescription>
                  Located in the heart of Thane, where the vibes are always immaculate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <p className="font-medium text-foreground mb-2">Hapka by Aapka Jags</p>
                    <p className="text-sm text-muted-foreground">
                      Thane, Maharashtra, India
                    </p>
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7175199208796!2d72.97914107374933!3d19.251138981989836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb904e1f8ad5%3A0x994450527c9214aa!2sHapka%20By%20Aapka%20Jags!5e0!3m2!1sen!2sin!4v1754392969488!5m2!1sen!2sin" 
                        width="100%" 
                        height="300" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="font-medium text-foreground">Opening Hours</p>
                      <p className="text-sm text-muted-foreground">Daily: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-medium text-foreground">Follow the Chaos</p>
                      <div className="flex gap-2 mt-1">
                        <Button variant="outline" size="sm" className="text-xs">
                          Instagram
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                          Zomato
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🛵</span>
                    <div>
                      <p className="font-medium text-foreground">Delivery & Takeaway</p>
                      <p className="text-sm text-muted-foreground">Available on all major platforms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-glow bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  First Time Here?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Welcome to the family! Don't be shy, try our signature momos and let us know what you think.
                </p>
                <div className="text-xs text-accent font-medium">
                  Pro tip: The schezwan rice is addictive 🔥
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
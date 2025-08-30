import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToTop = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || window.location.pathname !== "/" ? "bg-primary border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-0 py-[15px]">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className={`text-xl font-bold transition-colors duration-200 delay-1000 hover:delay-[2000ms] hover-lift p-[25px] ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>HAPKA
          </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={scrollToTop} className={`px-3 py-2 p-[20px] text-sm font-medium transition-colors duration-200 delay-1000 hover:delay-[2000ms] hover-lift ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>
                Home
              </button>
              <button onClick={() => scrollToSection("menu")} className={`px-3 py-2 p-[20px] text-sm font-medium transition-colors duration-200 delay-1000 hover:delay-[2000ms] hover-lift ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>
                Menu
              </button>
              <Link to="/our-vibe" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 delay-1000 hover:delay-[2000ms] hover-lift ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>Contact us
            </Link>
              <a href="https://www.zomato.com/mumbai/hapka-cafe" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover-lift">
                Order Online
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              <button onClick={scrollToTop} className={`text-xs p-[20px] transition-colors duration-200 delay-1000 hover:delay-[2000ms] ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>
                Home
              </button>
              <button onClick={() => scrollToSection("menu")} className={`text-xs p-[20px] transition-colors duration-200 delay-1000 hover:delay-[2000ms] ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>
                Menu
              </button>
              <Link to="/our-vibe" className={`text-xs transition-colors duration-200 delay-1000 hover:delay-[2000ms] ${scrolled ? "text-primary-foreground" : "text-secondary"}`}>
                Vibe
              </Link>
              <a href="https://www.zomato.com/mumbai/hapka-cafe" target="_blank" rel="noopener noreferrer" className="text-accent text-xs">
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;
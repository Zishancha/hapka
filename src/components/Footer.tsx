const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-accent">🍜</span>
              Hapka by Aapka Jags
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Where momos meet your soul and every bite tells a story. 
              Serving chaos, comfort, and culinary magic since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Bites 🚀</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#menu" className="hover:text-accent transition-colors">Our Menu</a></li>
              <li><a href="#vibe" className="hover:text-accent transition-colors">Our Vibe</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Order Online</a></li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-bold mb-4">Stay Connected 💫</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div>
                <p className="font-medium text-primary-foreground">Follow the Chaos:</p>
                <div className="flex gap-2 mt-1">
                  <a href="#" className="bg-accent/20 hover:bg-accent/30 px-3 py-1 rounded-full text-xs transition-colors">
                    📷 Instagram
                  </a>
                  <a href="#" className="bg-accent/20 hover:bg-accent/30 px-3 py-1 rounded-full text-xs transition-colors">
                    🍽️ Zomato
                  </a>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-primary-foreground">Daily Hours:</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              
              <div>
                <p className="font-medium text-primary-foreground">Location:</p>
                <p>Thane, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Hapka by Aapka Jags. Made with ❤️ and lots of schezwan sauce.
            </p>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
              <span>🔥 Fresh Food</span>
              <span>⚡ Quick Service</span>
              <span>💝 Made with Love</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-primary-foreground/40">
            <p>No momos were harmed in the making of this website 🥟</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MenuItem {
  name: string;
  price: number;
}

interface MenuCategory {
  id: string;
  title: string;
  description: string;
  emoji: string;
  categories: { [key: string]: MenuItem[] };
  color: string;
}

const menuData: MenuCategory[] = [
  {
    id: 'rice-noodles',
    title: 'Rice & Noodles',
    description: 'Wok-tossed perfection in every bite',
    emoji: '🍜',
    color: 'from-orange-400 to-red-500',
    categories: {
      'NON-VEG RICE': [
        { name: 'Chicken Fried Rice', price: 179 },
        { name: 'Chicken Schezwan Rice', price: 199 },
        { name: 'Chicken Hongkong Rice', price: 199 },
        { name: 'Chicken Burnt Garlic Rice', price: 199 },
        { name: 'Chicken Burnt Chilly Rice', price: 199 },
        { name: 'Chicken Singapore Rice', price: 199 },
        { name: 'Chicken Nanking Rice', price: 199 },
        { name: 'Chicken Hunan Rice', price: 199 }
      ],
      'EGG RICE': [
        { name: 'Egg Fried Rice', price: 159 },
        { name: 'Egg Schezwan Rice', price: 179 },
        { name: 'Egg Hongkong Rice', price: 179 },
        { name: 'Egg Burnt Garlic Rice', price: 179 },
        { name: 'Egg Burnt Chilly Rice', price: 179 },
        { name: 'Egg Nanking Rice', price: 179 },
        { name: 'Egg Hunan Rice', price: 179 }
      ],
      'VEG RICE': [
        { name: 'Veg Fried Rice', price: 139 },
        { name: 'Veg Schezwan Rice', price: 159 },
        { name: 'Veg Hongkong Rice', price: 159 },
        { name: 'Veg Burnt Garlic Rice', price: 159 },
        { name: 'Veg Burnt Chilly Rice', price: 159 },
        { name: 'Veg Singapore Rice', price: 159 },
        { name: 'Veg Nanking Rice', price: 159 },
        { name: 'Veg Hunan Rice', price: 159 }
      ],
      'VEG NOODLES': [
        { name: 'Veg Hakka Noodles', price: 139 },
        { name: 'Veg Schezwan Noodles', price: 159 },
        { name: 'Veg Singapore Noodles', price: 149 },
        { name: 'Veg Hongkong Noodles', price: 159 },
        { name: 'Veg Chilly Oyster Noodles', price: 159 },
        { name: 'Veg Chilly Garlic Noodles', price: 159 },
        { name: 'Veg Hunan Noodles', price: 159 }
      ],
      'NON-VEG NOODLES': [
        { name: 'Chicken Hakka Noodles', price: 199 },
        { name: 'Chicken Schezwan Noodles', price: 199 },
        { name: 'Chicken Singapore Noodles', price: 199 },
        { name: 'Chicken Hongkong Noodles', price: 199 },
        { name: 'Chicken Chilly Oyster Noodles', price: 199 },
        { name: 'Chicken Chilly Garlic Noodles', price: 199 },
        { name: 'Chicken Hunan Noodles', price: 199 }
      ]
    }
  },
  {
    id: 'starters-soups',
    title: 'Starters & Soups',
    description: 'Warm beginnings to epic meals',
    emoji: '🍲',
    color: 'from-green-400 to-blue-500',
    categories: {
      'NON-VEG FINGER FOODS': [
        { name: 'Chicken Chilly Dry', price: 199 },
        { name: 'Roast Chicken Chilly', price: 199 },
        { name: 'Chicken Black Pepper', price: 199 },
        { name: 'Chicken 65', price: 199 },
        { name: 'Chicken Chinese Green', price: 199 },
        { name: 'Chicken Kung Pao', price: 199 },
        { name: 'Chilly Oyster Chicken', price: 199 },
        { name: 'Garlic Pepper Chicken', price: 199 },
        { name: 'Shredded Chicken (Chilly/Schezwan)', price: 199 },
        { name: 'Pataya Chicken', price: 199 },
        { name: 'Chicken Manchurian', price: 199 },
        { name: 'Drums of Heaven', price: 199 },
        { name: 'Chicken Crispy', price: 199 },
        { name: 'Sizzled Chicken', price: 199 },
        { name: 'Chicken Mongolian Semi Dry', price: 199 }
      ],
      'VEG SOUPS': [
        { name: 'Veg Manchow Soup', price: 79 },
        { name: 'Veg Clear Soup', price: 79 },
        { name: 'Veg Hot and Sour Soup', price: 79 },
        { name: 'Veg Sweet Corn Soup', price: 79 }
      ],
      'NON-VEG SOUPS': [
        { name: 'Chicken Manchow Soup', price: 99 },
        { name: 'Chicken Clear Soup', price: 99 },
        { name: 'Chicken Hot and Sour Soup', price: 99 },
        { name: 'Chicken Sweet Corn Soup', price: 99 }
      ],
      'FINGER FOODS': [
        { name: 'Veg Crispy', price: 149 },
        { name: 'Veg Manchurian', price: 149 },
        { name: 'Chow Chow Potato', price: 149 },
        { name: 'Shredded Chilli Potato', price: 149 },
        { name: 'Veg Chinese Green', price: 179 },
        { name: 'Paneer Mongolian', price: 199 },
        { name: 'Paneer Crispy', price: 199 },
        { name: 'Paneer Thread Crispy', price: 199 },
        { name: 'Sizzled Paneer', price: 199 },
        { name: 'Paneer black Pepper', price: 199 },
        { name: 'Paneer Chilly', price: 199 }
      ]
    }
  },
  {
    id: 'quick-bites',
    title: 'Quick Bites',
    description: 'Instant mood lifters & hunger killers',
    emoji: '🥟',
    color: 'from-purple-400 to-pink-500',
    categories: {
      'VEG QUICK BITES': [
        { name: 'Veg Momos - 6 Pieces (Steam)', price: 69 },
        { name: 'Veg Momos - 6 Pieces (Fried)', price: 69 },
        { name: 'Veg Fingers', price: 149 },
        { name: 'Veg Wonton', price: 149 },
        { name: 'Veg Spring Roll', price: 149 },
        { name: 'Veg Schezwan Spring Roll', price: 149 },
        { name: 'Crispy Spinach Paneer', price: 149 },
        { name: 'Mushroom Chilly', price: 199 }
      ],
      'NON-VEG QUICK BITES': [
        { name: 'Chicken Chinese Bhel', price: 89 },
        { name: 'Chicken Momos - 6 Pieces (Steam)', price: 89 },
        { name: 'Chicken Momos - 6 Pieces (Fried)', price: 99 },
        { name: 'Chicken Fingers', price: 199 },
        { name: 'Chicken Wonton', price: 199 },
        { name: 'Chicken Spring Roll', price: 199 },
        { name: 'Chicken Schezwan Spring Roll', price: 199 },
        { name: 'Chicken Lollipop', price: 199 },
        { name: 'Chicken Thread Crispy', price: 199 },
        { name: 'Chicken Mongolian', price: 199 }
      ],
      'FRIES': [
        { name: 'French Fries', price: 99 },
        { name: 'Peri Peri Fries', price: 109 },
        { name: 'Loaded Fries', price: 149 }
      ]
    }
  }
];

const MenuSection = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategory | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on scroll
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

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current?.children || [], 
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="py-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three epic categories of chaos. Pick your poison! 🔥
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {menuData.map((menu, index) => (
            <Dialog key={menu.id}>
              <DialogTrigger asChild>
                <Card className="menu-card-3d hover-lift group cursor-pointer perspective-1000">
                  <CardHeader className="text-center">
                    <div className={`text-6xl mb-4 group-hover:animate-wiggle transition-all duration-300`}>
                      {menu.emoji}
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">
                      {menu.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {menu.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Tap to explore →
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-primary flex items-center gap-3">
                    <span className="text-4xl">{menu.emoji}</span>
                    {menu.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid gap-6 mt-6">
                  {Object.entries(menu.categories).map(([categoryName, items]) => (
                    <div key={categoryName} className="bg-card rounded-lg p-6 border">
                      <h3 className="text-xl font-bold text-primary mb-4 border-b border-border pb-2">
                        {categoryName}
                      </h3>
                      <div className="grid gap-3">
                        {items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-muted last:border-0">
                            <span className="font-medium text-foreground">{item.name}</span>
                            <span className="font-bold text-accent">₹{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <span>⏰</span>
                    Preparation time for all items: 15-20 mins
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
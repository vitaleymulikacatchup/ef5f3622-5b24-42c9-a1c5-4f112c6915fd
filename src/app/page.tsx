"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Star, Users, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="The Roastery"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Freshly Roasted Coffee"
          description="Experience the perfect cup with our artisan-roasted beans, crafted with passion and served with love"
          tag="Premium Coffee"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Coffee",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1137745/pexels-photo-1137745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with barista"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We believe great coffee brings people together. Every bean is carefully selected and roasted to perfection, creating moments of connection one cup at a time."
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Coffee"
          description="Discover our signature blends and single-origin selections"
          tag="Premium Selection"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "The Roastery",
              name: "Signature House Blend",
              price: "$18.00",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://images.pexels.com/photos/1844687/pexels-photo-1844687.png?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium coffee beans specialty blend"
            },
            {
              id: "2",
              brand: "The Roastery",
              name: "Dark Espresso Roast",
              price: "$22.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dark roast espresso coffee beans"
            },
            {
              id: "3",
              brand: "The Roastery",
              name: "Cold Brew Concentrate",
              price: "$16.00",
              rating: 4,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee concentrate"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="The passionate people behind your perfect cup"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marcus Rivera",
              role: "Head Barista",
              imageSrc: "https://images.pexels.com/photos/15444413/pexels-photo-15444413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marcus Rivera"
            },
            {
              id: "2",
              name: "Emma Chen",
              role: "Coffee Roaster",
              imageSrc: "https://images.pexels.com/photos/6205605/pexels-photo-6205605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Chen"
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Shop Manager",
              imageSrc: "https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "We source premium beans directly from farmers and roast them fresh daily using traditional techniques. Our careful attention to every step ensures exceptional flavor and quality."
            },
            {
              id: "2",
              title: "Do you offer delivery?",
              content: "Yes! We offer local delivery within 5 miles and nationwide shipping for our packaged coffee beans. Free delivery on orders over $25."
            },
            {
              id: "3",
              title: "Can I customize my coffee order?",
              content: "Absolutely! We offer various milk alternatives, sweetener options, and can adjust the strength to your preference. Just let our baristas know what you need."
            },
            {
              id: "4",
              title: "Do you have decaf options?",
              content: "Yes, we offer Swiss Water Process decaf coffee that retains all the flavor without the caffeine. Available in both our signature blend and single-origin options."
            },
            {
              id: "5",
              title: "What are your opening hours?",
              content: "We're open Monday through Friday 6:30 AM to 7:00 PM, Saturday 7:00 AM to 8:00 PM, and Sunday 8:00 AM to 6:00 PM. Holiday hours may vary."
            },
            {
              id: "6",
              title: "Do you offer coffee subscriptions?",
              content: "Yes! Our monthly subscription delivers freshly roasted beans to your door. Choose from our curated selections or create a custom blend. Cancel anytime with no commitment."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions about our coffee or want to place a custom order? We'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your coffee preferences or ask any questions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Coffee",
              items: [
                {
                  label: "Our Blends",
                  href: "product"
                },
                {
                  label: "Single Origin",
                  href: "product"
                },
                {
                  label: "Cold Brew",
                  href: "product"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Locations",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Shipping Info",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | The Roastery"
        />
      </div>
    </ThemeProvider>
  );
}
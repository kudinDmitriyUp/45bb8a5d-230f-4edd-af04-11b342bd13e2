"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Heart, Utensils, Award, Sparkles, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="none"
      cardStyle="noise"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795302959-y1uun0a4.jpg"
          logoAlt="Smile and Eat Restaurant Logo"
          brandName="Smile and Eat"
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Welcome to Smile and Eat"
          description="Experience culinary excellence in an atmosphere where every meal becomes a cherished memory. Fresh ingredients, passionate chefs, and genuine hospitality."
          tags={["Fresh Cuisine", "Fine Dining", "Local Ingredients", "Warm Atmosphere"]}
          buttons={[
            {
              text: "Reserve Now",
              href: "#contact"
            },
            {
              text: "View Menu",
              href: "#menu"
            }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795303919-s0u1vzsy.jpg"
          showcaseImageAlt="Smile and Eat restaurant dining experience"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795303919-s0u1vzsy.jpg"
          imageAlt="Elegant restaurant interior"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAboutCard
          tag="Our Story"
          tagIcon={Heart}
          title="Crafting memories through exceptional dining"
          paragraphs={[
            "At Smile and Eat, we believe that great food brings people together. Founded with a passion for culinary excellence, our restaurant is dedicated to serving dishes that celebrate local flavors and seasonal ingredients.",
            "Our experienced team of chefs works tirelessly to create innovative menus that honor traditional cooking techniques while embracing contemporary creativity. Every plate that leaves our kitchen is a testament to our commitment to quality."
          ]}
          icon={Utensils}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="featured-dishes" data-section="featured-dishes">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795304799-u25ae5is.jpg",
              imageAlt: "Signature plated dish"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795305601-4gfdeu8z.jpg",
              imageAlt: "Chef's special creation"
            },
            {
              id: 3,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795306363-p1i4fxt4.jpg",
              imageAlt: "Fine dining presentation"
            }
          ]}
          title="Signature Creations"
          description="Our chefs showcase their expertise through carefully curated signature dishes that blend tradition with innovation. Each creation tells a story of flavor, passion, and dedication to the craft."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Chef's Selection"
          tagIcon={Award}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFive
          products={[
            {
              id: "1",
              button: {
                text: "View Details",
                id: "view-1"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795307168-5okohl2e.jpg",
              imageAlt: "Pan-seared sea bass with seasonal vegetables"
            },
            {
              id: "2",
              button: {
                text: "View Details",
                id: "view-2"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795308057-5vogmdzd.jpg",
              imageAlt: "Crispy calamari with house-made aioli"
            },
            {
              id: "3",
              button: {
                text: "View Details",
                id: "view-3"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795308914-aab6n1ms.jpg",
              imageAlt: "Chocolate lava cake with vanilla ice cream"
            },
            {
              id: "4",
              button: {
                text: "View Details",
                id: "view-4"
              },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795309744-ps2k6qed.jpg",
              imageAlt: "Handmade pasta with truffle sauce"
            }
          ]}
          title="Our Menu"
          description="Explore our carefully crafted menu featuring seasonal dishes and customer favorites"
          tag="Culinary Excellence"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Food Critic",
              company: "Culinary Reviews",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795310651-9y3etyfq.jpg"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Regular Guest",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795311382-o8vw1k63.jpg"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Event Planner",
              company: "Premium Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795312503-d3u8vepp.jpg"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Restaurant Owner",
              company: "Hospitality Association",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795313207-oddtjpuu.jpg"
            }
          ]}
          title="What Guests Say"
          description="Join hundreds of satisfied diners who have experienced the magic of Smile and Eat"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          tagIcon={Mail}
          title="Join Our Newsletter"
          description="Subscribe to receive updates about our latest menu offerings, special events, and exclusive dining experiences delivered to your inbox."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765795313847-fiyucl1h.jpg"
          imageAlt="Restaurant ambiance"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime with one click."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Smile and Eat"
          copyrightText="© 2025 Smile and Eat Restaurant. All rights reserved."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
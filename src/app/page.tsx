use client
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import MewFooter from '@/components/sections/layouts/footer/MewFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759758979124-7cfc5dfe.jpg"
          logoWidth={100}
          logoHeight={40}
          navItems={[{ name: "hero", id: "#hero" }, { name: "about", id: "#about" }, { name: "how-to-buy", id: "#how-to-buy" }, { name: "tokenomics", id: "#tokenomics" }, { name: "footer", id: "#footer" }]}
          buttonText="Join the Meme"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759758974328-3bee185f.jpg"
          backgroundImageAlt="A cartoon desert landscape"
          title="Welcome to MemePulse"
          description="A playful memecoin with clear buy steps and a vibrant community vibe."
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MemePulse?"
          descriptions={["MemePulse makes memecoin easy and fun.", "Join our vibrant community and enjoy meme-inspired adventures.", "Support your creativity while investing in fun." ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Our tokenomics model supports longevity and community engagement."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1,000,000,000 tokens" },
            { id: 2, title: "Liquidity", description: "60% locked for stability" },
            { id: 3, title: "Community Rewards", description: "10% for holders" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <MewFooter
          title="Join us on this memetic journey!"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759758977325-337b2daa.jpg"
          imageAlt="A fun illustration"
          socialLinks={[
            { platform: "Twitter", onClick: () => window.open('https://twitter.com/MemePulse') },
            { platform: "Discord", onClick: () => window.open('https://discord.com/invite/MemePulse') },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}

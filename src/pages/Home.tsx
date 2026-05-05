import React, { useState } from "react";
  import { Link } from "wouter";
  import { motion } from "framer-motion";
  import {
    Menu, X, ChevronRight, ExternalLink, Play, Users, ShoppingBag, Mail,
    TrendingDown,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { config } from "@/config";

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.35 },
  };

  const navLinks = [
    { label: "Profit Tracker", href: "#profit-tracker", external: false },
    { label: "YouTube", href: config.youtubeUrl, external: true },
    { label: "Community", href: config.facebookUrl, external: true },
    { label: "Shop", href: config.etsyUrl, external: true },
    { label: "Contact", href: "#contact", external: false },
  ];

  export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className="min-h-[100dvh] w-full text-foreground">

        {/* NAV */}
        <nav data-testid="nav-main" className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
            <Link href="/" className="text-base font-black text-primary tracking-tight" data-testid="link-home">
              TheDriversGrind
            </Link>
            <button data-testid="button-mobile-menu" className="p-2 text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {menuOpen && (
            <motion.div data-testid="nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }} className="bg-card border-b border-border px-5 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})} className="flex items-center justify-between py-2.5 px-3 rounded-lg font-semibold text-sm hover:text-primary hover:bg-background transition-colors">
                  {l.label}
                  {l.external ? <ExternalLink size={13} className="text-muted-foreground" /> : <ChevronRight size={13} className="text-muted-foreground" />}
                </a>
              ))}
            </motion.div>
          )}
        </nav>

        {/* HERO */}
        <section id="profit-tracker" data-testid="section-hero" className="pt-24 pb-16 px-5 max-w-xl mx-auto text-center" style={{ scrollMarginTop: "56px" }}>
          <motion.div {...fadeUp} className="space-y-6">
            <div className="badge-gradient inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold" data-testid="badge-trust">
              🔥 Built by Real Drivers
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight">
              That <span className="text-yellow-accent">"good"</span> order isn't good.
            </h1>
            <p className="text-base text-muted-foreground font-medium">Most orders look good… until you run the numbers.</p>
            <div className="pt-1">
              <a href={config.trackerUrl} target="_blank" rel="noreferrer" data-testid="link-hero-tracker" className="block">
                <Button size="lg" className="cta-gradient w-full h-14 text-lg font-black text-white uppercase tracking-wide" data-testid="button-hero-tracker">
                  Check Order Now
                </Button>
              </a>
              <a href={config.youtubeUrl} target="_blank" rel="noreferrer" data-testid="link-hero-youtube" className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary font-semibold uppercase tracking-widest transition-colors">
                <Play size={11} className="fill-current" />
                See why drivers are declining these
              </a>
            </div>
          </motion.div>
        </section>

        {/* VERDICT STRIP */}
        <motion.div {...fadeUp} className="py-6 px-5 bg-card border-y border-border" data-testid="section-verdict-preview">
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-black uppercase">
            <span className="text-[#22C55E]">TAKE IT ✅</span>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <span className="text-yellow-accent">BORDERLINE ⚠️</span>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <span className="text-destructive">DECLINE ❌</span>
          </div>
          <p className="text-center text-xs text-muted-foreground font-medium mt-2">Enter pay, miles, and time → instant verdict</p>
          <p className="text-center text-xs text-yellow-accent font-black uppercase tracking-wider mt-2" data-testid="text-tension-line">Most drivers get this wrong.</p>
          <p className="text-center text-xs text-muted-foreground font-semibold mt-3" data-testid="text-share-prompt">
            Know a driver who'd take a bad order?{" "}
            <a href={config.trackerUrl} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 hover:text-yellow-accent transition-colors" data-testid="link-share-tracker">Send them this.</a>
          </p>
        </motion.div>

        {/* YOUTUBE */}
        <motion.section {...fadeUp} id="youtube" data-testid="section-youtube" className="py-14 px-5 max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-black">2</span>
            See how this plays out in real shifts
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Play className="w-5 h-5 text-primary" /></div>
              <div>
                <h2 className="text-xl font-black uppercase">Watch on YouTube</h2>
                <p className="text-sm text-muted-foreground font-medium mt-1">Real orders. Real money. No guessing.</p>
              </div>
            </div>
            <a href={config.youtubeUrl} target="_blank" rel="noreferrer" data-testid="link-video-featured" className="flex items-center gap-3 py-3 px-4 rounded-xl bg-background border border-border hover:border-primary transition-colors group">
              <TrendingDown className="w-5 h-5 shrink-0 text-destructive" />
              <div>
                <p className="text-sm font-black group-hover:text-primary transition-colors">Why I DECLINED this order (real numbers)</p>
                <p className="text-xs text-muted-foreground mt-0.5">See the math that most drivers miss</p>
              </div>
            </a>
            <a href={config.youtubeUrl} target="_blank" rel="noreferrer" data-testid="link-youtube-main">
              <Button className="cta-gradient w-full h-11 font-black uppercase text-white text-sm" data-testid="button-youtube-main">Watch Real Shifts</Button>
            </a>
          </div>
        </motion.section>

        {/* COMMUNITY */}
        <motion.section {...fadeUp} id="community" data-testid="section-community" className="py-14 px-5 max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-black">3</span>
            Compare your decisions with other drivers
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Users className="w-5 h-5 text-primary icon-glow-yellow" /></div>
              <div>
                <h2 className="text-xl font-black uppercase">Join the driver community.</h2>
                <p className="text-sm text-muted-foreground font-medium mt-1">Compare orders. Learn strategy. Make better decisions.</p>
              </div>
            </div>
            <a href={config.facebookUrl} target="_blank" rel="noreferrer" data-testid="link-community-join">
              <Button variant="outline" className="w-full h-11 font-black uppercase text-sm border-border hover:border-primary hover:text-primary" data-testid="button-community-join">Join the Community</Button>
            </a>
          </div>
        </motion.section>

        {/* FREE TRACKER / EMAIL */}
        <motion.section {...fadeUp} id="free-tracker" data-testid="section-free-tracker" className="py-14 px-5 max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-black">4</span>
            Get the full earnings tracker
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 cta-gradient" />
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
              <div>
                <h2 className="text-xl font-black uppercase">Free Driver Tracker</h2>
                <p className="text-sm text-muted-foreground font-medium mt-1">Know your real hourly, mileage, and profit — plus get bi-weekly insights from real drivers.</p>
              </div>
            </div>
            <a href={config.emailUrl} target="_blank" rel="noopener noreferrer" data-testid="link-email-signup" className="block">
              <Button className="cta-gradient w-full h-11 font-black uppercase text-white text-sm" data-testid="button-submit-tracker">Get Free Tracker</Button>
            </a>
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-bold mt-3">Free tracker + bi-weekly driver newsletter. No spam.</p>
            <p className="text-center text-xs text-muted-foreground/60 font-medium mt-1">Used by real drivers to make better decisions.</p>
          </div>
        </motion.section>

        {/* SHOP */}
        <motion.section {...fadeUp} id="shop" data-testid="section-shop" className="py-14 px-5 max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-black">5</span>
            Gear &amp; tools for drivers
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><ShoppingBag className="w-5 h-5 text-primary" /></div>
              <div>
                <h2 className="text-xl font-black uppercase">Gear &amp; Tools</h2>
                <p className="text-sm text-muted-foreground font-medium mt-1">Trackers, merch, and driver tools — built for the grind.</p>
              </div>
            </div>
            <a href={config.etsyUrl} target="_blank" rel="noreferrer" data-testid="link-shop-visit">
              <Button className="cta-gradient w-full h-11 font-black uppercase text-white text-sm" data-testid="button-shop-visit">Shop Driver Tools</Button>
            </a>
          </div>
        </motion.section>

        {/* FINAL CTA */}
        <section id="final-cta" data-testid="section-final-cta" className="cta-section-gradient text-white py-12 px-5 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight">Next order you see… run it first.</h2>
            <p className="text-sm font-medium text-white/80">Takes 5 seconds. Could save your whole shift.</p>
            <a href={config.trackerUrl} target="_blank" rel="noreferrer" data-testid="link-final-tracker">
              <Button size="lg" className="h-12 px-9 text-base font-black uppercase bg-background text-foreground hover:bg-card" data-testid="button-final-tracker">Check Order Now</Button>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" data-testid="footer" className="bg-background py-8 px-5 border-t border-border">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <div>
              <h3 className="text-lg font-black text-primary tracking-tight">TheDriversGrind</h3>
              <p className="font-bold text-xs text-muted-foreground uppercase tracking-widest mt-0.5">Built by <span className="text-yellow-accent">real</span> drivers</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <a href="#profit-tracker" className="hover:text-foreground" data-testid="link-footer-tracker">Profit Tracker</a>
              <a href={config.youtubeUrl} target="_blank" rel="noreferrer" className="hover:text-foreground" data-testid="link-footer-youtube">YouTube</a>
              <a href={config.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-foreground" data-testid="link-footer-community">Community</a>
              <a href={config.etsyUrl} target="_blank" rel="noreferrer" className="hover:text-foreground" data-testid="link-footer-shop">Shop</a>
              <a href={config.contactEmail} className="hover:text-foreground" data-testid="link-footer-contact">Contact</a>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-6 pt-5 border-t border-border/40 text-xs text-muted-foreground font-medium">
            <p>TheDriversGrind tools are for decision support and estimated profit tracking only. Not financial, tax, or legal advice.</p>
            <p className="mt-1">© {new Date().getFullYear()} TheDriversGrind. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
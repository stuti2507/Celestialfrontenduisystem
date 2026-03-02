import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SnowflakePattern } from '../components/StarfieldBackground';
import { EcosystemCircle } from '../components/EcosystemCircle';
import { WhyNowCharts } from '../components/why-now/WhyNowCharts';
import celestialBg from '../../assets/d4106212b6c715e84315866f019843919d15f109.png';

export function Home() {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Celestial background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url(${celestialBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#A8D5E2]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative snowflakes */}
      <SnowflakePattern className="top-20 right-10" opacity={0.06} />
      <SnowflakePattern className="bottom-40 left-10" opacity={0.05} />

      {/* 1️⃣ HERO SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="estra-title text-7xl md:text-8xl tracking-tight">
              ESTRA
            </h1>
            <h2 className="estra-subtitle text-3xl md:text-4xl">
              Longevity's Operating System
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#A8D5E2] to-transparent" />
            <p className="text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
              Verified Science. Unified Experts. Policy in Motion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The field of healthy longevity is disconnected.
              <br />
              <span className="text-foreground font-medium">ESTRA connects everyone.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <Link to="/explorer">
              <button className="px-8 py-3 bg-gradient-to-r from-[#75C4D5] to-[#5AB9CC] text-white rounded-lg hover:shadow-lg transition-all hover:scale-105">
                Explore Evidence
              </button>
            </Link>
            <button className="px-8 py-3 backdrop-blur-lg bg-white/70 border border-white/60 rounded-lg hover:bg-white/80 transition-all">
              Understand the Ecosystem
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ THE NEW ECOSYSTEM CIRCLE SECTION */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="estra-subtitle text-4xl md:text-5xl">
              The New Ecosystem Circle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The field of healthy longevity is disconnected.
              <br />
              ESTRA connects science, experts, economics, policy, and public understanding.
            </p>
          </motion.div>

          <EcosystemCircle />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center space-y-2 mt-16"
          >
            <p className="text-lg text-foreground">One infrastructure.</p>
            <p className="text-lg text-foreground">All layers of the field connected.</p>
            <p className="text-lg text-muted-foreground">No noise. Only intelligence.</p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ WHAT WE DO */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-foreground text-center mb-16"
          >
            What ESTRA Does
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A8D5E2] to-[#75C4D5] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Evidence Infrastructure</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We synthesize fragmented scientific research into structured, transparent evidence cards with visible uncertainty.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#75C4D5] to-[#5AB9CC] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Expert Interpretation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Verified medical and research professionals contribute structured insight, not opinion content.
                  </p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8FCFE0] to-[#75C4D5] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Policy Translation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We translate scientific findings into economic, systems, and policy intelligence.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              ESTRA = Verified Science + Unified Experts + Real-World Data → Systematic Change
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ OUR COMMITMENT TO FREE KNOWLEDGE */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#A8D5E2]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-8">
                Our Commitment to Free Knowledge
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We will keep as much scientific access as possible free:
                  our evidence cards, expert explanations, and core learning pathways.
                </p>
                <p>
                  Because the more people can learn, question, and stay curious,
                  the faster the longevity field progresses.
                </p>
                <p>
                  Better knowledge leads to better health.
                  A transparent, distraction-free environment builds the strongest foundation for society.
                </p>
                <p className="text-foreground pt-2">
                  Paid features exist only where deeper tools and advanced analysis are required —
                  never to gatekeep truth.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ WHY TRUTH MATTERS */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12 bg-white/60">
              <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-8">
                Why Truth Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Real science should come from qualified experts with credentials —
                  not influencers with marketing incentives.
                </p>
                <p className="text-foreground font-medium">
                  No one deserves to be misled about their health.
                </p>
                <p>
                  In longevity, misinformation is not just confusing.
                  It is dangerous.
                </p>
                <p className="text-foreground pt-2">
                  ESTRA exists to replace noise with structure.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ WHY NOW */}
      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-foreground text-center mb-16"
          >
            Why Now?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <WhyNowCharts />
            <GlassCard className="p-8 text-center">
              <p className="text-lg text-foreground">Longevity is the biggest market transformation of our time. It has no operating system.</p>
              <p className="text-xl text-[#5AB9CC] font-medium mt-3">ESTRA is that system.</p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ TEAM SECTION */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-foreground text-center mb-16"
          >
            Team
          </motion.h2>

          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <GlassCard className="p-8 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-2">Georgia Isabella Bailey</h3>
              <p className="text-sm text-[#5AB9CC]">Founder</p>
            </GlassCard>
          </motion.div>

          {/* Advisors */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-center mb-8 text-muted-foreground">Advisors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <GlassCard className="p-6">
                  <h4 className="text-lg font-semibold mb-1">Anna Milani</h4>
                  <p className="text-sm text-muted-foreground mb-2">Business Strategy</p>
                  <p className="text-xs text-muted-foreground">Founder & CEO @ SPARKD</p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <GlassCard className="p-6">
                  <h4 className="text-lg font-semibold mb-1">Dr. Vishnu Gautam Kota</h4>
                  <p className="text-sm text-muted-foreground">Medical and Technical Advisor</p>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-2xl font-light text-center mb-8 text-muted-foreground">Technology</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassCard className="p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold mb-1">Stuti Iyer</h4>
                <p className="text-sm text-muted-foreground mb-3">Technology & Systems Architecture</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leads platform architecture, evidence infrastructure systems, and technical implementation of ESTRA's intelligence engine.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8️⃣ CLOSING STATEMENT */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
              Built on integrity.
              <br />
              Powered by science.
              <br />
              Designed for impact at global scale.
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#A8D5E2] to-transparent" />
            <p className="text-xl text-[#5AB9CC]">
              ESTRA = Longevity's Operating System
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/40 backdrop-blur-lg bg-white/40">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="text-sm text-muted-foreground space-x-6">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/methodology" className="hover:text-foreground transition-colors">Methodology</Link>
            <Link to="/governance" className="hover:text-foreground transition-colors">Governance</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © 2026 ESTRA. Scientific Evidence Platform.
          </div>
        </div>
      </footer>
    </div>
  );
}
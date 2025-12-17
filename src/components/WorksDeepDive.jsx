import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const WorksDeepDive = () => {
  const containerRef = useRef(null);

  // Ensure content is visible on mobile even if animations don't trigger
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && containerRef.current) {
      // Force visibility of all motion children after a short delay
      const timer = setTimeout(() => {
        const motionElements = containerRef.current?.querySelectorAll('[data-framer-name]');
        motionElements?.forEach((el) => {
          const computedStyle = getComputedStyle(el);
          if (computedStyle.opacity === '0' || computedStyle.opacity === '') {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
        // Also ensure the container itself is visible
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="works-deep-dive"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-navy-dark to-charcoal scroll-mt-20 relative z-0"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond the Famous Novels
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The <span className="italic">Noli</span> and the <span className="italic">Fili</span> are central to Rizal&apos;s
            legacy, but they are only part of a much larger conversation he
            conducted with his time through unfinished fiction, historical
            annotations, symbolic characters, and intimate letters.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.01 }}
          className="space-y-10"
          style={{ minHeight: '100px' }}
        >
          {/* Makamisa */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
              Makamisa: The Novel That Refused to End
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              After the <span className="italic">Noli Me Tángere</span> and <span className="italic">El Filibusterismo</span>,
              Rizal began another narrative in Tagalog that we now call{' '}
              <span className="italic">Makamisa</span> literally &quot;After Mass.&quot;
              Set in a small town, the surviving chapters show a more openly
              comic, satirical tone, poking fun at village life, hypocrisy, and
              clerical pretensions.
            </p>
            <p className="text-white/80 text-sm md:text-base mb-3 leading-relaxed">
              By writing in Tagalog, he moved closer to the everyday language of
              his countrymen, suggesting an experiment in reaching readers
              beyond the ilustrado circle. The humor is sharper and more
              provincial than in the earlier novels, anticipating later
              Filipino literature that treats the small town as a microcosm of
              national problems.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              The novel breaks off abruptly, leaving readers and historians to
              speculate. Scholars such as Ambeth Ocampo suggest that Rizal was
              pulled in many directions medical work, scientific interests,
              political pressures and that events simply overtook his literary
              plans. The fragment reveals a Rizal willing to laugh more openly
              at provincial society and to take Tagalog seriously as a vehicle
              for satire and critique.
            </p>
          </motion.article>

          {/* Morga Annotations */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gold mb-3">
              Rewriting History: Rizal and Morga&apos;s <span className="italic">Sucesos</span>
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              In annotating Antonio de Morga&apos;s 1609 chronicle{' '}
              <span className="italic">Sucesos de las Islas Filipinas</span>,
              Rizal was not merely fixing minor errors. He was using a Spanish
              official&apos;s text as a stage on which to argue that Filipinos had
              a rich, organized, and dignified life before Spain arrived.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  The Spanish Narrative
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  In Morga&apos;s original narrative, pre-colonial Filipinos appear
                  as background figures: pagan, loosely organized, in need of
                  proper religion and governance. The Philippines is framed as a
                  space that becomes meaningful only when folded into the
                  Spanish empire, helping justify conquest as rescue.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Rizal&apos;s Annotations
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Rizal&apos;s notes push back against this framing. He highlights
                  evidence of pre-colonial agriculture, metallurgy, writing
                  systems, and regional trade, and emphasizes patterns of social
                  organization and law that show a functioning civilization. By
                  making a Spanish chronicler unwittingly testify to native
                  competence, he practiced an early form of decolonizing
                  history.
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm md:text-base mt-4 leading-relaxed">
              These annotations tied into the Indios Bravos ideal: that
              Filipinos could stand shoulder-to-shoulder with other nations if
              they reclaimed pride in their past. History here becomes a
              political argument about self-respect.
            </p>
          </motion.article>

          {/* Character Symbolism */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8"
          >
            <div className="mb-6">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gold mb-3">
                Reading Characters as Symbols
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-3xl leading-relaxed">
                Rizal&apos;s characters are not only individuals in a story; they
                are symbols that map the structures of colonial society. Reading
                them this way reveals how the novels argue about reform,
                revolution, and moral responsibility without turning into dry
                essays.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  The Idealized Nation Under Guard
                </p>
                <h4 className="font-serif text-xl font-semibold text-white mb-2">
                  Maria Clara → The Philippines
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Maria Clara is often read as the personification of the
                  Philippines: beautiful and virtuous, but controlled by forces
                  larger than herself. Her apparent fragility hides the violence
                  of a system in which a woman&apos;s body, lineage, and future are
                  negotiated by friars and families. Later readers question
                  whether this ideal traps the nation in passivity, even as her
                  suffering exposes how power silences those meant to symbolize
                  purity.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  Reform That Turns Into Explosion
                </p>
                <h4 className="font-serif text-xl font-semibold text-white mb-2">
                  Simoun vs Ibarra → Revolution vs Reform
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Crisóstomo Ibarra of the <span className="italic">Noli</span> begins as a believer in
                  gradual reform, while Simoun in the <span className="italic">Fili</span> returns as a
                  hardened conspirator. The shift suggests Rizal&apos;s deepening
                  doubt that polite appeals could transform an unjust order, yet
                  the failure of Simoun&apos;s plot also warns that rage without
                  moral clarity can destroy the very people it aims to liberate.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  The System Behind One Loud Voice
                </p>
                <h4 className="font-serif text-xl font-semibold text-white mb-2">
                  Padre Dámaso → Clerical Abuse
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Padre Dámaso condenses the arrogance of a clerical system
                  shielded by both Church and state. His interference in family
                  affairs, contempt for indios, and confidence that he will
                  escape punishment dramatize institutional patterns impunity,
                  racism, moral double standards that went far beyond one man.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  Wisdom at the Margins
                </p>
                <h4 className="font-serif text-xl font-semibold text-white mb-2">
                  Pilosopo Tasio → Enlightened Reason
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Pilosopo Tasio is the village thinker whose ideas are dismissed
                  as eccentric or dangerous. He represents reason in a town
                  dominated by superstition and fear, writing for a future
                  generation that might understand him. Through Tasio, Rizal
                  imagines intellectuals who are both necessary and lonely,
                  planting seeds of change they may never see bloom.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Letters to Blumentritt */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gold mb-3">
              Letters to Blumentritt: A Mind in Conversation
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              To Ferdinand Blumentritt an Austrian scholar of the Philippines
              Rizal wrote with unusual openness. Across many letters, we glimpse
              not the bronze statue but a human being wrestling with danger,
              strategy, and friendship. The correspondence forms a long,
              thoughtful dialogue about a country both men cared for, each from
              different sides of empire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Inner Doubts and Fears
                </h4>
                <p className="text-white/80 text-sm mb-3 leading-relaxed">
                  In these letters, Rizal admits uncertainty about how far
                  reform can go, whether Filipinos are prepared for sudden
                  change, and what risks his writings impose on ordinary people.
                  Silence feels like betrayal, but speaking too loudly invites
                  repression.
                </p>
                <p className="text-gold-muted text-xs italic">
                  &quot;If I speak too loudly, they will punish those who have less
                  protection than I do. Yet silence feels like betrayal.&quot;
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Political Strategy
                </h4>
                <p className="text-white/80 text-sm mb-3 leading-relaxed">
                  Rizal uses the correspondence to test political arguments,
                  explaining abuses of friar orders, evaluating reform
                  movements, and rehearsing the case for Filipino
                  representation. With Blumentritt, he refines a position that
                  refuses both reckless rebellion and passive obedience.
                </p>
                <p className="text-gold-muted text-xs italic">
                  &quot;Our people are often portrayed as children, yet they bear
                  burdens heavier than many in Europe.&quot;
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Friendship and Trust
                </h4>
                <p className="text-white/80 text-sm mb-3 leading-relaxed">
                  Over time, the letters grow more personal. Rizal shares news
                  of his family, health, and disappointments, and Blumentritt
                  responds with sympathy and practical advice. For a man
                  frequently under suspicion, this relationship offers a rare
                  space to be both sharp analyst and vulnerable friend.
                </p>
                <p className="text-gold-muted text-xs italic">
                  The letters prevent us from turning Rizal into a marble
                  statue; they restore the tremor of a living voice.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksDeepDive;


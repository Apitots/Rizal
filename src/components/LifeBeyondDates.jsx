import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const LifeBeyondDates = () => {
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
      id="life-beyond-dates"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-charcoal via-navy-dark to-charcoal scroll-mt-20 relative z-0"
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
            Life Beyond Dates
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Rizal&apos;s life does not fit neatly into a sequence of dates and
            monuments. Behind the textbook milestones is a person who doubted,
            loved, argued, experimented, and sometimes contradicted himself.
          </p>
          <p className="text-white/60 text-sm max-w-3xl mx-auto mt-3">
            This section looks at controversies, relationships, and hidden sides
            of his work not to tear down a hero, but to see him as a complex
            human being whose choices emerged from pressure, affection, and
            risk.
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
          {/* Retraction Debate */}
          <motion.div
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pt-6 pb-4 border-b border-gold/15">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gold mb-2">
                The Retraction: Did Rizal Return to the Church?
              </h3>
              <p className="text-white/75 text-sm md:text-base max-w-3xl leading-relaxed">
                On the eve of his execution, did José Rizal sign a document
                retracting his Masonic ties and anti-friar writings? Historians
                have argued over this for more than a century. The controversy
                is less about catching Rizal in a lie and more about how
                different groups church, state, nationalists, Masons need him to
                be remembered.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/15">
              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-xs font-semibold tracking-wide text-gold/80 mb-2 uppercase">
                  Argument: Rizal Signed a Genuine Retraction
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm md:text-base leading-relaxed">
                  <li>
                    Citing <span className="font-semibold">Father Vicente Balaguer&apos;s testimony</span>,
                    some clergy insist that Rizal confessed, heard Mass, and
                    signed a formal retraction in Fort Santiago before dawn on
                    30 December 1896.
                  </li>
                  <li>
                    Supporters point to documents published by the Archdiocese,
                    arguing that the handwriting and signature resemble Rizal&apos;s
                    other prison letters and follow expected ecclesiastical
                    procedures.
                  </li>
                  <li>
                    They stress his Catholic upbringing and lifelong concern
                    with moral questions, making a final reconciliation with the
                    Church psychologically plausible.
                  </li>
                  <li>
                    From this angle, the retraction becomes a spiritual climax:
                    the rational critic of friars ultimately entrusts himself to
                    the faith that shaped his conscience.
                  </li>
                </ul>
              </div>
              <div className="p-5 sm:p-6 md:p-8 bg-charcoal/60">
                <p className="text-xs font-semibold tracking-wide text-gold/80 mb-2 uppercase">
                  Argument: The Retraction Document Is Doubtful
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm md:text-base leading-relaxed">
                  <li>
                    Critics question the chain of custody of the document: it
                    allegedly disappeared for decades and resurfaced under
                    suspicious circumstances, long after it would have been most
                    politically useful.
                  </li>
                  <li>
                    Handwriting experts and some historians note inconsistencies
                    in script and spacing, suggesting forgery or heavy editorial
                    intervention.
                  </li>
                  <li>
                    <span className="font-semibold">Masonic circles</span> and nationalist writers, shocked
                    by early 20th-century claims, saw the retraction as an
                    attempt to domesticate Rizal to turn a radical critic into a
                    model penitent Filipino.
                  </li>
                  <li>
                    For them, the document clashes with his last known letters,
                    which read less like those of a man repudiating his work and
                    more like those of someone calmly accepting martyrdom.
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-5 sm:px-6 md:px-8 pb-6 pt-4 bg-navy-dark/80 border-t border-gold/15">
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The retraction debate is unlikely to be settled definitively.
                What it reveals is how fiercely different communities fight to
                claim Rizal&apos;s last words. Whether one believes he retracted or
                not, the controversy reminds us that heroes are shaped not only
                by what they did, but by the stories later generations insist on
                telling about their deaths.
              </p>
            </div>
          </motion.div>

          {/* Women of Rizal */}
          <motion.div variants={itemVariants}>
            <div className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
                  Love and Letters: The Women in Rizal&apos;s Life
                </h3>
                <p className="text-white/75 text-sm md:text-base max-w-3xl leading-relaxed">
                  Rizal&apos;s emotional life rarely appears in textbook outlines,
                  yet his relationships shaped how he imagined love, nation, and
                  sacrifice. The women he loved were not side comments in a
                  heroic career; they were presences who inspired characters,
                  complicated choices, and grounded his abstract ideals in very
                  human attachments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Segunda */}
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6 hover:border-gold/50 transition-colors">
                  <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                    First Love, First Impossibility
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">
                    Segunda Katigbak
                  </h4>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    Segunda Katigbak was the young woman who turned Rizal&apos;s
                    adolescent gaze into literary memory. He later recalled her
                    with a blend of tenderness and regret a love that seemed
                    perfect but was already promised to another man. This early,
                    thwarted affection taught him that desire is not always
                    rewarded and that family arrangements could override
                    personal choice.
                  </p>
                  <p className="text-gold-muted text-xs leading-relaxed">
                    Influence: sharpened his sensitivity to quiet, unfulfilled
                    love a theme that haunts his portrayals of gentle, silenced
                    women.
                  </p>
                </div>

                {/* Leonor */}
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6 hover:border-gold/50 transition-colors">
                  <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                    The Long-Distance Fiancée, Muse of Maria Clara
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">
                    Leonor Rivera
                  </h4>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    Leonor sustained a nearly decade-long relationship with
                    Rizal through letters passed between provinces and
                    continents. Their engagement was strained by distance,
                    censorship, and parental anxiety; at one point, her family
                    hid Rizal&apos;s letters and steered her toward another match.
                    Widely seen as the prototype for Maria Clara, Leonor&apos;s
                    tragedy deepened his bitterness about how colonial and
                    familial power policed women&apos;s choices.
                  </p>
                  <p className="text-gold-muted text-xs leading-relaxed">
                    Influence: pushed him to question who truly controls women&apos;s
                    hearts families, friars, or the women themselves.
                  </p>
                </div>

                {/* Josephine */}
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6 hover:border-gold/50 transition-colors">
                  <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                    Partner in Exile, Contested Wife
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">
                    Josephine Bracken
                  </h4>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    Josephine entered Rizal&apos;s life in Dapitan as the
                    stepdaughter of a patient seeking eye treatment, and their
                    relationship grew into a partnership lived under constant
                    surveillance. They tried to marry within the Church, but
                    friars complicated the process, and accounts differ on
                    whether the marriage was ever canonically valid. Her
                    ambiguous status mirrors how Rizal himself occupied a gray
                    zone respected by some, distrusted by authorities, never
                    fully allowed legitimacy.
                  </p>
                  <p className="text-gold-muted text-xs leading-relaxed">
                    Influence: turned exile into a shared domestic experiment,
                    where love, work, and danger intertwined in everyday life.
                  </p>
                </div>

                {/* O-Sei-San */}
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6 hover:border-gold/50 transition-colors">
                  <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                    A Different Asia, A Possible Life
                  </p>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">
                    O-Sei-San (Seiko Usui)
                  </h4>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    In Japan, Rizal met Seiko Usui whom he called O-Sei-San and
                    briefly tasted the possibility of staying in a non-colonized
                    Asian country. Their relationship unfolded in a society that
                    impressed him deeply: disciplined, dignified, and
                    independent of European rule. He later wrote of her with a
                    tone of &quot;what if,&quot; imagining a life he might have chosen
                    had he not felt bound to return to the Philippine struggle.
                  </p>
                  <p className="text-gold-muted text-xs leading-relaxed">
                    Influence: personified an alternative future personal
                    happiness in a proud Asian nation he ultimately declined in
                    favor of a more dangerous path.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scientist in Dapitan */}
          <motion.div variants={itemVariants}>
            <div className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
                  Rizal in Dapitan: Doctor, Naturalist, Engineer
                </h3>
                <p className="text-white/75 text-sm md:text-base max-w-3xl leading-relaxed">
                  Exile in Dapitan is often described as a pause before
                  martyrdom, but for Rizal it was also a laboratory. Here he
                  treated patients, collected specimens, designed infrastructure,
                  and tested how knowledge might improve everyday life far from
                  the centers of power.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    Draco rizali – The Flying Lizard
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    While in Dapitan, Rizal collected local fauna and sent
                    specimens to European scientists. One of these, a gliding
                    lizard, was later named <span className="italic">Draco rizali</span>,
                    inscribing his surname into zoological taxonomy and
                    acknowledging that a colonized subject could contribute
                    original data to global science.
                  </p>
                </div>
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    Apogonia rizali – A Beetle in the Records
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Another species, the beetle <span className="italic">Apogonia rizali</span>, bears his
                    name and marks a collaboration between his careful fieldwork
                    and European classification systems. Behind this small
                    insect lies a network of letters and specimens that linked
                    Dapitan&apos;s forests to laboratories abroad.
                  </p>
                </div>
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    The Dapitan Waterworks
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Rizal designed and helped build a gravity-fed water system
                    to bring clean water to parts of Dapitan. Technically modest
                    but ethically ambitious, it treated a remote town&apos;s
                    residents as worthy of the same concern as urban elites and
                    turned engineering into a quiet assertion of dignity.
                  </p>
                </div>
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    Healing Eyes, Opening Eyes
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Trained as an ophthalmologist, Rizal continued to perform
                    eye surgeries and treat patients even while under
                    surveillance. Restoring sight had obvious medical value, but
                    it also carried a metaphor in a society kept in ignorance:
                    to heal an eye was, in a small way, to oppose the darkness
                    imposed by colonial rule.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Family Tree */}
          <motion.div variants={itemVariants}>
            <div className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
                  The Mercado Rizal Family: Roots of a Revolutionary
                </h3>
                <p className="text-white/75 text-sm md:text-base max-w-3xl leading-relaxed">
                  Rizal was not an isolated genius. He belonged to a large,
                  educated, and often persecuted family whose choices and
                  sufferings shaped his moral universe. Tracing this family tree
                  shows how ideas, courage, and caution flowed through siblings
                  and parents long before he became a national symbol.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    Paciano Rizal
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Paciano, the older brother, was politically involved even
                    before José left for Europe and had been close to Father
                    José Burgos, one of the priests executed in 1872. Throughout
                    José&apos;s travels, Paciano protected the family at home and
                    absorbed suspicion from authorities. After the execution, he
                    joined the revolutionary struggle as a general, turning
                    grief into armed resistance.
                  </p>
                </div>
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    Teodora Alonso
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Teodora Alonso, Rizal&apos;s mother, was educated and known for
                    her intelligence and piety. She endured imprisonment on
                    dubious charges, exposing her children to the arbitrary
                    cruelty of colonial rule. Her teaching and moral authority
                    gave Rizal a concrete image of injustice and a model of
                    steadfast conscience that echoes in many of his strong
                    maternal figures.
                  </p>
                </div>
                <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                  <h4 className="font-serif text-xl font-semibold text-white mb-2">
                    From Mercado to Rizal
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    The family&apos;s original surname, Mercado, carried
                    associations of trade and status, but under Spanish rule
                    names could attract or deflect official attention. Adopting
                    Rizal as an additional surname may have been a strategic
                    move, and over time José became known primarily by this
                    second name. The shift hints at a tension between blending
                    in and standing out between safety and symbolic assertion
                    under empire.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeBeyondDates;


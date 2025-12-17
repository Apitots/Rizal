import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Legacy = () => {
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
      id="legacy"
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
            Beyond Monuments and Holidays
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Rizal&apos;s image has been used by empires, republics, churches, and
            movements that do not always agree with one another. This section
            does not ask whether he is a &quot;true&quot; hero; instead, it invites you
            to notice how and why different groups have turned him into
            different kinds of symbol.
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
          {/* American-made hero debate */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pt-6 pb-4 border-b border-gold/15">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-gold mb-2">
                Was Rizal an American-Made Hero?
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-3xl leading-relaxed">
                Historian Renato Constantino famously argued that the Americans
                elevated Rizal over more radical figures like Andrés Bonifacio
                in order to promote a safe model of nationalism. According to
                this view, colonial authorities preferred a hero who wrote
                novels and accepted martyrdom over one who led workers and
                peasants into armed revolt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gold/15">
              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  Perspective 1 – Rizal as Safe Hero for American Rule
                </p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  From this angle, the American colonial government found in
                  Rizal the perfect figure to celebrate. Educated in Europe and
                  committed at least in his lifetime to reform rather than
                  full-scale revolution, he could be presented as a model
                  &quot;good Filipino.&quot; By institutionalizing Rizal Day, erecting
                  monuments, and placing his works in classrooms, the Americans
                  encouraged pride that did not automatically translate into
                  demands for immediate independence.
                </p>
              </div>
              <div className="p-5 sm:p-6 md:p-8 bg-charcoal/60">
                <p className="text-gold-muted text-xs uppercase tracking-wide mb-1">
                  Perspective 2 – Rizal&apos;s Own Radical Edges
                </p>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Other scholars push back against a purely &quot;American-made&quot;
                  interpretation. They point out that his writings fiercely
                  criticized friar abuses, racial prejudice, and the moral
                  bankruptcy of an oppressive system. Even if he did not lead a
                  revolution, his ideas and martyrdom inspired those who did;
                  reducing him to a safe, domesticated hero risks ignoring the
                  dangerous questions he posed about power and justice.
                </p>
              </div>
            </div>
            <div className="px-5 sm:px-6 md:px-8 pb-6 pt-4 bg-navy-dark/80 border-t border-gold/15">
              <p className="text-white/75 text-sm md:text-base leading-relaxed">
                The &quot;American-made hero&quot; debate reminds us that heroes are not
                neutral. States, textbooks, and institutions constantly choose
                which aspects of a life to highlight or downplay. To ask whether
                Rizal was made safe is also to ask how we ourselves might be
                accepting convenient versions of history.
              </p>
            </div>
          </motion.article>

          {/* Rizalistas */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/70 backdrop-blur-sm rounded-2xl border border-gold/25 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
              The Rizalistas: When a Hero Becomes Sacred
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              In the foothills of Mount Banahaw and other sites, religious
              movements have arisen that treat Rizal not only as national hero
              but as prophet, saint, or even divine figure. These Rizalista
              groups blur the line between civic memory and religious devotion,
              turning historical admiration into lived, ritual practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Beliefs and Practices
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Many Rizalista groups see Rizal as an anointed figure linked
                  to biblical prophecies, imagined as a messianic presence, or
                  honored as a uniquely Filipino savior. Devotees may carry his
                  portraits in processions, compose hymns addressed to him, and
                  gather at sacred sites to seek healing or guidance.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Cultural Meanings
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Rather than dismissing these movements as superstition,
                  anthropologists read them as creative responses to history. In
                  a country where colonialism blurred the boundaries between
                  church and state, it is not surprising that political figures
                  acquire religious overtones. For marginalized communities,
                  seeing Rizal as holy can assert that Filipino suffering and
                  hope matter in the eyes of the divine.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/20 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Respectful Distance
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  A museum approach does not ask visitors to accept or reject
                  Rizalista beliefs. Instead, it invites a respectful distance:
                  to observe rituals, listen to songs, and ask what needs and
                  aspirations they express. In this light, the Rizalistas are
                  part of the broader story of how Filipinos rework symbols
                  given to them by both church and state.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Knights of Rizal */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-gold/30 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
              The Knights of Rizal: Institutional Memory
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              The Order of the Knights of Rizal, created under Republic Act
              646, is a civic organization officially tasked with honoring and
              promoting the ideals of José Rizal. Recognized by law, it occupies
              a formal place in the landscape of Philippine institutions devoted
              to national memory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Origins and Mandate
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  The organization traces its beginnings to early 20th-century
                  efforts to gather admirers of Rizal into a structured order,
                  modeled partly on European knighthoods. With Republic Act 646,
                  it gained a legal charter to establish chapters, confer
                  honors, and participate in state ceremonies, with a mandate to
                  study his works and propagate his ideals.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Activities
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  The Knights conduct wreath-laying at monuments, organize
                  lectures and symposia, sponsor youth contests, and assist in
                  local and national commemorations. Members wear formal regalia
                  and insignia during key events, creating a visual language of
                  solemnity and continuity around Rizal&apos;s memory.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Debates
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  As with many civic orders, observers debate the Knights&apos;
                  present relevance. Critics question whether the group has
                  become too ceremonial or exclusive, while supporters emphasize
                  its role in sustaining historical literacy and patriotism.
                  These discussions reflect wider questions about how a modern
                  democracy should institutionalize respect for heroes.
                </p>
              </div>
            </div>
            <p className="text-white/75 text-sm md:text-base mt-4 leading-relaxed">
              Whatever one&apos;s view, the Knights of Rizal show how the memory of
              one man can be woven into laws, ceremonies, and organizations that
              span generations.
            </p>
          </motion.article>

          {/* Modern relevance */}
          <motion.article
            variants={itemVariants}
            className="bg-navy-dark/80 backdrop-blur-sm rounded-2xl border border-gold/30 p-5 sm:p-6 md:p-8"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gold mb-3">
              Rizal&apos;s &quot;Social Cancer&quot; Today
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-1 bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <p className="font-serif text-lg text-gold italic mb-2">
                  &quot;There can be no tyrants where there are no slaves.&quot;
                </p>
                <p className="font-serif text-sm text-gold/80">
                  — attributed to Rizal
                </p>
              </div>
              <div className="md:col-span-2 flex items-center">
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Rizal diagnosed the Philippines as suffering from a &quot;social
                  cancer&quot; a deep illness in its institutions and values. His
                  words were aimed at a 19th-century colony, but they continue
                  to echo in debates about corruption, power, and public
                  discourse today.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Modern Corruption
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Rizal condemned officials and friars who treated office as
                  personal privilege rather than public trust. Today, names and
                  uniforms may have changed, but the temptation remains to use
                  position for gain and protect allies instead of the common
                  good. The &quot;social cancer&quot; metaphor suggests that corruption is
                  not a series of isolated scandals but an illness that slowly
                  normalizes itself unless confronted.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Political Dynasties
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  In Rizal&apos;s time, power clustered around a few families, often
                  working closely with colonial authorities. Modern political
                  dynasties can echo this pattern, concentrating decisions in
                  narrow circles while presenting themselves as benevolent
                  providers. Linking his critique to the present invites us to
                  ask whether our institutions truly open paths for broader
                  participation.
                </p>
              </div>
              <div className="bg-charcoal/70 rounded-xl border border-gold/25 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  Social Media Discourse
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  If Rizal lived today, the battles he described in print would
                  also unfold in comment sections and newsfeeds. Social media
                  can amplify calls for justice but can also spread
                  misinformation and reward outrage over listening. The &quot;social
                  cancer&quot; now includes how we argue online: whether we build a
                  public sphere for reasoned disagreement or for noise and
                  insult.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-charcoal/80 rounded-xl border border-gold/30 p-5 sm:p-6">
                <h4 className="font-serif text-lg font-semibold text-gold mb-2">
                  Reflective Questions
                </h4>
                <ul className="list-disc list-inside text-white/80 text-sm space-y-2 leading-relaxed">
                  <li>
                    What would Rizal criticize today in the way we tolerate or
                    explain away corruption?
                  </li>
                  <li>
                    Where do we see &quot;social cancer&quot; in our own habits, not just
                    in the actions of leaders?
                  </li>
                  <li>
                    How do our online conversations about politics, religion, or
                    nation either heal or deepen the divisions he once
                    described?
                  </li>
                  <li>
                    If you stood before Rizal&apos;s monument, what change in
                    yourself or in your community would you be ready to commit
                    to?
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  Monuments and holidays can make it easy to admire Rizal from a
                  distance. Taking his diagnosis of &quot;social cancer&quot; seriously
                  means turning the gaze back on ourselves on what we accept,
                  ignore, or normalize. In that sense, the most important part
                  of his legacy is not agreement about the past, but the courage
                  to face the present.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;


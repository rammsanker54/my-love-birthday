import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  ChevronDown,
  Gift,
} from "lucide-react";

import "./App.css";

function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="floating-hearts">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="floating-heart"
          initial={{
            opacity: 0,
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            scale: 0.5 + Math.random(),
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: "-15vh",
            x: `${Math.random() * 100}vw`,
            rotate: [0, 30, -30, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            delay: Math.random() * 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart fill="currentColor" size={18 + Math.random() * 18} />
        </motion.div>
      ))}
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="app">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.section
            key="opening"
            className="opening-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
            }}
            transition={{ duration: 1 }}
          >
            <div className="glow glow-one" />
            <div className="glow glow-two" />

            <motion.div
              className="opening-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
              }}
            >
              <motion.div
                className="tiny-label"
                initial={{ opacity: 0, letterSpacing: "0px" }}
                animate={{
                  opacity: 1,
                  letterSpacing: "5px",
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.7,
                }}
              >
                FOR THE WOMAN I LOVE
              </motion.div>

              <motion.div
                className="hero-heart"
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart fill="currentColor" />
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                }}
              >
                Happy Birthday,
                <span> My Love</span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                }}
              >
                A little corner of the internet,
                <br />
                created just for you.
              </motion.p>

              <motion.button
                className="enter-button"
                onClick={() => setEntered(true)}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1.5,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Sparkles size={18} />
                Enter Our Story
                <Heart size={17} />
              </motion.button>

              <motion.div
                className="scroll-hint"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="story"
            className="story-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section className="story-hero">
              <div className="story-overlay" />

              <motion.div
                className="story-content"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <span>OUR BEAUTIFUL STORY</span>

                <h2>
                  To my
                  <br />
                  <strong>beautiful wife</strong>
                </h2>

                <p>
                  If I had to choose one person to spend
                  every lifetime with...
                  <br />
                  I would choose you every single time.
                </p>

                <motion.div
                  className="story-heart"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Heart fill="currentColor" />
                </motion.div>
              </motion.div>
            </section>

            <section className="love-letter">
              <div className="section-inner">
                <motion.div
                  className="section-label"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Sparkles size={16} />
                  A LETTER FOR YOU
                  <Sparkles size={16} />
                </motion.div>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  My Love,
                </motion.h2>

                <motion.div
                  className="letter-card"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <p>
                    Today is not just your birthday.
                    It is a reminder of how lucky I am
                    that you came into my life.
                  </p>

                  <p>
                    You have brought so much happiness,
                    warmth and love into my world.
                    Every little moment with you has
                    become a memory I want to keep forever.
                  </p>

                  <p>
                    I may not always have the perfect
                    words, but I hope you always know
                    how deeply you are loved.
                  </p>

                  <p className="signature">
                    Forever yours ❤️
                  </p>
                </motion.div>
              </div>
            </section>

            <section className="birthday-section">
              <motion.div
                className="gift-container"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Gift size={70} strokeWidth={1.2} />
                </motion.div>

                <h2>There is more...</h2>

                <p>
                  This is only the beginning of your
                  birthday surprise.
                </p>
              </motion.div>
            </section>
            <section className="memories-section">
              <div className="section-inner">

                <motion.div
                  className="section-label"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                >
                  <Sparkles size={16} />
                  OUR MEMORIES
                  <Sparkles size={16} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                >
                  Moments I treasure
                </motion.h2>

                <div className="memory-grid">

                  <motion.div
                    className="memory-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/photo1.jpg"
                      alt="Memory 1"
                    />
                    <div className="memory-overlay">
                      <Heart fill="currentColor" size={20} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="memory-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/photo2.jpg"
                      alt="Memory 2"
                    />
                    <div className="memory-overlay">
                      <Heart fill="currentColor" size={20} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="memory-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/photo3.jpg"
                      alt="Memory 3"
                    />
                    <div className="memory-overlay">
                      <Heart fill="currentColor" size={20} />
                    </div>
                  </motion.div>

                  <motion.div
                    className="memory-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/photo4.jpg"
                      alt="Memory 4"
                    />
                    <div className="memory-overlay">
                      <Heart fill="currentColor" size={20} />
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>

            {/*  */}

            <section className="engagement-section">
              <div className="engagement-glow engagement-glow-one" />
              <div className="engagement-glow engagement-glow-two" />

              <div className="engagement-inner">

                <motion.div
                  className="section-label"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                >
                  <Heart size={16} fill="currentColor" />
                  OUR SPECIAL DAY
                  <Heart size={16} fill="currentColor" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                >
                  The day our
                  <span> forever began</span>
                </motion.h2>

                <motion.p
                  className="engagement-intro"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  One beautiful day, one unforgettable moment,
                  and one promise that changed our lives forever.
                </motion.p>

                <div className="engagement-content">

                  {/* Photo */}
                  <motion.div
                    className="engagement-photo"
                    initial={{
                      opacity: 0,
                      x: -60,
                      rotate: -3,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    whileHover={{
                      scale: 1.02,
                      rotate: 1,
                    }}
                  >
                    <div className="photo-frame">
                      <img
                        src="/photos/engagement.jpg"
                        alt="Our engagement day"
                      />

                      <div className="photo-shine" />

                      <div className="engagement-heart">
                        <Heart fill="currentColor" size={22} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Story */}
                  <motion.div
                    className="engagement-story"
                    initial={{
                      opacity: 0,
                      x: 60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15,
                    }}
                  >

                    <div className="engagement-date">
                      <span className="date-line" />
                      <div>
                        <small>OUR ENGAGEMENT DAY</small>
                        <strong>DD • MM • YYYY</strong>
                      </div>
                      <span className="date-line" />
                    </div>

                    <h3>
                      And then,
                      <br />
                      <em>we said yes.</em>
                    </h3>

                    <p>
                      That day wasn't just another day on the
                      calendar. It was the beginning of a new
                      chapter in our story.
                    </p>

                    <p>
                      Two hearts, two lives, and one beautiful
                      promise to walk through life together.
                    </p>

                    <div className="engagement-quote">
                      <Sparkles size={18} />

                      <span>
                        "From this moment,
                        <br />
                        forever became our story."
                      </span>

                      <Sparkles size={18} />
                    </div>

                  </motion.div>

                </div>

                {/* Bottom promise */}
                <motion.div
                  className="engagement-promise"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                >
                  <Heart fill="currentColor" size={18} />

                  <span>
                    One promise. Two hearts. One lifetime.
                  </span>

                  <Heart fill="currentColor" size={18} />
                </motion.div>

              </div>
            </section>

            {/*  */}

            {/*  */}
            <section className="outings-section">
              <div className="outings-inner">

                <motion.div
                  className="section-label"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Sparkles size={16} />
                  OUR OUTINGS
                  <Sparkles size={16} />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Little adventures,
                  <span> beautiful memories.</span>
                </motion.h2>

                <motion.p
                  className="outings-intro"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Every place feels a little more special
                  when I'm there with you.
                </motion.p>

                <div className="outings-grid">

                  <motion.div
                    className="outing-card outing-wide"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing1.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 01</span>
                        <h3>Our Little Adventure</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                  {/* OUTING 2 */}
                  <motion.div
                    className="outing-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing2.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 02</span>
                        <h3>A Day Together</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                  {/* OUTING 3 */}
                  <motion.div
                    className="outing-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing3.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 03</span>
                        <h3>Just Us</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                  {/* OUTING 4 */}
                  <motion.div
                    className="outing-card outing-wide"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing4.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 04</span>
                        <h3>Another Beautiful Day</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                  {/* OUTING 5 */}
                  <motion.div
                    className="outing-card outing-tall"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing5.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 05</span>
                        <h3>Forever Moments</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                  {/* OUTING 6 */}
                  <motion.div
                    className="outing-card outing-tall"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    whileHover={{ y: -8 }}
                  >
                    <img
                      src="/photos/outing6.jpg"
                      alt="Our outing"
                    />

                    <div className="outing-overlay">
                      <div>
                        <span>MEMORY 06</span>
                        <h3>With You</h3>
                      </div>

                      <Heart fill="currentColor" size={22} />
                    </div>
                  </motion.div>

                </div>

                <motion.div
                  className="outings-bottom"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Heart fill="currentColor" size={16} />
                  <span>More adventures waiting for us...</span>
                  <Heart fill="currentColor" size={16} />
                </motion.div>

              </div>
            </section>
            {/*  */}
            {/*  */}
            <section className="marriage-section">
              <div className="marriage-bg-glow marriage-glow-one" />
              <div className="marriage-bg-glow marriage-glow-two" />

              <div className="marriage-inner">

                <motion.div
                  className="section-label marriage-label"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Heart size={16} fill="currentColor" />
                  OUR WEDDING DAY
                  <Heart size={16} fill="currentColor" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  The day we became
                  <span> one.</span>
                </motion.h2>

                <motion.p
                  className="marriage-intro"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Among all the beautiful moments in our story,
                  this will always be one of the most precious.
                </motion.p>

                {/* Main Wedding Photo */}

                <motion.div
                  className="wedding-hero-photo"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="wedding-photo-frame">

                    <img
                      src="/photos/marriage.jpg"
                      alt="Our wedding day"
                    />

                    <div className="wedding-photo-overlay" />

                    <motion.div
                      className="wedding-photo-text"
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.5,
                        duration: 0.8,
                      }}
                    >
                      <div className="wedding-small-heart">
                        <Heart
                          size={18}
                          fill="currentColor"
                        />
                      </div>
                    </motion.div>

                  </div>
                </motion.div>

                {/* Wedding Details */}

                <div className="wedding-details">

                  <motion.div
                    className="wedding-date-card"
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="wedding-card-label">
                      OUR SPECIAL DATE
                    </span>

                    <strong>
                      26
                      <small> / </small>
                      10
                      <small> / </small>
                      2025
                    </strong>

                    <div className="date-decoration">
                      <span />
                      <Heart
                        size={16}
                        fill="currentColor"
                      />
                      <span />
                    </div>

                    <p>
                      The day two hearts became one
                      beautiful family.
                    </p>
                  </motion.div>

                  <motion.div
                    className="wedding-story"
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                    }}
                  >

                    <div className="wedding-story-line">
                      <span className="story-dot" />
                      <span className="story-line" />
                    </div>

                    <div className="wedding-story-content">

                      <span>THAT BEAUTIFUL DAY</span>

                      <h3>
                        A promise,
                        <br />
                        <em>made forever.</em>
                      </h3>

                      <p>
                        We promised to stand beside each other
                        through every season of life — through
                        laughter, challenges, dreams and
                        everything in between.
                      </p>

                      <p>
                        And if I could live that day all over
                        again, I would still choose you.
                      </p>

                    </div>

                  </motion.div>

                </div>

                {/* Wedding Memories */}

                <motion.div
                  className="wedding-mini-gallery"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >

                  <div className="wedding-mini-card">
                    <img
                      src="/photos/wedding1.jpg"
                      alt="Wedding memory"
                    />
                  </div>

                  <div className="wedding-mini-card wedding-mini-middle">
                    <img
                      src="/photos/wedding2.jpg"
                      alt="Wedding memory"
                    />
                  </div>

                  <div className="wedding-mini-card">
                    <img
                      src="/photos/wedding3.jpg"
                      alt="Wedding memory"
                    />
                  </div>

                </motion.div>

                {/* Forever message */}

                <motion.div
                  className="forever-message"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                  }}
                >
                  <Sparkles size={18} />
                  <div>
                    <span>AND FROM THAT DAY...</span>

                    <h3>
                      I got to call you
                      <em> my wife.</em>
                    </h3>
                  </div>

                  <Sparkles size={18} />

                </motion.div>

              </div>
            </section>
            {/*  */}

            {/*  */}



            <section className="birthday-gallery-section">
  <div className="birthday-gallery-glow birthday-glow-one" />
  <div className="birthday-gallery-glow birthday-glow-two" />

  <div className="birthday-gallery-inner">

    <motion.div
      className="birthday-gallery-heading"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
    >
      <span className="birthday-gallery-label">
        ✦ THE BIRTHDAY GIRL ✦
      </span>

      <h2>
        Beautiful,
        <span> Inside & Out.</span>
      </h2>

      <p>
        A little collection of the woman who makes
        my world a more beautiful place.
      </p>
    </motion.div>

    <div className="birthday-photo-grid">

      <motion.div
        className="birthday-photo-card birthday-photo-large"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/photos/birthday-girl-1.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={22} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <img
          src="/photos/birthday-girl-2.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card birthday-photo-tall"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/photos/birthday-girl-3.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ once: true, amount: 0.2 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/photos/birthday-girl-4.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card birthday-photo-wide"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="/photos/birthday-girl-5.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img
          src="/photos/birthday-girl-6.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="/photos/birthday-girl-7.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

      <motion.div
        className="birthday-photo-card birthday-photo-wide"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <img
          src="/photos/birthday-girl-8.jpg"
          alt="Birthday Girl"
        />

        <div className="birthday-photo-overlay">
          <Heart size={20} fill="currentColor" />
        </div>
      </motion.div>

    </div>

    <motion.div
      className="birthday-gallery-bottom"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Heart size={20} fill="currentColor" />

      <p>
        Every picture has a memory.
        <br />
        Every memory has you.
      </p>

      <span>Happy Birthday, My Love ❤️</span>
    </motion.div>

  </div>
</section>
            {/*  */}


            {/*  */}


            <footer>
              <Heart fill="currentColor" size={18} />
              <span>
                Made with all my love, just for you.
              </span>
              <Heart fill="currentColor" size={18} />
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
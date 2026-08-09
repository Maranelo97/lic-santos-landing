"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <MotionConfig reducedMotion="never">
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `faq-trigger-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  id={triggerId}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="faq-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </MotionConfig>
  );
}

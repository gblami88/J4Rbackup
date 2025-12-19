import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "I've tried marketing before and wasted money. How is this different?",
      answer: "Most DIY marketing fails because there's no strategy or testing. We figure out who your customers are, what they respond to, and test until we find what works. Then we scale it."
    },
    {
      question: "How do I know this will actually work for MY business?",
      answer: "That's why we start with a free analysis. We look at your market, competitors, and where customers are searching. If we don't think we can get you results, we'll tell you upfront."
    },
    {
      question: "Marketing feels expensive. Is it worth it?",
      answer: "Compare what you'd pay us to what one new customer is worth. Most local businesses break even after 2-3 customers. Everything after that is profit. We're not an expense, we're an investment that pays for itself."
    },
    {
      question: "I get customers from referrals and word of mouth. Why do I need marketing?",
      answer: "Referrals are great, but inconsistent. Marketing gives you a steady flow of new customers you control. Plus, your competitors are marketing. When someone searches for your service, they're finding them, not you."
    },
    {
      question: "What if I spend money on ads and get nothing?",
      answer: "That's why we test and optimize. We don't blow your budget on one campaign. We test small, see what converts, then scale what's working. Plus, our guarantee: no results in 90 days = we work for free."
    },
    {
      question: "Doesn't SEO take forever to see results?",
      answer: "Depends on your market. Some businesses rank fast, others take longer. But here's the thing: the best time to start was 6 months ago. The second-best time is now. Your competitors aren't waiting."
    },
    {
      question: "How does the AI Chat Assistant help with marketing?",
      answer: "You're paying for ads to drive traffic to your site. If visitors have questions and don't get instant answers, they leave, and that ad spend is wasted. The chat assistant captures them before they click away."
    },
    {
      question: "What about the AI Phone Agent?",
      answer: "Your marketing brings people to call you. If you miss the call because you're busy, they call the next business. The phone agent makes sure your marketing dollars don't get wasted on missed opportunities."
    },
    {
      question: "How much of my time does this take?",
      answer: "Almost none. We need about 30 minutes during setup to understand your business. After that, we handle everything and just update you on results."
    },
    {
      question: "When will I see results?",
      answer: "Most businesses see more customers within 30 days. Some faster, some take longer, depending on the market. Either way, we don't stop until you're getting results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-8 sm:py-10 md:py-12" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-0">
            Still Not Sure? <span className="font-display-italic bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">FAQs:</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 sm:px-8 sm:pb-6">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

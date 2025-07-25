"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "tailwindcss";
import "@/component/style.css";

const faqQuestions = [
  {
    question: "Will this hurt our domain reputation or send us to spam?",
    answer:
      "Absolutely not. We use advanced email warm-up protocols, proper SPF/DKIM/DMARC authentication, and follow all email best practices. Our system gradually increases sending volume and monitors deliverability metrics in real-time. We also use multiple domains and IP rotation to ensure your primary domain remains protected. Our clients typically see improved deliverability rates compared to their previous campaigns.",
  },
  {
    question: "What if our ICP is niche or our TAM is small?",
    answer:
      "We specialize in niche markets! Our AI excels at hyper-targeting specific industries, company sizes, and decision-maker roles. We use advanced data enrichment and lookalike modeling to identify prospects that match your ideal customer profile, even in smaller markets. Many of our most successful campaigns have been for highly specialized B2B companies with very specific target audiences.",
  },
  {
    question: "How fast do we see meetings on the calendar?",
    answer:
      "Most clients start seeing qualified meetings within 1-2 weeks of campaign launch. However, the full system typically takes 30 days to optimize and reach peak performance. By day 60, you should have a consistent flow of 15-25 qualified appointments per month, depending on your market size and offer.",
  },
  {
    question: "What tech stack do you plug into?",
    answer:
      "We integrate seamlessly with all major CRMs including HubSpot, Salesforce, Pipedrive, and Monday.com. For email, we work with Outreach, SalesLoft, Apollo, and can also use our proprietary sending infrastructure. We connect with Google Workspace, Outlook, Calendly, and most scheduling tools. Our system is designed to work with your existing tech stack, not replace it.",
  },
  {
    question: "How is this different from hiring SDRs or buying leads?",
    answer:
      "Unlike SDRs, our AI never gets tired, doesn't need training, and works 24/7 with consistent quality. We deliver qualified meetings, not just leads - meaning prospects have already expressed interest and are ready to talk. Compared to hiring SDRs, you save $150K+ annually while getting better results. Unlike lead lists, our prospects are actively engaged and warmed up through our nurture sequences.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 60-day performance guarantee. If we don't deliver at least 10 qualified appointments in your first 60 days, we'll refund your setup fee and work for free until we hit that target. We're so confident in our system that we put our money where our mouth is. Less than 2% of our clients ever request refunds because our system consistently delivers results.",
  },
  {
    question: "Do you work with all industries?",
    answer:
      "We work with most B2B industries, but we specialize in SaaS, professional services, manufacturing, healthcare technology, and financial services. We don't work with MLM, crypto, or industries with compliance restrictions around cold outreach. During our consultation, we'll assess if your industry and offer are a good fit for our system.",
  },
  {
    question: "How do you ensure message quality and brand compliance?",
    answer:
      "Every message is reviewed by our team before going live. We create custom messaging frameworks based on your brand voice, value proposition, and compliance requirements. You have full approval rights over all messaging, and we provide regular samples for review. Our AI learns your preferred tone and style to maintain consistency across all communications.",
  },
];

const Section4 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section4-container4 ">
      {/* Enhanced Background Effects */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>

      <div className="section4-inner">
        <div className="sec1-h4">
          <h4>Frequently Asked Questions</h4>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-[10px]">
            Everything You Need to Know About Our AI Lead Generation System
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about our process, results,
            and guarantees
          </p>
        </div>

        <div className="section4-box4">
          {faqQuestions.map((item, index) => (
            <div key={index} className="section4-box-tab">
              <button onClick={() => toggle(index)} className="w-full">
                <span className="text-left">{item.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <div className="text-gray-300  leading-relaxed">
                    <p className="px-[20px] pb-[10px]">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}

        <div className="section4-box">
          <div className="sec1-h4 w-[max-content]">
            <span className="text-lg text-blue-300">Limited Time Offer</span>
          </div>
          <div className="section4-box-content">
            <div className="text-center mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

              <h2 className="mb-6 sm:px[10px]">
                Book Your 25-Minute Growth Strategy Call with Taha
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] mb-8">
                <div className="text-center my-[10px]">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-[6px] gap-[10px]">
                    <svg
                      className="w-[30px]  h-[30px] text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <h3 className="font-semibold mb-2">
                      Free Strategy Session
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 px-[10px]">
                    No sales pitch, just actionable insights for your business
                  </p>
                </div>

                <div className="text-center my-[10px]">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-[6px] gap-[10px]">
                    <svg
                      className="w-[30px]  h-[30px] text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <h3 className="font-semibold mb-2">Custom Game Plan</h3>{" "}
                  </div>
                  <p className="text-sm text-gray-400">
                    Tailored strategy for your specific industry and goals
                  </p>
                </div>

                <div className="text-center my-[10px]">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-[6px] gap-[10px]">
                    <svg
                      className="w-[30px]  h-[30px] text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>

                    <h3 className="font-semibold mb-2">ROI Projection</h3>
                  </div>
                  <p className="text-sm text-gray-400 px-[10px]">
                    See exactly how much revenue you could generate
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center my-[30px]">
              <button className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg">
                  Book My Strategy Call Now
                </div>
              </button>

              <div className="my-[25px] flex items-center justify-center  text-sm text-gray-400">
                <div className="flex items-center mx-[10px] ]">
                  <svg
                    className="w-[20px] h-[20px] text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">100% Free</span>
                </div>
                <div className="flex items-center mx-[10px] ]">
                  <svg
                    className="w-[20px] h-[20px] text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">25 Minutes</span>
                </div>
                <div className="flex items-center mx-[10px] ]">
                  <svg
                    className="w-[20px] h-[20px] text-green-400 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="">No Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-[10px]">
            Trusted by 500+ B2B Companies
          </p>
          <div className="flex flex-wrap  justify-center items-center gap-[16px]  opacity-60">
            {/* <div className="w-px h-8 bg-gray-600  my-[10px]"> */}
              <div className="text-2xl font-bold">500+ <span className="px[2px]">Happy Clients</span></div>
             
            {/* </div> */}
            {/* <div className="w-px h-8 bg-gray-600  my-[10px]"> */}
              <div className="text-2xl font-bold">$50M+ <span className="px[2px]">Revenue Generated</span></div>
              {/* <div className="text-sm"></div> */}
            {/* </div> */}
            {/* <div className="w-px h-8 bg-gray-600 my-[10px]"> */}
              <div className="text-2xl font-bold">95% <span className="px[2px]">Client Satisfaction</span></div>
              {/* <div className="text-sm"></div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

"use client";
import "tailwindcss";
import "@/component/style.css";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image"
// import Link from "next/link";
import { CheckCircle2 } from "lucide-react"; // Importing the checkmark icon

const Section1 = () => {
  return (
    <>
      <section id="services">
        {/* <section className="section1-container "> */}
        {/* Enhanced Floating Shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Morphing Shapes */}
        <div className="morphing-shapes">
          <div className="morph"></div>
          <div className="morph"></div>
        </div>

        {/* Sparkle Effects */}
        <div className="sparkle-container">
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>
        {/* content 1 */}
         <section className="main-container">
        <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="sec1-h4 mb-[50px] mx-auto w-[max-content]">
          <h4>What We Do</h4>
        </div>
        <main className="">
          <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
            <div className="text-center f-email content-box">
              <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                Agentic AI
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
                Helping the business world figure out and implement AI agents to
                reduce costs and remove errors.
              </p>

              <div className="text-left w-full px-4 md:px-0 my-[10px]">
                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  Agents & Automations
                </h2>
                <ul className="space-y-4 mb-[12px]">
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Vertical agents fine-tuned to specific domains and
                      workflows.
                    </p>
                  </li>
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Strict compliance with regulations like HIPAA & GDPR.
                    </p>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  LLM Quality Gap
                </h2>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Evaluation and improvement of the quality of LLM
                      applications.
                    </p>
                  </li>
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Usage of LLM Sanity Framework we have developed in-house.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
            </div>
            {/* Second */}
            <div className="= text-center f-email content-box">
              <h1 className="text-2xl md:text-3xl font-bold my-[20px]">
                Agentic AI
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
                Helping the business world figure out and implement AI agents to
                reduce costs and remove errors.
              </p>

              <div className="text-left w-full px-4 md:px-0 my-[10px]">
                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  Agents & Automations
                </h2>
                <ul className="space-y-4 mb-[12px]">
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Vertical agents fine-tuned to specific domains and
                      workflows.
                    </p>
                  </li>
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Strict compliance with regulations like HIPAA & GDPR.
                    </p>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  LLM Quality Gap
                </h2>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Evaluation and improvement of the quality of LLM
                      applications.
                    </p>
                  </li>
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Usage of LLM Sanity Framework we have developed in-house.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
            </div>
            {/* Two */}
            <div className="= text-center f-email content-box">
              <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                Agentic AI
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
                Helping the business world figure out and implement AI agents to
                reduce costs and remove errors.
              </p>

              <div className="text-left w-full px-4 md:px-0 my-[10px]">
                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  Agents & Automations
                </h2>
                <ul className="space-y-4 mb-[12px]">
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Vertical agents fine-tuned to specific domains and
                      workflows.
                    </p>
                  </li>
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Strict compliance with regulations like HIPAA & GDPR.
                    </p>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  LLM Quality Gap
                </h2>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Evaluation and improvement of the quality of LLM
                      applications.
                    </p>
                  </li>
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Usage of LLM Sanity Framework we have developed in-house.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
            </div>
            {/* Second */}
            <div className="= text-center f-email content-box">
              <h1 className="text-2xl md:text-3xl font-bold my-[20px]">
                Agentic AI
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
                Helping the business world figure out and implement AI agents to
                reduce costs and remove errors.
              </p>

              <div className="text-left w-full px-4 md:px-0 my-[10px]">
                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  Agents & Automations
                </h2>
                <ul className="space-y-4 mb-[12px]">
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Vertical agents fine-tuned to specific domains and
                      workflows.
                    </p>
                  </li>
                  <li className="flex items-start my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Strict compliance with regulations like HIPAA & GDPR.
                    </p>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
                  LLM Quality Gap
                </h2>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Evaluation and improvement of the quality of LLM
                      applications.
                    </p>
                  </li>
                  <li className="flex items-start  my-[10px] gap-[8px]">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">
                      Usage of LLM Sanity Framework we have developed in-house.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <Button className="cta-button mt-8">
                   Contact Us
                 </Button> */}
            </div>
          </div>
        </main>
        </div>
        </section>

        <div className="sec2-container">
          {/* Enhanced Sparkle Effects */}
          {/* <div className="sparkle-container">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
          </div> */}

         

          <div>
            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  Socializo transformed our lead generation completely. Within
                  60 days, we saw a 250% increase in qualified appointments.
                  Their AI-powered personalization is incredible - prospects
                  actually respond because the messages feel genuinely relevant
                  to their business challenges.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  The ROI has been phenomenal. We replaced our entire SDR team
                  with Socializo system and not only saved $200K annually but
                  also generated 3x more qualified leads. The automation is so
                  sophisticated that prospects think they are talking to a human
                  sales rep.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>

            <div className="sec2-box2-inner">
              <div className="sec2-box2-outer">
                <p>
                  What impressed us most was the speed of implementation.
                  Within 2 weeks, we had a fully automated lead generation
                  system running. The quality of leads improved dramatically,
                  and our sales team can now focus on closing deals instead of
                  prospecting.
                </p>
                <span>5.0 ⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section1-container sec3-container ">
          {/* Enhanced Background Effects */}
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          <div className="morphing-shapes">
            <div className="morph"></div>
          </div>
          <div className="sec1-h4">
            <h4>Meet The Founder</h4>
          </div>
          <div className="section3-box-inner">
            <div className="tex-left md:text-center">
              <h2>
                We make serious effort in finding your ICP & understanding
                their pain points and creating a copy that fully resonates with
                them and explains how your company is the best solution for them
                – All Automated
              </h2>
            </div>

            <div className="flex items-center gap-[16px] flex-wrap justify-center w-full">
              <Image src="/assets/p5.png"
                className="rounded-full object-cover"
                alt="Abdul Samad - CEO"
                width={85} height={85}
              />
              <h6 className="text-gray-400 text-[20px]">
                <span className="text-white text-lg font-semibold">
                  Abdul Samad
                </span>
                <br />
                <span className="text-sm">CEO, Socializo</span>
              </h6>
              <a
                href="https://www.linkedin.com/company/socializoco/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                style={{ width: "24px", height: "24px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "100%", height: "100%" }}
                >
                  <path d="M20.447 20.452h-3.554V14.89c0-1.327-.026-3.036-1.85-3.036-1.85 0-2.132 1.444-2.132 2.936v5.662H9.356V9h3.414v1.561h.048c.476-.9 1.637-1.848 3.368-1.848 3.598 0 4.263 2.368 4.263 5.451v6.288zM5.337 7.433a2.06 2.06 0 01-2.06-2.06 2.06 2.06 0 012.06-2.06 2.06 2.06 0 012.06 2.06 2.06 2.06 0 01-2.06 2.06zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.273V1.727C24 .774 23.206 0 22.225 0z" />
                </svg>
              </a>
            </div>

            <div className="video mt-8">
              <div className="relative w-full max-w-lg mx-auto">
                <iframe
                  className="w-full h-64 rounded-xl shadow-2xl"
                  src="https://www.youtube.com/embed/Si-Uo3FpEGo"
                  title="How I Build Revenue Machines that Produce Explosive Growth in 30 days"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-[25px] mt-12">
            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-white font-semibold text-[18px] underline decoration-solid">
                9 Years in AI
              </span>
            </div>

            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              <span className="text-white font-semibold underline decoration-solid">
                1M+ Students Taught
              </span>
            </div>

            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span className="text-white font-semibold  underline decoration-solid">
                95% 5-Star Reviews
              </span>
            </div>

            <div className="flex items-center gap-[10px] px-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <svg
                className="w-[35px] h-[35px] text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="text-white underline decoration-solid font-semibold">
                90+ Projects Completed
              </span>
            </div>
          </div>
        </div>
        <section className="section3-container3 ">
          {/* Enhanced Background Effects */}
          <div className="floating-shapes">
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

          <div className="sec1-h4 my-[20px] w-[max-content] mx-[auto]">
            <h4>Comparison</h4>
          </div>

          <div className="text-center mt-[30px] mb-[50px]">
            <h2 className="text-3xl md:text-4xl font-bold pb-[10px]">
              Why Choose Socializo Over Traditional Methods?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI-powered approach outperforms conventional lead
              generation and SDR teams
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="sec3-box-inner3">
              {/* The Socializo Method */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-[5px]">
                    The Socializo Method
                  </h3>
                  <p className="text-gray-300">
                    Advanced AI-Powered Lead Generation
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Hyper-Personalized Messaging
                        </h4>
                        <p className="text-gray-300">
                          We analyze 50+ data points to create messages that
                          directly address your prospects specific pain points
                          and business challenges, making your outreach highly
                          relevant and timely.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          AI-Powered Lead Scoring
                        </h4>
                        <p className="text-gray-300">
                          Our machine learning algorithms automatically score
                          and prioritize leads based on engagement, behavior,
                          and conversion probability, ensuring maximum ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Multi-Channel Automation
                        </h4>
                        <p className="text-gray-300">
                          Seamlessly coordinate campaigns across email,
                          LinkedIn, phone, and SMS with intelligent timing and
                          frequency optimization to maximize response rates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Real-Time Performance Analytics
                        </h4>
                        <p className="text-gray-300">
                          Get detailed insights into campaign performance, lead
                          quality, and ROI with our advanced analytics dashboard
                          that updates in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Guaranteed Results
                        </h4>
                        <p className="text-gray-300">
                          We guarantee qualified appointments within 60 days or
                          your money back. Our proven system delivers
                          consistent, predictable results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sec3-box-outer3-border">
                    <div className="text-green-400 flex items-center gap-[10px]">
                      <CheckIcon className="w-[20px] h-[20px] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          24/7 Automated Operations
                        </h4>
                        <p className="text-gray-300">
                          Our AI works around the clock, nurturing leads,
                          scheduling appointments, and following up with
                          prospects while you focus on closing deals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl border border-green-400/30">
                  <div className="text-center py-[10px]">
                    <div className="text-3xl font-bold text-green-400 mb-[5px]">
                      300% Average ROI
                    </div>
                    <p className="text-gray-300">Within the first 90 days</p>
                  </div>
                </div>
              </div>
              {/* Traditional Methods */}
              <div className="sec3-box-outer3">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-[5px]">
                    Traditional SDR & Lead Gen Agencies
                  </h3>
                  <p className="text-gray-300">Outdated Manual Processes</p>
                </div>

                <div className="space-y-6">
                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Generic Mass Messaging
                        </h4>
                        <p className="text-gray-300">
                          Send the same templated messages to everyone,
                          resulting in low response rates and poor engagement
                          because prospects feel like just another number.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Manual Lead Qualification
                        </h4>
                        <p className="text-gray-300">
                          Rely on human judgment and basic criteria to qualify
                          leads, often missing high-value prospects or wasting
                          time on unqualified leads.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Limited Channel Reach
                        </h4>
                        <p className="text-gray-300">
                          Focus primarily on email or LinkedIn, missing
                          opportunities to connect with prospects through their
                          preferred communication channels.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Basic Reporting & Analytics
                        </h4>
                        <p className="text-gray-300">
                          Provide simple metrics like open rates and response
                          rates without deep insights into lead quality,
                          conversion patterns, or ROI optimization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          No Performance Guarantees
                        </h4>
                        <p className="text-gray-300">
                          Charge monthly fees regardless of results, with no
                          accountability for lead quality or conversion rates,
                          leaving you with unpredictable outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="sec3-box-outer3-border">
                    <div className="text-red-400 flex items-center gap-[10px]">
                      <svg
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h4 className="font-semibold mb-[5px]">
                          Business Hours Only
                        </h4>
                        <p className="text-gray-300">
                          Limited to working hours and human availability,
                          missing opportunities to engage prospects who are
                          active outside traditional business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-xl border border-red-400/30">
                  <div className="text-center py-[10px]">
                    <div className="text-3xl font-bold text-red-400 mb-[5px]">
                      50% Higher Costs
                    </div>
                    <p className="text-gray-300">With unpredictable results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="text-center my-[20px] md:w-auto  mx-auto">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-[20px] border border-blue-400/30">
                <h3 className="text-2xl font-bold my-[10px]">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-gray-300 my-[10px] max-w-2xl mx-auto">
                  Join hundreds of companies who have already made the switch to
                  AI-powered lead generation and are seeing 300% better results.
                </p>
                <button className="cta-button my-[10px] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Section1;

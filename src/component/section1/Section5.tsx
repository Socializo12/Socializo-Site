// "use client";
// import "tailwindcss";
// import "@/component/style.css";
// import type React from "react";
// // import Link from "next/link";
// // import { CheckCircle2 } from "lucide-react"; // Importing the checkmark icon

// // Basic cn utility function
// // function cn(...inputs: (string | boolean | undefined | null)[]) {
// //   return inputs.filter(Boolean).join(" ");
// // }

// // Custom Button Component
// // interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// //   variant?: "default" | "outline"; // Add more variants if needed
// // }

// // function Button({
// //   className,
// //   variant = "default",
// //   children,
// //   ...props
// // }: ButtonProps) {
// //   const baseStyles =
// //     "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

// //   return (
// //     <button
// //       className={cn(
// //         baseStyles,
// //         variant === "default" && "bg-green-600 text-white hover:bg-green-700", // Custom styles for default button
// //         variant === "outline" &&
// //           "bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white", // Custom styles for outline button
// //         className
// //       )}
// //       {...props}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // Main Page Component
// export default function AgenticAIPage() {
//   return (
//     <section className="main-container">
//       {/* Enhanced Background Effects */}
//       <div className="floating-shapes">
//         <div className="shape"></div>
//         <div className="shape"></div>
//         <div className="shape"></div>
//         <div className="shape"></div>
//         <div className="shape"></div>
//       </div>

//       <div className="morphing-shapes">
//         <div className="morph"></div>
//         <div className="morph"></div>
//       </div>

//       <div className="sparkle-container">
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//         <div className="sparkle"></div>
//       </div>
//       {/*  */}
//       {/* <div className="min-h-screen bg-black text-white flex flex-col">
//         <div className="sec1-h4 mb-[50px] mx-auto w-[max-content]">
//           <h4>What We Do</h4>
//         </div>
//         <main className="">
//           <div className="main-container-grid mx-auto gap-[20px] p-8 md:p-12">
//             <div className="text-center content-box">
//               <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                 Agentic AI
//               </h2>
//               <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
//                 Helping the business world figure out and implement AI agents to
//                 reduce costs and remove errors.
//               </p>

//               <div className="text-left w-full px-4 md:px-0 my-[10px]">
//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   Agents & Automations
//                 </h2>
//                 <ul className="space-y-4 mb-[12px]">
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Vertical agents fine-tuned to specific domains and
//                       workflows.
//                     </p>
//                   </li>
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Strict compliance with regulations like HIPAA & GDPR.
//                     </p>
//                   </li>
//                 </ul>

//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   LLM Quality Gap
//                 </h2>
//                 <ul className="space-y-4 mb-12">
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Evaluation and improvement of the quality of LLM
//                       applications.
//                     </p>
//                   </li>
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Usage of LLM Sanity Framework we have developed in-house.
//                     </p>
//                   </li>
//                 </ul>
//               </div>

          
//             </div>
           
//             <div className="= text-center content-box">
//               <h1 className="text-2xl md:text-3xl font-bold my-[20px]">
//                 Agentic AI
//               </h1>
//               <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
//                 Helping the business world figure out and implement AI agents to
//                 reduce costs and remove errors.
//               </p>

//               <div className="text-left w-full px-4 md:px-0 my-[10px]">
//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   Agents & Automations
//                 </h2>
//                 <ul className="space-y-4 mb-[12px]">
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Vertical agents fine-tuned to specific domains and
//                       workflows.
//                     </p>
//                   </li>
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Strict compliance with regulations like HIPAA & GDPR.
//                     </p>
//                   </li>
//                 </ul>

//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   LLM Quality Gap
//                 </h2>
//                 <ul className="space-y-4 mb-12">
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Evaluation and improvement of the quality of LLM
//                       applications.
//                     </p>
//                   </li>
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Usage of LLM Sanity Framework we have developed in-house.
//                     </p>
//                   </li>
//                 </ul>
//               </div>

         
//             </div>
       
//             <div className="= text-center content-box">
//               <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                 Agentic AI
//               </h2>
//               <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
//                 Helping the business world figure out and implement AI agents to
//                 reduce costs and remove errors.
//               </p>

//               <div className="text-left w-full px-4 md:px-0 my-[10px]">
//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   Agents & Automations
//                 </h2>
//                 <ul className="space-y-4 mb-[12px]">
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Vertical agents fine-tuned to specific domains and
//                       workflows.
//                     </p>
//                   </li>
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Strict compliance with regulations like HIPAA & GDPR.
//                     </p>
//                   </li>
//                 </ul>

//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   LLM Quality Gap
//                 </h2>
//                 <ul className="space-y-4 mb-12">
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Evaluation and improvement of the quality of LLM
//                       applications.
//                     </p>
//                   </li>
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Usage of LLM Sanity Framework we have developed in-house.
//                     </p>
//                   </li>
//                 </ul>
//               </div>

        
//             </div>
           
//             <div className="= text-center content-box">
//               <h1 className="text-2xl md:text-3xl font-bold my-[20px]">
//                 Agentic AI
//               </h1>
//               <p className="text-lg md:text-xl text-zinc-400 mb-[12px]">
//                 Helping the business world figure out and implement AI agents to
//                 reduce costs and remove errors.
//               </p>

//               <div className="text-left w-full px-4 md:px-0 my-[10px]">
//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   Agents & Automations
//                 </h2>
//                 <ul className="space-y-4 mb-[12px]">
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Vertical agents fine-tuned to specific domains and
//                       workflows.
//                     </p>
//                   </li>
//                   <li className="flex items-start my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Strict compliance with regulations like HIPAA & GDPR.
//                     </p>
//                   </li>
//                 </ul>

//                 <h2 className="text-2xl md:text-3xl font-bold my-[20px]">
//                   LLM Quality Gap
//                 </h2>
//                 <ul className="space-y-4 mb-12">
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Evaluation and improvement of the quality of LLM
//                       applications.
//                     </p>
//                   </li>
//                   <li className="flex items-start  my-[10px] gap-[8px]">
//                     <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                     <p className="text-lg text-zinc-300">
//                       Usage of LLM Sanity Framework we have developed in-house.
//                     </p>
//                   </li>
//                 </ul>
//               </div>

           
//             </div>
//           </div>
//         </main>
//       </div> */}
//     </section>
//   );
// }

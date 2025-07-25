"use client";
const TextEffect = () => {
  const texts = [
    "Cold Email Campaigns That Convert 🔥",
    "AI-Driven Prospecting That Works 🤖",
    "B2B Systems Built for Growth 🚀",
    "Let Us Do the Outreach for You 💼",
  ];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap mt-4 px-4">
      <div className="inline-block animate-marquee">
        {texts.map((text, i) => (
          <span
            key={i}
            className="inline-block text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-blue-600 mx-8"
          >
            {text}
          </span>
        ))}
        {/* Duplicate the texts once more for seamless loop */}
        {texts.map((text, i) => (
          <span
            key={`dup-${i}`}
            className="inline-block text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-blue-600 mx-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextEffect;

"use client";
const shuffleWords = (text) => {
  let words = text.split(" ");
  // Simple shuffle algorithm
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  return words.join(" ");
};

export const BackgroundText = ({ text, repeats, color, opacity }) => {
  return (
    <div className="absolute w-full top-0">
      {Array.from({ length: repeats }, (_, i) => (
        <p
          key={i}
          className={`${color} ${opacity} text-5xl font-bold select-none pointer-events-none`}
          style={{ wordSpacing: "-.15em", lineHeight: "0.8" }}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

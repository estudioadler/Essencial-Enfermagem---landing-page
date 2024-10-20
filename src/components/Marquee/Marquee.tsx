"use client";

export const Marquee = () => {
  const text = [
    "Disciplina",
    "Dedicação",
    "Persistência",
    "Foco",
    "Motivação",
    "Disposição",
  ];
  return (
    <div className="relative flex overflow-x-hidden space-x-4 text-white bg-blue-950">
      <div className="py-6 animate-infinite-scroll space-x-6 flex items-center">
        {text.map((item) => (
          <div key={item} className="flex items-center space-x-6">
            <span className="text-xl uppercase">{item}</span>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="py-6 animate-infinite-scroll space-x-6 flex items-center">
        {text.map((item) => (
          <div key={item} className="flex items-center space-x-6">
            <span className="text-xl uppercase">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

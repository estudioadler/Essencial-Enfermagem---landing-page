
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 bg-blue-950 flex items-center justify-center transition-transform duration-700 ease-in-out ${
        !isLoading ? '-translate-y-full' : ''
      } z-50`}
    >
      <div className="text-white text-4xl font-bold">
        <Image src="/symb-logo.svg" alt="logotipo essencial enfermagem" width={32} height={32} />
      </div>
    </div>
  );
};

export default Preloader;
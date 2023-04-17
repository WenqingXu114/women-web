import { useState, useEffect } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollY / documentHeight) * 100;
    setProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
};

export default useScrollProgress;

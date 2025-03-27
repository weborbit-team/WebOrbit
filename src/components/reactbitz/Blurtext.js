import { useRef, useEffect, useState } from 'react';

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'cubic-bezier(0.165, 0.84, 0.44, 1)', // CSS equivalent of easeOutCubic
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [completedAnimations, setCompletedAnimations] = useState(0);

  // Default animations based on direction
  const defaultFrom = {
    filter: 'blur(10px)',
    opacity: 0,
    transform: direction === 'top' ? 'translateY(-50px)' : 'translateY(50px)',
  };

  const defaultTo = {
    filter: 'blur(0px)',
    opacity: 1,
    transform: 'translateY(0)',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const handleAnimationEnd = () => {
    const newCount = completedAnimations + 1;
    setCompletedAnimations(newCount);
    
    if (newCount === elements.length && onAnimationComplete) {
      onAnimationComplete();
    }
  };

  const getStyle = (index) => {
    const baseStyle = {
      transition: `all ${delay}ms ${easing}`,
      transitionDelay: `${index * delay}ms`,
      willChange: 'transform, filter, opacity',
      display: 'inline-block',
    };

    return {
      ...baseStyle,
      ...(inView ? (animationTo || defaultTo) : (animationFrom || defaultFrom)),
    };
  };

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((element, index) => (
        <span
          key={index}
          style={getStyle(index)}
          className="inline-block"
          onTransitionEnd={handleAnimationEnd}
        >
          {element === ' ' ? '\u00A0' : element}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
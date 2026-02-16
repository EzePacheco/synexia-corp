import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  showSlogan?: boolean;
}

export function Logo({ 
  className = '', 
  size = 40, 
  showText = true,
  showSlogan = false 
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Simple geometric S shape */}
        <motion.path
          d="M25 30 L50 30 L50 45 L25 45 L25 70 L75 70 L75 55 L50 55 L50 70"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        {/* Simple outer frame - minimal square with rounded corners */}
        <motion.rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ color: '#0A1628' }}
          className="dark:hidden"
        />
        <motion.rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ color: '#FFFFFF' }}
          className="hidden dark:block"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-synexia-navy dark:text-white">
            SYNEXIA
          </span>
          {showSlogan && (
            <span className="text-xs text-synexia-gray dark:text-synexia-cyan/70 tracking-wide">
              Integrando visiones, fortaleciendo vínculos
            </span>
          )}
        </div>
      )}
    </div>
  );
}

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
        {/* Background circle for contrast in dark mode */}
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>
          <linearGradient id="hexGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* Outer orbital ring */}
        <motion.ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="20"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1.5"
          transform="rotate(-30 50 50)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Hexagon structure */}
        {/* Bottom face */}
        <motion.path
          d="M50 75 L75 60 L75 35 L50 50 Z"
          fill="#0A1628"
          fillOpacity="0.1"
          className="dark:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.path
          d="M50 75 L75 60 L75 35 L50 50 Z"
          fill="#00D4FF"
          fillOpacity="0.2"
          className="hidden dark:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Right face */}
        <motion.path
          d="M50 75 L25 60 L25 35 L50 50 Z"
          fill="#0A1628"
          fillOpacity="0.2"
          className="dark:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M50 75 L25 60 L25 35 L50 50 Z"
          fill="#00D4FF"
          fillOpacity="0.3"
          className="hidden dark:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Top face */}
        <motion.path
          d="M50 25 L75 40 L50 55 L25 40 Z"
          fill="#0A1628"
          fillOpacity="0.3"
          className="dark:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        <motion.path
          d="M50 25 L75 40 L50 55 L25 40 Z"
          fill="#00D4FF"
          fillOpacity="0.4"
          className="hidden dark:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {/* Outer hexagon edges */}
        <motion.path
          d="M50 20 L78 36 L78 64 L50 80 L22 64 L22 36 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ color: '#00D4FF' }}
        />

        {/* Inner hexagon structure */}
        <motion.path
          d="M50 35 L65 43 L65 60 L50 68 L35 60 L35 43 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          style={{ color: '#0A1628' }}
          className="dark:hidden"
        />
        <motion.path
          d="M50 35 L65 43 L65 60 L50 68 L35 60 L35 43 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          style={{ color: '#FFFFFF' }}
          className="hidden dark:block"
        />

        {/* Connection lines */}
        <motion.path
          d="M50 35 L50 20 M65 43 L78 36 M65 60 L78 64 M50 68 L50 80 M35 60 L22 64 M35 43 L22 36"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
          style={{ color: '#0A1628' }}
          className="dark:hidden"
        />
        <motion.path
          d="M50 35 L50 20 M65 43 L78 36 M65 60 L78 64 M50 68 L50 80 M35 60 L22 64 M35 43 L22 36"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
          style={{ color: '#FFFFFF' }}
          className="hidden dark:block"
        />

        {/* Corner nodes */}
        {[
          { cx: 50, cy: 20 },
          { cx: 78, cy: 36 },
          { cx: 78, cy: 64 },
          { cx: 50, cy: 80 },
          { cx: 22, cy: 64 },
          { cx: 22, cy: 36 },
        ].map((node, index) => (
          <motion.circle
            key={index}
            cx={node.cx}
            cy={node.cy}
            r="3"
            fill="#00D4FF"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
          />
        ))}

        {/* Inner nodes */}
        {[
          { cx: 50, cy: 35 },
          { cx: 65, cy: 43 },
          { cx: 65, cy: 60 },
          { cx: 50, cy: 68 },
          { cx: 35, cy: 60 },
          { cx: 35, cy: 43 },
        ].map((node, index) => (
          <motion.circle
            key={`inner-${index}`}
            cx={node.cx}
            cy={node.cy}
            r="2.5"
            fill="currentColor"
            className="dark:hidden"
            style={{ color: '#0A1628' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.08 }}
          />
        ))}
        {[
          { cx: 50, cy: 35 },
          { cx: 65, cy: 43 },
          { cx: 65, cy: 60 },
          { cx: 50, cy: 68 },
          { cx: 35, cy: 60 },
          { cx: 35, cy: 43 },
        ].map((node, index) => (
          <motion.circle
            key={`inner-dark-${index}`}
            cx={node.cx}
            cy={node.cy}
            r="2.5"
            fill="currentColor"
            className="hidden dark:block"
            style={{ color: '#FFFFFF' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.08 }}
          />
        ))}

        {/* Center node */}
        <motion.circle
          cx="50"
          cy="51"
          r="4"
          fill="#00D4FF"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
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

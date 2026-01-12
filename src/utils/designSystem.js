// Design System Utilities
// Helper functions and constants for consistent design system usage

// Color palette access
export const colors = {
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',
  info: 'var(--color-info)',
  
  // Neutral scale
  neutral: {
    50: 'var(--color-neutral-50)',
    100: 'var(--color-neutral-100)',
    200: 'var(--color-neutral-200)',
    300: 'var(--color-neutral-300)',
    400: 'var(--color-neutral-400)',
    500: 'var(--color-neutral-500)',
    600: 'var(--color-neutral-600)',
    700: 'var(--color-neutral-700)',
    800: 'var(--color-neutral-800)',
    900: 'var(--color-neutral-900)',
  },
  
  // Semantic colors
  background: 'var(--color-background)',
  backgroundAlt: 'var(--color-background-alt)',
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  white: 'var(--color-white)',
  dark: 'var(--color-dark)',
};

// Typography scale
export const typography = {
  fontFamily: {
    base: 'var(--font-family-base)',
    code: 'var(--font-family-code)',
  },
  
  fontSize: {
    xs: 'var(--font-size-xs)',
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-md)',
    lg: 'var(--font-size-lg)',
    xl: 'var(--font-size-xl)',
    '2xl': 'var(--font-size-2xl)',
    '3xl': 'var(--font-size-3xl)',
    '4xl': 'var(--font-size-4xl)',
  },
  
  fontWeight: {
    normal: 'var(--font-weight-normal)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
    bold: 'var(--font-weight-bold)',
  },
};

// Spacing scale
export const spacing = {
  0: 'var(--spacing-0)',
  1: 'var(--spacing-1)',
  2: 'var(--spacing-2)',
  3: 'var(--spacing-3)',
  4: 'var(--spacing-4)',
  5: 'var(--spacing-5)',
  6: 'var(--spacing-6)',
  8: 'var(--spacing-8)',
  10: 'var(--spacing-10)',
  12: 'var(--spacing-12)',
  16: 'var(--spacing-16)',
  20: 'var(--spacing-20)',
  24: 'var(--spacing-24)',
  32: 'var(--spacing-32)',
};

// Shadows
export const shadows = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
};

// Border radius
export const borderRadius = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  full: 'var(--radius-full)',
};

// Transitions
export const transitions = {
  fast: 'var(--transition-fast)',
  base: 'var(--transition-base)',
  slow: 'var(--transition-slow)',
};

// Breakpoints (for JavaScript usage)
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

// Helper functions
export const getSpacing = (size) => spacing[size] || spacing[4];
export const getColor = (colorPath) => {
  const keys = colorPath.split('.');
  let result = colors;
  for (const key of keys) {
    result = result[key];
    if (!result) return colors.primary;
  }
  return result;
};

// Bootstrap class generators
export const generateBootstrapClasses = {
  // Spacing utilities
  padding: (size, direction = '') => {
    const dir = direction ? `-${direction}` : '';
    return `p${dir}-${size}`;
  },
  
  margin: (size, direction = '') => {
    const dir = direction ? `-${direction}` : '';
    return `m${dir}-${size}`;
  },
  
  // Text utilities
  textColor: (color) => `text-${color}`,
  textSize: (size) => `fs-${size}`,
  textWeight: (weight) => `fw-${weight}`,
  
  // Background utilities
  background: (color) => `bg-${color}`,
  
  // Display utilities
  display: (type) => `d-${type}`,
  
  // Flex utilities
  flex: (property, value) => `${property}-${value}`,
  
  // Grid utilities
  col: (size, breakpoint = '') => {
    const bp = breakpoint ? `-${breakpoint}` : '';
    return `col${bp}-${size}`;
  },
};

// Component style helpers
export const componentStyles = {
  card: {
    base: 'card shadow-sm border-0',
    hover: 'card shadow-sm border-0 shadow-hover',
    body: 'card-body',
    header: 'card-header bg-transparent border-0',
    footer: 'card-footer bg-transparent border-0',
  },
  
  button: {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    outline: 'btn btn-outline-primary',
    link: 'btn btn-link',
    lg: 'btn btn-lg',
    sm: 'btn btn-sm',
  },
  
  navbar: {
    base: 'navbar navbar-expand-lg navbar-light bg-white fixed-top',
    brand: 'navbar-brand fw-bold',
    nav: 'navbar-nav ms-auto',
    link: 'nav-link',
    toggle: 'navbar-toggler',
  },
  
  form: {
    group: 'mb-3',
    label: 'form-label fw-medium',
    control: 'form-control',
    text: 'form-text text-muted',
    feedback: 'invalid-feedback',
  },
};

// Animation helpers
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

export default {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  transitions,
  breakpoints,
  getSpacing,
  getColor,
  generateBootstrapClasses,
  componentStyles,
  animations,
};
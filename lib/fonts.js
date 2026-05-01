import { Manrope, Inter } from 'next/font/google';

export const displayFont = Manrope({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export function getFontClasses() {
  return `${displayFont.variable} ${bodyFont.variable}`;
}

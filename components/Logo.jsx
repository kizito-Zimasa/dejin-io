import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ variant = 'dark', size = 'md' }) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  };

  const logoPath = variant === 'white'
    ? '/logos/dejin-horizontal-white.svg'
    : '/logos/dejin-horizontal.svg';

  const { width, height } = sizeMap[size];

  return (
    <Link href="/" className="flex items-center">
      <img
        src={logoPath}
        alt="Dejin"
        style={{ width: 'auto', height: '32px' }}
        className="h-8"
      />
    </Link>
  );
}

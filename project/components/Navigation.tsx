'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/birthday', label: 'Birthday' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center space-x-8 py-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors hover:text-foreground",
                  pathname === href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
                {pathname === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-foreground bottom-0"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
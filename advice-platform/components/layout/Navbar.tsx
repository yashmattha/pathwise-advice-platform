'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuthStore } from '@/store/useAuthStore';

const navLinks = [
  { href: '/categories', label: 'Categories' },
  { href: '/experts', label: 'Experts' },
  { href: '/blog', label: 'Blog' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-border bg-bg"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl font-semibold shrink-0">
          Pathwise
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm muted">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" className="p-2 rounded-lg border border-border hidden sm:inline-flex" aria-label="Search">
            <Search className="w-[18px] h-[18px]" />
          </Link>
          <ThemeToggle />
          {user ? (
            <>
              <Link href="/dashboard" className="hidden sm:flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-border text-sm">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold bg-primary text-primary-ink">
                  {user.name[0]}
                </span>
                {user.name.split(' ')[0]}
              </Link>
              <Link href="/ask" className="hidden sm:inline-block px-4 py-2 text-sm rounded-lg font-medium bg-primary text-primary-ink">
                Get Advice
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden sm:inline-block px-3 py-2 text-sm rounded-lg border border-border">
                Log in
              </Link>
              <Link href="/ask" className="px-4 py-2 text-sm rounded-lg font-medium bg-primary text-primary-ink">
                Get Advice
              </Link>
            </>
          )}
          <button className="md:hidden p-2 rounded-lg border border-border" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-5 py-3 flex flex-col gap-3 text-sm">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/search" onClick={() => setOpen(false)}>Search</Link>
          {user ? (
            <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
          ) : (
            <Link href="/login" onClick={() => setOpen(false)}>Log in</Link>
          )}
        </div>
      )}
    </header>
  );
}

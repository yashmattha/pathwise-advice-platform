'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

const items = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ask', label: 'Ask Advice' },
  { href: '/dashboard/questions', label: 'My Questions' },
  { href: '/dashboard/saved', label: 'Saved' },
  { href: '/dashboard/history', label: 'History' },
  { href: '/dashboard/consultations', label: 'Consultations' },
  { href: '/dashboard/profile', label: 'Profile' },
  { href: '/dashboard/settings', label: 'Settings' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuthStore();

  return (
    <div className="flex flex-col gap-1">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className={`px-3 py-2 rounded-lg text-sm ${
            pathname === i.href ? 'font-medium border border-border bg-bg' : 'muted'
          }`}
        >
          {i.label}
        </Link>
      ))}
      <button
        onClick={() => {
          logout();
          router.push('/');
        }}
        className="px-3 py-2 rounded-lg text-sm text-left muted mt-2"
      >
        Logout
      </button>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Zustand persist rehydrates asynchronously; give it a tick before redirecting.
    const t = setTimeout(() => {
      if (!user) router.replace('/login');
      setChecked(true);
    }, 50);
    return () => clearTimeout(t);
  }, [user, router]);

  if (!checked || !user) {
    return <div className="max-w-6xl mx-auto px-5 py-12 muted text-sm">Loading your dashboard…</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-[200px,1fr] gap-8">
      <aside className="hidden md:block">
        <DashboardSidebar />
      </aside>
      <div>
        <details className="md:hidden mb-5 card p-3">
          <summary className="text-sm font-medium cursor-pointer">Dashboard menu</summary>
          <div className="mt-2">
            <DashboardSidebar />
          </div>
        </details>
        {children}
      </div>
    </div>
  );
}

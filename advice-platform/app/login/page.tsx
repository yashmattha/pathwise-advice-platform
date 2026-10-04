'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { mockLogin } from '@/services/userService';
import { useAuthStore } from '@/store/useAuthStore';
import { useToast } from '@/components/ui/Toast';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const { show } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent, googleFlow = false) => {
    e.preventDefault();
    setLoading(true);
    const user = await mockLogin(googleFlow ? 'you@gmail.com' : email || 'you@example.com');
    login(user);
    show('Logged in');
    router.push('/dashboard');
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-16">
      <h1 className="font-serif text-3xl mb-2">Welcome back</h1>
      <p className="muted mb-7 text-sm">Log in to save advice and track your questions.</p>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <Input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" required minLength={4} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label className="flex items-center gap-2 text-sm muted">
          <input type="checkbox" defaultChecked /> Remember me
        </label>
        <Button type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Log in'}</Button>
        <Button type="button" variant="ghost" onClick={(e) => submit(e as any, true)}>
          Continue with Google
        </Button>
      </form>
      <div className="flex justify-between text-sm muted mt-4">
        <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
        <Link href="/signup" className="hover:underline">Create account</Link>
      </div>
    </div>
  );
}

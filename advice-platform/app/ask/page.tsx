import { AdviceForm } from '@/components/advice/AdviceForm';

export default function AskPage() {
  return (
    <div className="max-w-xl mx-auto px-5 py-12">
      <h1 className="font-serif text-3xl mb-2">Ask for advice</h1>
      <p className="muted mb-7">Tell us what you're dealing with — we'll put together practical guidance.</p>
      <AdviceForm />
    </div>
  );
}

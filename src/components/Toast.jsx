import { Check } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast ${visible ? 'is-visible' : ''}`} role="status" aria-live="polite">
      <Check size={16} strokeWidth={2} />
      <span>{message}</span>
    </div>
  );
}

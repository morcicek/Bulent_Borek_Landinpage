type SocialProofProps = {
  href?: string;
  className?: string;
};

const content = (
  <>
    <span className="font-bold text-orange-light" aria-hidden="true">★</span>
    <span><strong className="font-bold text-white">4,6 Google Puanı</strong> <span className="mx-1 text-white/30">·</span> 141 Yorum</span>
  </>
);

export function SocialProof({ href, className = "" }: SocialProofProps) {
  const styles = `inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80 ${className}`;

  if (href) {
    return <a href={href} className={`${styles} focus-ring`} target="_blank" rel="noopener noreferrer" aria-label="Google değerlendirmelerini görüntüle">{content}</a>;
  }

  return <div className={styles} aria-label="4,6 Google puanı, 141 yorum">{content}</div>;
}

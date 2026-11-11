import { profile } from "@/data/content";
export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>{profile.name}</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}

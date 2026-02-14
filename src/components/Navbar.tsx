"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Plan", href: "/plan" },
    { name: "Contact", href: "/contact"},
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* ロゴ部分 */}
        <Link href="/" className="text-xl font-bold text-white tracking-tighter flex-shrink-0">
          Reframe <span className="text-blue-600">/</span>
        </Link>

        {/* ナビゲーションリンク */}
        <div className="flex gap-4 sm:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors py-2 ${
                pathname === link.href
                  ? "text-blue-400" // 現在のページの時は青くする
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
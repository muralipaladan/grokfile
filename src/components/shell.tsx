import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, FileDown, Home, Search, Bookmark, PenLine } from "lucide-react";
import { Emblem } from "./emblem";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "ഹോം", icon: Home },
  { to: "/study", label: "പഠനം", icon: BookOpen },
  { to: "/quiz", label: "ക്വിസ്", icon: PenLine },
  { to: "/search", label: "തിരയുക", icon: Search },
  { to: "/bookmarks", label: "സൂക്ഷിപ്പ്", icon: Bookmark },
  { to: "/print", label: "PDF", icon: FileDown },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="paper-grain min-h-dvh text-ink">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm print:hidden">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3 text-forest">
            <Emblem className="size-10 shrink-0" />
            <span className="min-w-0">
              <span className="block font-display text-[10px] font-semibold tracking-[0.22em] text-sage uppercase">
                Government of Kerala
              </span>
              <span className="block truncate font-display text-lg font-semibold leading-tight text-forest">
                KBM Padam
              </span>
              <span className="block truncate text-xs text-ink-muted">
                കെബിഎം പഠനം · Department Test Q-Bank
              </span>
            </span>
          </Link>
        </div>
        <nav className="gazette-rule bg-forest text-primary-foreground">
          <div className="mx-auto flex max-w-5xl gap-0.5 overflow-x-auto px-2 sm:px-4">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex h-12 min-w-11 shrink-0 items-center gap-1.5 px-3 text-sm font-medium",
                    active
                      ? "bg-forest-deep text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-forest-mid hover:text-primary-foreground",
                  )}
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      <footer className="border-t border-border bg-card/70 print:hidden">
        <div className="mx-auto max-w-5xl px-4 py-5 text-center text-xs leading-relaxed text-ink-muted sm:px-6">
          Kerala Budget Manual · Third Edition (First Reprint) · corrections up to 30 June 1982 ·
          Finance Department. Exam questions in English; explanations in simple Malayalam.
        </div>
      </footer>
    </div>
  );
}

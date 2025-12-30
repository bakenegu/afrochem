"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const base =
    "text-sm font-medium transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const active = isActive
    ? "text-orange-700 underline decoration-2 decoration-orange-500 underline-offset-8"
    : "text-slate-700";

  return (
    <Link href={href} className={`${base} ${active}`}>
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scrolled
    ? "border-b border-slate-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur transition-colors"
    : "border-b border-slate-200 bg-white";

  return (
    <header className={`sticky top-0 z-50 ${headerClass}`}>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 shrink-0 flex-none min-w-[220px]"
        >
          <div className="relative h-20 w-[380px] md:h-24 md:w-[440px] shrink-0 flex-none">
            <Image
              src="/afrologo.png"
              alt="AFROCHEM logo"
              fill
              sizes="320px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="bg-orange-600 text-white hover:bg-orange-700 !bg-orange-600 !text-white hover:!bg-orange-700"
          >
            <Link href="mailto:afrochem2019@gmail.com">Request a Quote</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-orange-200 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col gap-1">
                  <span className="block h-0.5 w-5 rounded-full bg-current" />
                  <span className="block h-0.5 w-4 rounded-full bg-current" />
                  <span className="block h-0.5 w-3.5 rounded-full bg-current" />
                </div>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold text-slate-900">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavLink href={link.href} label={link.label} />
                  </SheetClose>
                ))}
              </div>
              <div className="mt-8">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-orange-600 text-white hover:bg-orange-700 !bg-orange-600 !text-white hover:!bg-orange-700"
                  >
                    <Link href="mailto:afrochem2019@gmail.com">Request a Quote</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Minimal Sheet primitives (shadcn-style) scoped to this file to avoid extra files.
type SheetContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheetContext(component: string): SheetContextValue {
  const ctx = React.useContext(SheetContext);
  if (!ctx) {
    throw new Error(`${component} must be used within <Sheet>`);
  }
  return ctx;
}

type SheetProps = {
  children: React.ReactNode;
};

function Sheet({ children }: SheetProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

type SheetTriggerProps = {
  asChild?: boolean;
  children: React.ReactNode;
};

function SheetTrigger({ asChild, children }: SheetTriggerProps) {
  const { setOpen } = useSheetContext("SheetTrigger");
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ...child.props,
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        (child.props as any)?.onClick?.(event);
        setOpen(true);
      },
    });
  }
  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

type SheetContentProps = {
  children: React.ReactNode;
  side?: "left" | "right";
};

function SheetContent({ children, side = "right" }: SheetContentProps) {
  const { open, setOpen } = useSheetContext("SheetContent");
  if (!open) return null;

  const sideClass = side === "left" ? "left-0" : "right-0";

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <div
        className={`absolute top-0 ${sideClass} flex h-full w-80 max-w-[80%] flex-col gap-4 bg-white p-6 shadow-2xl transition-transform`}
      >
        {children}
      </div>
    </div>
  );
}

type SheetHeaderProps = {
  children: React.ReactNode;
};

function SheetHeader({ children }: SheetHeaderProps) {
  return <div className="flex items-center justify-between">{children}</div>;
}

type SheetTitleProps = {
  children: React.ReactNode;
  className?: string;
};

function SheetTitle({ children, className = "" }: SheetTitleProps) {
  return <div className={className}>{children}</div>;
}

type SheetCloseProps = {
  asChild?: boolean;
  children: React.ReactNode;
};

function SheetClose({ asChild, children }: SheetCloseProps) {
  const { setOpen } = useSheetContext("SheetClose");
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ...child.props,
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        (child.props as any)?.onClick?.(event);
        setOpen(false);
      },
    });
  }
  return (
    <button type="button" onClick={() => setOpen(false)}>
      {children}
    </button>
  );
}

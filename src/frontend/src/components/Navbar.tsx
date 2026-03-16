import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  ChevronDown,
  Home,
  LogIn,
  LogOut,
  Mic2,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useAuthFlow } from "../hooks/useAuthFlow";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

type NavPage = "dashboard" | "learning" | "interview" | "hr" | "admin";

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  showFullNav?: boolean;
}

const navItems = [
  { id: "dashboard" as NavPage, label: "Dashboard", icon: Home },
  { id: "learning" as NavPage, label: "Learning Path", icon: BookOpen },
  { id: "interview" as NavPage, label: "Interview Prep", icon: Users },
  { id: "hr" as NavPage, label: "HR Round", icon: Mic2 },
];

export default function Navbar({
  currentPage,
  onNavigate,
  showFullNav = true,
}: NavbarProps) {
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();
  const { isAdmin, profile } = useAuthFlow();
  const isLoggedIn = !!identity;

  const allNavItems = [
    ...navItems,
    ...(isAdmin
      ? [{ id: "admin" as NavPage, label: "Admin", icon: Shield }]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-sidebar border-b border-sidebar-border backdrop-blur-sm">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.62 0.22 270 / 0.08) 0%, transparent 50%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between relative z-10">
        <button
          type="button"
          onClick={() => onNavigate("dashboard")}
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/zyntho-logo-transparent.dim_64x64.png"
            alt="Zyntho logo"
            className="h-8 w-8 drop-shadow-[0_0_8px_oklch(0.62_0.22_270/0.8)]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Zyntho
          </span>
        </button>

        {showFullNav && (
          <nav className="hidden sm:flex items-center gap-1">
            {allNavItems.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  data-ocid="nav.link"
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600"
                      style={{
                        boxShadow: "0 0 12px oklch(0.62 0.22 270 / 0.5)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Auth controls */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  data-ocid="nav.dropdown_menu"
                >
                  <div
                    className="h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
                    }}
                  >
                    {profile?.name?.[0]?.toUpperCase() ?? "U"}
                  </div>
                  <span className="hidden sm:inline text-sm">
                    {profile?.name ?? "User"}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-popover border-border"
              >
                <DropdownMenuItem
                  data-ocid="nav.button"
                  onClick={clear}
                  className="gap-2 text-destructive focus:text-destructive cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              data-ocid="nav.primary_button"
              size="sm"
              onClick={login}
              disabled={isLoggingIn}
              className="gap-2 font-medium"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
              }}
            >
              <LogIn className="h-4 w-4" />
              Sign in
            </Button>
          )}

          {/* Mobile nav */}
          {showFullNav && (
            <nav className="flex sm:hidden items-center gap-1">
              {allNavItems.map((item) => {
                const Icon = item.icon;
                const active = currentPage === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    data-ocid="nav.link"
                    className={`relative p-2 rounded-lg transition-colors ${
                      active
                        ? "text-white"
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill-mobile"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <Icon className="h-5 w-5 relative z-10" />
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

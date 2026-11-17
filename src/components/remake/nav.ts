import {
  LayoutDashboard, ScanLine, BookOpen, Truck, Gift, Bell, UserRound, Building2, Route as RouteIcon, Warehouse,
  Factory, ShieldCheck, MapPin, ReceiptText, Wallet, Repeat, BarChart3, History, type LucideIcon,
} from "lucide-react";

export type AppPath =
  | "/resident" | "/resident/scan" | "/resident/guide" | "/resident/pickups" | "/resident/rewards" | "/resident/notifications" | "/resident/profile"
  | "/collector" | "/collector/today" | "/collector/receipts" | "/collector/earnings"
  | "/hub" | "/processor" | "/processor/history"
  | "/business" | "/business/pickups" | "/business/reports"
  | "/admin";

export interface NavItem {
  to: AppPath;
  label: string;
  icon: LucideIcon;
}

export interface RoleNav {
  key: string;
  label: string;
  home: AppPath;
  icon: LucideIcon;
  items: NavItem[];
}

export const ROLE_NAV: RoleNav[] = [
  {
    key: "resident", label: "Resident", home: "/resident", icon: UserRound,
    items: [
      { to: "/resident", label: "Dashboard", icon: LayoutDashboard },
      { to: "/resident/scan", label: "Waste Scanner", icon: ScanLine },
      { to: "/resident/guide", label: "Recycling Guide", icon: BookOpen },
      { to: "/resident/pickups", label: "Pickups", icon: Truck },
      { to: "/resident/rewards", label: "Green Coins & Rewards", icon: Gift },
      { to: "/resident/notifications", label: "Notifications", icon: Bell },
      { to: "/resident/profile", label: "Profile", icon: UserRound },
    ],
  },
  {
    key: "collector", label: "Collector", home: "/collector", icon: RouteIcon,
    items: [
      { to: "/collector", label: "Dashboard", icon: LayoutDashboard },
      { to: "/collector/today", label: "Today's route", icon: MapPin },
      { to: "/collector/receipts", label: "Records & receipts", icon: ReceiptText },
      { to: "/collector/earnings", label: "Earnings", icon: Wallet },
    ],
  },
  {
    key: "hub", label: "Recycling Hub", home: "/hub", icon: Warehouse,
    items: [{ to: "/hub", label: "Hub operations", icon: Warehouse }],
  },
  {
    key: "processor", label: "Processor", home: "/processor", icon: Factory,
    items: [
      { to: "/processor", label: "Incoming batches", icon: Factory },
      { to: "/processor/history", label: "Processing history", icon: History },
    ],
  },
  {
    key: "business", label: "Business", home: "/business", icon: Building2,
    items: [
      { to: "/business", label: "Dashboard", icon: LayoutDashboard },
      { to: "/business/pickups", label: "Recurring pickups", icon: Repeat },
      { to: "/business/reports", label: "Impact reports", icon: BarChart3 },
    ],
  },
  {
    key: "admin", label: "Admin", home: "/admin", icon: ShieldCheck,
    items: [{ to: "/admin", label: "Platform overview", icon: ShieldCheck }],
  },
];

export function roleFor(path: string): RoleNav {
  return ROLE_NAV.find((r) => path.startsWith(`/${r.key}`)) ?? ROLE_NAV[0]!;
}

export interface Persona {
  role: string;
  name: string;
  org: string;
  initials: string;
}

export function personaFor(path: string): Persona {
  if (path.startsWith("/business")) return { role: "Business", name: "Awa Touray", org: "Kololi Sands Hotel", initials: "AT" };
  if (path.startsWith("/collector")) return { role: "Collector", name: "Lamin Ceesay", org: "Remake Collector · Truck GM-4471", initials: "LC" };
  if (path.startsWith("/hub")) return { role: "Hub operator", name: "Isatou Bah", org: "Kanifing Recycling Hub", initials: "IB" };
  if (path.startsWith("/processor")) return { role: "Processor", name: "Modou Sowe", org: "Gambia Polymer Works", initials: "MS" };
  if (path.startsWith("/admin")) return { role: "Administrator", name: "Mariama Jobe", org: "Remake Operations", initials: "MJ" };
  return { role: "Resident", name: "Ebrima Njie", org: "Pipeline, Kanifing", initials: "EN" };
}

import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Ürünler",
    href: '/products/',
    children: [
      { label: "Tüm ürünler", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Aksesuarlar", href: '/accessories/' },
    ],
  },
  {
    label: "Uygulamalar",
    href: '/app/',
    children: [
      { label: "Tüm uygulamalar", href: '/app/' },
      { label: "KVM Kontrolü", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Medya", href: '/videos/' },
  { label: "Hakkımızda", href: '/about/' },
  { label: "Dokümantasyon", href: docsPath(), external: true },
  { label: "Haberler", href: newsPath(), external: true },
  { label: "Mağaza", href: siteConfig.links.shop, external: true },
];

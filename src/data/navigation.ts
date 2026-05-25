import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Ürünler',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Aksesuarlar', href: '/products/accessories/' },
    ],
  },
  { label: 'Videolar', href: '/videos/' },
  { label: 'Kullanım senaryoları', href: '/use-cases/' },
  { label: 'Hakkında', href: '/about/' },
  { label: 'Dokümantasyon', href: docsPath(), external: true },
  { label: 'Haberler', href: newsPath(), external: true },
  { label: 'Mağaza', href: siteConfig.links.shop, external: true },
];

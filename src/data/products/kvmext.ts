import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Genişletme Modülü",
  slogan: "uConsole'unuz İçin KVM Gücü",
  subtitle: "Taşınabilir uConsole'u tam bir KVM terminaline dönüştürün.",
  status: 'oshwa',
  description:
    "Clockwork uConsole'a KVM-over-USB yeteneği ekleyen bir donanım genişletme modülü. Dahili klavye ve ekran ile taşınabilir BT çalışmaları için mükemmel.",
  seoDescription:
    "uConsole KVM Genişletme Modülü, Clockwork uConsole taşınabilir bilgisayara KVM-over-USB ekler.",
  keywords:
    "uConsole, KVM genişletme, taşınabilir KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Daha Fazla Bilgi",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Taşınabilir konsollar, ekransız hedefler için entegre KVM'den yoksun",
    "Saha teknisyenleri her şey için tek bir cihaz istiyor",
  ],
  solutions: [
    "Yerel uConsole form faktörlü genişletme kartı",
    "Cebe sığan bir cihazda tam Openterface KVM yığını",
  ],
  hwFeatures: [
    { title: "uConsole yerel uyumlu", description: "Özellikle Clockwork uConsole için tasarlanmıştır." },
    { title: "Kompakt PCB", description: "uConsole kasasının içine monte edilir." },
  ],
  swFeatures: [
    { title: "Openterface uygulamaları", description: "Mini-KVM ve KVM-GO ile aynı güvenilir yazılım." },
    { title: "Kurulum kılavuzları", description: "Adım adım donanım ve yazılım kurulum belgeleri." },
  ],
  specs: [
    { label: "Uyumluluk", value: "Clockwork uConsole" },
    { label: "Sertifikasyon", value: "OSHWA sertifikalı" },
  ],
  useCases: [
    "Taşınabilir veri merkezi aracı",
    "Gezici maker ve ev laboratuvarı",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Donanım Kurulumu", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Yazılım Kurulumu", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Nasıl Bağlanır", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "SSS", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};

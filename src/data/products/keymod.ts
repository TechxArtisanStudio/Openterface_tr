import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Serisi",
  slogan: "Telefonunuzu Akıllı Bir Klavyeye Dönüştürün",
  subtitle: "Teknoloji meraklıları, profesyoneller ve oyuncular için programlanabilir klavye ve fare kontrolü.",
  status: 'pre-launch',
  description:
    "Telefonunuzu taşınabilir bir klavye ve dokunmatik yüzey konsoluna dönüştüren, kompakt ve programlanabilir USB + Bluetooth HID emülatörü. Openterface Mini-KVM'in kanıtlanmış HID çekirdeği üzerine inşa edilmiştir — tak ve çalıştır, %100 açık kaynak.",
  seoDescription:
    "KeyMod Serisi, telefonunuzu taşınabilir bir klavye ve dokunmatik yüzeye dönüştürür. USB + Bluetooth HID emülatörü, açık kaynak, kiosklar ve iş akışı kısayolları için mükemmel.",
  keywords:
    "KeyMod, HID emülatörü, telefon klavyesi, Bluetooth klavye, USB klavye, açık kaynak",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "ŞİMDİ Destekle",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Kiosk veya TV kurulumları için tam boy klavye taşımak pratik değil",
    "İş akışı kısayolları, hareket halindeyken programlanabilir makrolar gerektirir",
    "Birçok HID aracı, sınırlı özelleştirme seçenekleriyle kapalı kaynaktır",
  ],
  solutions: [
    "Telefonunuzu taşınabilir klavye ve dokunmatik yüzey olarak kullanın",
    "Tek kompakt cihazda USB ve Bluetooth HID",
    "Openterface uygulama desteğiyle %100 açık kaynak",
  ],
  hwFeatures: [
    { title: "Kompakt form faktörü", description: "Saha çalışmaları ve seyahatler için cebinizde taşınabilir." },
    { title: "USB + Bluetooth", description: "Maksimum cihaz uyumluluğu için çift bağlantı seçeneği." },
    { title: "Açık donanım", description: "Kanıtlanmış Openterface HID çekirdeği üzerine inşa edilmiş şeffaf tasarım." },
  ],
  swFeatures: [
    { title: "KeyMod Uygulaması", description: "Makroları, düzenleri ve oyun kumandası profillerini telefonunuzdan yapılandırın." },
    { title: "Çapraz platform", description: "Openterface uygulamaları aracılığıyla Android, iPadOS ve masaüstü sistemlerle uyumlu çalışır." },
    { title: "Açık kaynak", description: "Topluluk katkılarına açık tam yığın, GitHub'da mevcuttur." },
  ],
  specs: [
    { label: "Bağlantı", value: "USB-C + Bluetooth LE" },
    { label: "HID modları", value: "Klavye, fare, oyun kumandası" },
    { label: "Lisans", value: "Açık kaynak donanım ve yazılım" },
  ],
  useCases: [
    "Akıllı TV ve kiosk girişi",
    "Mobil iş akışı makroları",
    "Oyun ve erişilebilirlik kurulumları",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Özellikler", href: docsPath("/product/keymod/features/") },
    { label: "Kutu İçeriği", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Nasıl Bağlanır", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "SSS", href: docsPath("/product/keymod/faq/") },
    { label: "KeyMod Uygulamasını İndir", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};

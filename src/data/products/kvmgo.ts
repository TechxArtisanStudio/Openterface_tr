import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Serisi",
  slogan: "Anahtarlığınıza Sığan Ultra Kompakt KVM",
  subtitle: "Kritik Teknoloji Anları İçin — Tak. Kontrol Et. Git.",
  status: 'pre-order',
  description:
    "Dahili video bağlantılarına (HDMI, DisplayPort veya VGA) sahip yeni nesil KVM-over-USB çözümü. Ultra kompakt, anahtarlık boyutunda ve veri merkezleri ile sunucu odalarında hızlı BT operasyonları için tasarlandı.",
  seoDescription:
    "Openterface KVM-Go ile ekransız bilgisayarları kontrol edin. Dahili HDMI/DP/VGA, anahtarlık boyutunda, BT profesyonelleri için 4K KVM-over-USB.",
  keywords:
    "KVM-Go, USB üzerinden KVM, ultra kompakt KVM, anahtarlık KVM, 4K KVM, ekransız kontrol",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "ŞİMDİ Ön Sipariş Ver",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "30 Ara 2025 tarihinde fonlandı", backers: "478" },
  painPoints: [
    "Geleneksel KVM ekipmanları hantal olup ayrı video kabloları gerektirir",
    "Sahada acil sunucu erişimi için cep boyutunda bir araç gerekir",
    "Ağ erişimi olmadan ekransız sorun giderme yavaştır",
  ],
  solutions: [
    "Dahili video bağlantıları ekstra kablo ihtiyacını ortadan kaldırır",
    "Anahtarlık form faktörü her zaman elinizin altında",
    "KVM-over-USB — hedef cihazda ağ veya sürücü gerekmez",
  ],
  hwFeatures: [
    { title: "Dahili video", description: "HDMI, DisplayPort veya VGA modelleri — dağınık kablo yok." },
    { title: "Anahtarlık boyutu", description: "Openterface ürün ailesindeki en küçük KVM-over-USB." },
    { title: "4K desteği", description: "Modern ekranlar için yüksek çözünürlüklü görüntü yakalama." },
  ],
  swFeatures: [
    { title: "Openterface Qt Uygulaması", description: "Windows, macOS ve Linux için çapraz platform ana bilgisayar kontrolü." },
    { title: "MicroSD anahtarı", description: "Taşınabilir işletim sistemi kalıpları ve araçları için değiştirilebilir depolama." },
    { title: "Açık kaynak yığını", description: "Topluluk odaklı ürün yazılımı ve ana bilgisayar uygulamaları." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (modele göre değişir)" },
    { label: "Çözünürlük", value: "4K'a kadar" },
    { label: "Bağlantı", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Veri merkezi denetimleri",
    "Ekransız cihaz kurulumu",
    "Saha BT ve ev laboratuvarı kurtarma",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Özellikler", href: docsPath("/product/kvm-go/features/") },
    { label: "Beta Hızlı Başlangıç", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Nasıl Bağlanır", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "SSS", href: docsPath("/product/kvm-go/faq/") },
    { label: "Uygulamayı İndir", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};

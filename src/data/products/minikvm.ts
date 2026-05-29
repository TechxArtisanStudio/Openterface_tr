import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Dizüstü Bilgisayarınızı Bir KVM Konsoluna Dönüştürün",
  subtitle: "Teknoloji Hayatınızı Basitleştirin.",
  status: 'shipping',
  description:
    "Tak ve çalıştır KVM-over-USB çözümü. USB ve HDMI kullanarak yakınızdaki ekransız bilgisayarı dizüstü bilgisayarınızdan kontrol edin — ek çevre birimi veya ağ gerekmez.",
  seoDescription:
    "Openterface Mini-KVM: HDMI özellikli tak ve çalıştır KVM-over-USB. Ekransız bilgisayarları dizüstü bilgisayarınızdan ağ olmadan kontrol edin.",
  keywords:
    "Mini-KVM, USB üzerinden KVM, ekransız kontrol, HDMI KVM, tak ve çalıştır KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "ŞİMDİ Sipariş Ver",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "13 Haz 2024 tarihinde fonlandı", backers: "3,775" },
  painPoints: [
    "Her sunucu onarımı için monitör ve klavye taşımak pratik değil",
    "Ağ KVM'leri yapılandırma ve bağlantı gerektirir",
    "BT profesyonelleri günlük kullanımda güvenilir bir cep KVM'sine ihtiyaç duyar",
  ],
  solutions: [
    "Mevcut dizüstü bilgisayarınızı KVM konsolu olarak kullanın",
    "Tek kompakt cihazda HDMI yakalama + USB HID",
    "2024'ten bu yana 5.000+ topluluk üyesi tarafından kanıtlanmıştır",
  ],
  hwFeatures: [
    { title: "HDMI yakalama", description: "Hedef makineden ana dizüstü bilgisayarınıza tam video aktarımı." },
    { title: "USB anahtarı", description: "USB cihazlarını ana bilgisayar ve hedef arasında değiştirin." },
    { title: "Genişletme pinleri", description: "Donanım geliştirme ve özel entegrasyon seçenekleri." },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android uygulamaları", description: "Her büyük ana bilgisayar platformu için yerel uygulamalar." },
    { title: "Açık kaynak", description: "Tamamen açık donanım ve yazılım ekosistemi." },
    { title: "Aktif topluluk", description: "Discord, GitHub ve düzenli ürün yazılımı güncellemeleri." },
  ],
  specs: [
    { label: "Video girişi", value: "HDMI" },
    { label: "USB", value: "Değiştirilebilir portlu USB-C" },
    { label: "Durum", value: "Gönderimde — Crowd Supply" },
  ],
  useCases: [
    "Ev laboratuvarı yönetimi",
    "Geliştirici iş istasyonu yan yana kontrolü",
    "BT tezgahı sorun giderme",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Özellikler", href: docsPath("/product/minikvm/features/") },
    { label: "USB Anahtarı", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Teknik Destek", href: docsPath("/product/minikvm/support/") },
    { label: "SSS", href: docsPath("/product/minikvm/faq/") },
    { label: "Uygulamayı İndir", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};

import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Akıllı telefonunuzu mini klavyeye dönüştürün',
    description:
      'Akıllı telefonunuzu taşınabilir klavye ve trackpad\'e dönüştüren kompakt USB + Bluetooth HID emülatörü. Tak-çalıştır, %100 açık kaynak. Kiosk, Smart TV ve hızlı iş akışları için ideal.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Destekle', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Ürünü gör', href: '/products/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Telefon mini klavye',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Anahtarlık boyutunda ultra kompakt KVM',
    description:
      'Her zaman yanınızda olmak ve kritik anlarda kurtarmak için tasarlandı. Sahada hızlı IT müdahalesi için yeni nesil KVM-over-USB cihazı.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Ön sipariş', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Ürünü gör', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'Anahtarlık KVM',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'Profesyoneller için kompakt KVM çözümü',
    description:
      'Günlük IT görevlerini ve sorun gidermeyi kolaylaştıran kompakt, özellik açısından zengin açık kaynak KVM-over-USB çözümü.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Sipariş ver', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Ürünü gör', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'Profesyonel KVM',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Kurulumunuzu premium aksesuarlarla tamamlayın',
    description:
      'Video adaptörleri, yüksek hızlı kablolar ve depolama çözümleri dahil olmak üzere temel aksesuarlarımızı keşfedin. Openterface deneyiminizi profesyonel ekipmanla geliştirin.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: 'Alışveriş', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Aksesuarlar', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Premium aksesuarlar',
  },
];

export const homeSeo = {
  title: 'Openterface | IT profesyonelleri için ultra kompakt KVM çözümleri',
  description:
    'Openterface — ultra kompakt KVM-over-USB çözümleri: KVM-GO Series (anahtarlık boyutu), Mini-KVM Series ve uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};

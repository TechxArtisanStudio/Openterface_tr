/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: 'Ürünler',
  description:
    'IT profesyonelleri, geliştiriciler ve maker\'lar için ultra kompakt KVM-over-USB donanımı ve açık kaynak uygulamalar.',
  keywords: 'Openterface ürünleri, KeyMod, KVM-GO, Mini-KVM, KVM Extension, aksesuarlar, KVM uygulaması',
};

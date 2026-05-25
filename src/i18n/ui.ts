export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Ürün kılavuzları, SSS, eğitimler ve uygulama indirmeleri docs.openterface.com adresinde.",
    "homeMessage": "Eğitimler, SSS, uygulama indirmeleri ve ürün kılavuzları docs.openterface.com adresinde.",
    "linkLabel": "Dokümantasyonu aç ↗",
    "productMessage": "Detaylı özellikler, kurulum kılavuzları ve SSS docs.openterface.com adresinde."
  },
  "homeSubscribe": {
    "kicker": "Haberdar kalın",
    "heading": "KVM-GO, KeyMod ve Mini-KVM güncellemelerini ilk siz alın",
    "description": "Ürün lansmanları, firmware ve pratik IT ipuçları — ayda en fazla bir kez. Spam yok, yalnızca Openterface ekibinden faydalı haberler.",
    "benefitCrowdfunding": "Crowdfunding ve ön sipariş pencerelerine erken erişim",
    "benefitGuides": "Kurulum kılavuzları ve uygulama sürüm notları",
    "benefitUnsubscribe": "Tek tıkla istediğiniz zaman abonelikten çıkın",
    "submitLabel": "Güncellemelere abone ol",
    "namePlaceholder": "Ad (isteğe bağlı)",
    "emailPlaceholder": "E-posta adresi *",
    "footnote": "Ayda en fazla bir e-posta. İstediğiniz zaman iptal edin. Sorular: info@openterface.com"
  }
};

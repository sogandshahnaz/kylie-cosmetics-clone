import { MenuItem } from "@/components/layout/megaMenu/MegaMenu";

export const megaMenus: MenuItem[] = [
  {
    title: 'new',
    href: '/collections/kylie-cosmetics-new'
  },
  {
    title: 'best sellers',
    href: '/collection/best-sellers'
  },
  {
    title: 'cosmetics',
    href: '/collection/kylie-cosmetics/cosmetics',
    columns: [
      {
        image: '/images/megaMenu/new.avif',
        title: 'new',
        links: [
          {
            title: 'plumping matte lip kit',
            href: '/plumping-matte-lip-kit'
          },
          {
            title: 'mood stones',
            href: '/mood-stones'
          },
          {
            title: 'supple glaze hydrating primer',
            href: '/supple-glaze'
          },
          {
            title: 'natural blur brightening powder',
            href: '/natural-blur'
          },
          {
            title: 'precise sculpting complexion brush 05',
            href: '/precise-sculpting'
          }
        ],
      },
      {
        image: '/images/megaMenu/bestSellers.avif',
        title: 'best sellers',
      },
      {
        image: '/images/megaMenu/lipss.jpg',
        title: 'lips',
        links: [
          {
            title: 'lip kits',
            href: 'lip-kits'
          },
          {
            title: 'lip butters',
            href: '/lip-butters'
          },
          {
            title: 'lipsticks',
            href: '/lipsticks'
          },
          {
            title: 'liquid lipsticks',
            href: '/liquis-lipsticks'
          },
          {
            title: 'lip plumpers',
            href: '/lip-plumpers'
          },
          {
            title: 'lip stains',
            href: '/lip-stains'
          },
          {
            title: 'lip tints',
            href: '/lip-tints'
          },
          {
            title: 'lip balms',
            href: '/lip-balms'
          },
          {
            title: 'lip glosses',
            href: '/lip-glosses'
          },
          {
            title: 'lip liners',
            href: '/lip-liners'
          }
        ],
      },
      {
        image: '/images/megaMenu/facee.jpg',
        title: 'face',
        links: [
          {
            title: 'skin tint',
            href: 'skin-tint'
          },
          {
            title: 'foundation',
            href: '/foundation'
          },
          {
            title: 'powder foundation',
            href: '/powder-foundation'
          },
          {
            title: 'concealer',
            href: '/concealer'
          },
          {
            title: 'primer',
            href: '/primer'
          },
          {
            title: 'glow balms',
            href: '/glow-balms'
          },
          {
            title: 'blushes',
            href: 'blushes'
          },
          {
            title: 'bronzers',
            href: '/bronzers'
          },
          {
            title: 'brighteners & highlighters',
            href: '/brighteners-highlighters'
          }
        ],
      },
      {
        image: '/images/megaMenu/eyesBrows.jpg',
        title: 'eyes & brows',
        links: [
          {
            title: 'mascaras',
            href: 'mascaras'
          },
          {
            title: 'palettes',
            href: '/palettes'
          },
          {
            title: 'eyeliners',
            href: '/eyeliners'
          },
          {
            title: 'brows',
            href: '/brows'
          }
        ],
      },
      {
        image: '/images/megaMenu/featured.jpg',
        title: 'featured',
        links: [
          {
            title: 'bundles & sets',
            href: 'bundles-sets'
          },
          {
            title: 'lip duos',
            href: '/lip-duos'
          },
          {
            title: "kylie's favorites",
            href: '/kylies-favorites'
          },
          {
            title: 'king kylie collection',
            href: '/king-kylie-collection'
          },
          {
            title: 'online exclusives',
            href: '/online-exclusives'
          },
          {
            title: 'makeup brushes & accessories',
            href: '/makeup-brushes-accessories'
          },
          {
            title: 'travel essentials',
            href: '/travel-essentials'
          },
          {
            title: 'virtual try-on',
            href: '/virtual-try-on'
          },
          {
            title: 'skincare',
            href: '/skincare'
          }
        ],
      },
    ],
    featured: [
      {
      image: '/images/megaMenu/plumpingLipKitRight.webp',
      title: 'plumping matte lip kit',
      href: '/plumping-bg'
    }
  ]
  },
  {
    title: 'fragrance',
    href: '/collection/kylie-fragrance',
    columns: [
      {
        image: '/images/megaMenu/moodstones.avif',
        title: 'mood stones',
        links: [
          {
            title: 'cashmere muse',
            href: '/cashmere-muse'
          },
          {
            title: 'blush wood',
            href: '/blush-wood'
          },
          {
            title: 'velvet brew',
            href: '/velvet brew'
          }
        ],
      },
      {
        image: '/images/megaMenu/cosmicUniverse.avif',
        title: 'cosmic univers',
        links: [
          {
            title: 'cosmic kylie jenner',
            href: '/cosmic-kylie-jenner'
          },
          {
            title: 'cosmic kylie jenner 2.0',
            href: '/cosmic-kylie-jenner-2.0'
          },
          {
            title: 'cosmic kylie jenner intense',
            href: '/cosmic-kylie-jenner-intense'
          }
        ],
      },
      {
        image: '/images/megaMenu/HairBodyMists.avif',
        title: 'hair & body mists',
        links: [
          {
            title: 'caramel cloud',
            href: 'caramel-cloud'
          },
          {
            title: 'sweet Éclair',
            href: '/sweet-eclair'
          },
          {
            title: 'vanilla dew',
            href: '/vanilla-dew'
          }
        ],
      },
      {
        image: '/images/megaMenu/bundlesGiftSets.avif',
        title: 'bundles & gifts sets',
      },
      {
        image: '/images/megaMenu/shopAll.avif',
        title: 'shop all',
      },
    ],
    featured: [
      {
      image: '/images/megaMenu/moodStoneBanner.webp',
      title: 'mood stone banner',
      href: '/mood-stone-banner'
    }
  ]
  },
  {
    title: 'discover',
    href: '/discover',
    columns: [
      {
        image: '/images/megaMenu/about-us.webp',
        title: 'about us',
      },
      {
        image: '/images/megaMenu/kylies-look.avif',
        title: "kylie's look",
      },
      {
        image: '/images/megaMenu/shade-finder-quiz.avif',
        title: 'shade finder quiz',
      },
      {
        image: '/images/megaMenu/gift-guide.avif',
        title: 'gift guide',
      },
      {
        image: '/images/megaMenu/gift-cards.avif',
        title: 'gift cards',
      },
    ],
    featured: [
      {
      image: '/images/megaMenu/virtual-banner.webp',
      title: 'virtual try-on',
      href: '/virtual-try-on'
    },
    {
      image: '/images/megaMenu/current-offers-banner.webp',
      title: 'current offers',
      href: '/current-offers'
    }
  ]
  }
]
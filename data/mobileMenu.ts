import { MobileMenuItem } from "@/components/layout/navbar/MobileMenu";

export const mobileMenu: MobileMenuItem[] = [
    {
        title: 'cosmetics',
        href: '/collections/kylie-cosmetics',
        columns: [
            {
                image: '/images/mobileMenu/new.avif',
                title: 'new +',
                href: '/collections/kylie-cosmetics-new'
            },
            {
                image: '/images/mobileMenu/bestSellers.avif',
                title: 'best sellers',
                href: '/collections/kylie-cosmetics-best-sellers'
            },
            {
                image: '/images/mobileMenu/lips.avif',
                title: 'lips +',
                href: '/collections/kylie-cosmetics-lips'
            },
            {
                image: '/images/mobileMenu/face.webp',
                title: 'face +',
                href: '/collections/kylie-cosmetics-face'
            },
            {
                image: '/images/mobileMenu/eyesBrows.avif',
                title: 'eyes & brows +',
                href: '/collections/kylie-cosmetics-eyes-brows'
            },
            {
                image: '/images/mobileMenu/paletess.avif',
                title: 'palettes',
                href: '/collections/kylie-cosmetics-plattes'
            },
            {
                image: '/images/mobileMenu/tools.avif',
                title: 'tools & accessories',
                href: '/collections/kylie-cosmetics-tools'
            },
            {
                image: '/images/mobileMenu/bundle-sets.avif',
                title: 'bundles & sets',
                href: '/collections/kylie-cosmetics-bundles'
            },
            {
                image: '/images/mobileMenu/lipDuos.avif',
                title: 'lip duos',
                href: '/collections/kylie-cosmetics-lip-duos'
            },
            {
                image: '/images/mobileMenu/kyliesFav.avif',
                title: "kylie's favorites",
                href: '/collections/kylie-cosmetics-favorites'
            },
            {
                image: '/images/mobileMenu/kingKylie.avif',
                title: 'king kylie collection',
                href: '/collections/kylie-cosmetics-king-kylie'
            },
            {
                image: '/images/mobileMenu/onlineEx.avif',
                title: 'online exclusives',
                href: '/collections/kylie-cosmetics-exclusives'
            },
            {
                image: '/images/mobileMenu/travel.avif',
                title: 'travel essentials',
                href: '/collections/kylie-cosmetics-travel'
            },
            {
                image: '/images/mobileMenu/virtual.avif',
                title: 'virtual try-on',
                href: '/collections/kylie-cosmetics-virtual'
            },
            {
                image: '/images/mobileMenu/skinCare.avif',
                title: 'skincare',
                href: '/collections/kylie-cosmetics-skincare'
            },
        ],
        featured: [
            {
               image: '/images/mobileMenu/cosmeticsBanner.webp',
               title: 'plumping matte lip kit',
               href: '/collections/kylie-cosmetics-lip-kit'
            }
        ]
    },
    {
        title: 'fragrance',
        href: '/collections/fragrance',
        columns: [
            {
                image: '/images/mobileMenu/moodStone.avif',
                title: 'mood stones +'
            },
            {
                image: '/images/mobileMenu/cosmic-univers.avif',
                title: 'cosmic universe'
            },
            {
                image: '/images/mobileMenu/hair-body.avif',
                title: 'hair & body mists +'
            },
            {
                image: '/images/mobileMenu/bundles-gifts.avif',
                title: 'bundles & gift sets'
            },
            {
                image: '/images/mobileMenu/shopAll.avif',
                title: 'shop all'
            }
        ],
        featured: [
            {
               image: '/images/mobileMenu/fragranceBanner.webp',
               title: 'mood stones',
               href: '/collections/mood-stones'
            }
        ]
    },
    {
        title: 'discover',
        href: '/collections/discover',
        columns: [
            {
                image: '/images/mobileMenu/aboutUs.avif',
                title: 'about us'
            },
            {
                image: '/images/mobileMenu/kyliesLook.avif',
                title: "kylie's look"
            },
            {
                image: '/images/mobileMenu/shadeFinder.avif',
                title: 'shade finder quiz'
            },
            {
                image: '/images/mobileMenu/giftCards.avif',
                title: 'gift cards'
            },
            {
                image: '/images/mobileMenu/giftGuide.avif',
                title: 'gift guide'
            }
        ],
        featured: [
            {
               image: '/images/mobileMenu/discoverBanner2.webp',
               title: 'kylie reward',
               href: '/collections/kylies-rewards'
            },
            {
                image: '/images/mobileMenu/discoverBanner1.webp',
                title: 'refer a friend',
                href: '/collections/refer-a-friend'
             },
        ]
    },
    {
        title: 'rewards',
        href: '/kylie-rewards',
    }
] 
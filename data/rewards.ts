import { RewardStep, RewardEarnItem, RewardUsePoints, RewardProduct, RewardTier, RewardFAQ } from "@/types/rewards";

export const rewardSteps: RewardStep[] = [
    {
        number: 1,
        title: 'create an account',
        desc: 'start here first'
    },
    {
        number: 2,
        title: "EARN POINTS",
        desc: "$1 = 1 point earned",
      },
      {
        number: 3,
        title: "REDEEM POINTS",
        desc: "redeem points for exclusive discounts",
      },
]

export const rewardWaysToEarn: RewardEarnItem[] = [
  {
    id: 1,
    image: '/images/rewards/1points.svg',
    title: '1 point',
    desc: 'spend $1 for 1 point'
  },
  {
    id: 2,
    image: '/images/rewards/25points.svg',
    title: '25 points',
    desc: 'create an account'
  },
  {
    id: 3,
    image: '/images/rewards/20points.svg',
    title: '20 points',
    desc: 'follow us on instagram'
  },
  {
    id: 4,
    image: '/images/rewards/20pointss.svg',
    title: '20 points',
    desc: 'share on facebook'
  },
  {
    id: 5,
    image: '/images/rewards/20pointsss.svg',
    title: '20 points',
    desc: 'follow us on tiktok'
  },
  {
    id: 6,
    image: '/images/rewards/35points.png',
    title: '35 points',
    desc: 'write a review'
  },
  {
    id: 7,
    image: '/images/rewards/50points.svg',
    title: '50 points',
    desc: 'write a review with photo'
  },
  {
    id: 8,
    image: '/images/rewards/75points.svg',
    title: '75 points',
    desc: 'write a review with video'
  },
  {
    id: 9,
    image: '/images/rewards/35points.svg',
    title: '35 points',
    desc: 'sign up to receive text messages'
  },
  {
    id: 10,
    image: '/images/rewards/25pointss.svg',
    title: '25 points',
    desc: 'sign up to receive email messages'
  },
  {
    id: 11,
    image: '/images/rewards/25pintsss.png',
    title: '25 points',
    desc: 'when you spend $100+ in a single purchase'
  },
  {
    id: 12,
    image: '/images/rewards/birthday.png',
    title: 'birthday gift',
    desc: 'tell us your birthday'
  },
];


export const useYourPoints: RewardUsePoints[] = [
  {
    id: 1,
    title: '$5 off',
    desc: '50 points'
  },
  {
    id: 2,
    title: '$10 off',
    desc: '100 points'
  },
];


export const rewardProducts: RewardProduct[] = [
  {
    id: 1,
    name: 'crème brûlée Lip oil',
    points: 210,
    image: '/images/rewards/creme.jpg'
  },
  {
    id: 2,
    name: 'hey sugar powder blush stick',
    points: 220,
    image: '/images/rewards/heySugar.jpg'
  },
  {
    id: 3,
    name: 'match my energy gloss drip',
    points: 170,
    image: '/images/rewards/matchEnergy.jpg'
  },
  {
    id: 4,
    name: 'summer feeling lip & cheek blush tint',
    points: 200,
    image: '/images/rewards/summer.jpg'
  },
  {
    id: 5,
    name: 'way to glow lip & cheek glow balm',
    points: 200,
    image: '/images/rewards/wayToGlow.jpg'
  },
  {
    id: 6,
    name: 'spiced tinted butter balm',
    points: 170,
    image: '/images/rewards/spiced.jpg'
  }
];

export const rewardTiers: RewardTier[] = [
  {
    id: 1,
    name: 'silver',
    icon: '/images/rewards/silver.png',
    spend: '0-$99',
    benefits: [
      'earn 1 point for every dollar spent',
      'free standard shipping with any $40+ order',
      'exclusive discounts',
      'access to member-only events',
      'rewards catalogue',
      'birthday gift'
    ]
  },
  {
    id: 2,
    name: 'gold',
    icon: '/images/rewards/gold.png',
    spend: 'spend $100',
    benefits: [
      'earn 1 point for every dollar spent',
      'free standard shipping with any $40+ order',
      'early access to sales',
      'exclusive discounts',
      'access to member-only events',
      'rewards catalogue',
      'birthday gift',
      'anniversary gift',
      'tier welcome points'
    ]
  },
  {
    id: 3,
    name: 'platinum',
    icon: '/images/rewards/platinum.png',
    spend: 'spend $250',
    benefits: [
      'earn 1.5 point for every dollar spent',
      'free standard shipping with any $30+ order',
      'early access to sales',
      'exclusive discounts',
      'access to member-only events',
      'rewards catalogue',
      'birthday gift',
      'anniversary gift',
      'tier welcome points'
    ]
  },
  {
    id: 4,
    name: 'diamond',
    icon: '/images/rewards/diamond.png',
    spend: 'spend $500',
    benefits: [
      'earn 1.5 point for every dollar spent',
      'free standard shipping with any order',
      'early access to sales',
      'exclusive discounts',
      'access to member-only events',
      'rewards catalogue',
      'birthday gift',
      'anniversary gift',
      'tier welcome points',
      'invite-only events'
    ]
  },
];


export const rewardFaq: RewardFAQ[] = [
  {
    question: "what is kylie cosmetics rewards?",
    answer: "Kylie Cosmetics Rewards is the name of Kylie Cosmetics's loyalty program. We created Kylie Cosmetics Rewards to reward you for shopping with us. Membership is complimentary and when you join, you'll be eligible to earn points and receive perks. Earn points each time you shop on kyliecosmetics.com, follow us on social media, write product reviews, and more. Redeem your points for exclusive rewards on kyliecosmetics.com."
  },
  {
    question: "how do i join?",
    answer: "click the join now button at the top of the page to get started. You will then be prompted to log-in to your Kylie Cosmetics account or create an account."
  },
  {
    question: "does it cost anything to join?",
    answer: "membership is 100% free, and there is no additional cost for earning or redeeming rewards. You may earn points by purchasing Kylie Cosmetics products on our site or through the other actions listed."
  },
  {
    question: "can i join if i'm a customer shopping outside of the united states?",
    answer: "at this time, Kylie Cosmetics Rewards is restricted to U.S. customers only but please stay connected for future expansion."
  },
  {
    question: "can i earn points without joining?",
    answer: "no you must create an account to join but joining is free and easy."
  },
  {
    question: "how do i earn points?",
    answer: "you earn 1 point for every $1 you spend on qualified purchases, minus discounts, returns, taxes, and fees. you can also earn points by completing tasks described on the Kylie Cosmetics Rewards page. There is no limit to how many points you can earn - just make sure you’re logged in to your account at checkout."
  },
  {
    question: "i left a review, why didn't i earn points?",
    answer: "thanks for leaving a review! only verified reviews are eligible to earn points. This means that you must leave your review using the verified link that was sent to you via email after purchasing the item(s) through kyliecosmetics.com to receive points.once your review reward points have been awarded, please note you will be eligible to earn review reward points again in one month."
  },
  {
    question: "how do i redeem points?",
    answer: "to redeem points for a discount on your order, you can redeem at checkout or on the My Account page."
  },
  {
    question: "how do i check my pints balance?",
    answer: "once logged in, you can check your points balance on both the rewards page and my account page."
  },
  {
    question: "when do new points post to my account?",
    answer: "as soon as you complete a points-eligible action or purchase, the points will automatically appear in your account."
  },
  {
    question: "what is the difference between the tires?",
    answer: "your membership tier is based on how many points you have earned in a rolling twelve-month period. You will start as Silver status and move up from there as you accumulate more points. once you enter a new tier, you will have one year from that date to earn enough points to retain your status. if you do not, you will move to the tier that you are eligible for. each tier comes with its own benefits which are described above."
  },
  {
    question: "how will i know when i have reached a new tier?",
    answer: "when your total points cross a tier threshold you will receive an email welcoming you into the new tier."
  },
  {
    question: "do my rewards or points expire?",
    answer: "points expire if you have not earned or redeemed any points within the last 12 months. for rewards expiration, please check the disclaimer."
  },
  {
    question: "can i combine points with an additional discount code?",
    answer: "unfortunately points redeemed for discounts cannot be combined with any other discount or offer."
  },
  {
    question: "can i use reward points during sales for additional discounts?",
    answer: "during promotional sitewide events, such as black friday and cyber monday, the use of reward points is restricted and cannot be combined with any other discount or offer."
  }
]
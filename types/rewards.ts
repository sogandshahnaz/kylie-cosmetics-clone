export type RewardStep = {
    number: number;
    title: string;
    desc: string;
}

export type RewardEarnItem = {
    id: number;
    image: string;
    title: string;
    desc: string
}

export type RewardUsePoints = {
    id: number;
    title: string;
    desc: string
}

export type RewardProduct = {
    id: number;
    name: string
    points: number;
    image: string
}

export type RewardTier = {
    id: number;
    name: string;
    icon: string;
    spend: string;
    benefits: string[]
}

export type RewardFAQ = {
    question: string;
    answer: string
}
import { ExternalLink, Home } from "lucide-react";

export interface SelectedWorks {
    id: string;
    title: string;
    description: string;
    status: 'Active' | 'Released' | 'On Hold' | 'Seasonal';
    externalLink?: string;
    overview?: string;
    technologies?: string[];
    highlights?: string[];
    icon?: typeof ExternalLink | typeof Home;
}

export const selectedWorksData: SelectedWorks[] = [
    {
        id: 'leetcode',
        title: 'LeetCode Practice',
        description: 'Practicing data structures and algorithms through daily LeetCode challenges.',
        status: 'Active',
        externalLink: 'https://github.com/ashuadh7/LeetCodePractice',
        technologies: ['C#', 'Data Structures', 'Algorithms'],
        icon: ExternalLink,
    },
    {
        id: 'personal-website',
        title: 'Personal Website',
        description: 'Developing and maintaining my personal portfolio website to showcase projects and publications.',
        externalLink: 'https://ashuadh7.github.io',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        status: 'Active',
        icon: Home,
    },
    {
        id: 'call-break',
        title: 'Call Break Game',
        description: 'A digital version of the popular Nepali card game Call Break with multiplayer support.',
        status: 'Active',
        externalLink: 'https://github.com/prasantadh/callbreak-np',
        technologies: ['Unity', 'C#', 'Photon Networking', 'Rust'],
        icon: ExternalLink,
    },
    {
        id: 'chartx-gui',
        title: 'ChartX - Sensor Data Visualization Tool',
        description: 'A cross-platform GUI application for visualizing and analyzing real-time sensor data from custom hardware.',
        status: 'Released',
        externalLink: 'https://infusionsystems.com/catalog/product_info.php/products_id/687',
        technologies: ['Python', 'PyQt5', 'Serial Communication', 'Data Visualization'],
        icon: ExternalLink,
   }
];

export interface Book {
    id: string;
    title: string;
    authors: string[];
    category: 'completed' | 'reading' | 'wishlist';
    coverImage?: string;
    notes?: string;
    dateCompleted?: string;
    dateStarted?: string;
}

export const booksData: Book[] = [
    {
        id: 'braiding-sweetgrass',
        title: 'Braiding Sweetgrass',
        authors: ['Robin Wall Kimmerer'],
        category: 'completed',
        coverImage: '/books/braiding-sweetgrass/cover.jpg',
        notes: 'Moving from a deeply communal society in South Asia to North America, this book felt grounding and unexpectedly familiar. I had mostly encountered Native Americans in political contexts, but seeing their tools and sports equipment at the Museum of Natural History in New York made their culture feel personal. Many objects resembled what I grew up with in Nepal. This book deepened that connection. It’s also a beautiful, accessible introduction to sustainable development for anyone new to the idea, rooted in lived wisdom and reciprocity with the land.',
        dateCompleted: '2025-10-12'
    },
    {
        id: 'annihilation-of-caste',
        title: 'Annihilation of Caste',
        authors: ['B. R. Ambedkar'],
        category: 'completed',
        coverImage: '/books/annihilation-of-caste/cover.jpg',
        notes: 'Similar impact as Braiding Sweetgrass, but in the South Asian caste context. I used to understand caste mostly as inequality in a broad sense, but this book made the hidden costs and everyday violence impossible to ignore. It changed how I think about structure, dignity, and social mobility. Also, Arundhati Roy\'s introduction is amazing.',
        dateCompleted: '2021-06-03'
    },
    {
        id: 'siddhartha',
        title: 'Siddhartha',
        authors: ['Hermann Hesse'],
        category: 'completed',
        coverImage: '/books/siddhartha/cover.jpg',
        notes: 'One of the few books that helped me define what life means to me and how I think about purpose of life. When I first discovered existentialism, I had that feeling of \"wow, this is what I have been trying to say.\" Siddhartha gave me that same feeling. Things I had as vague intuitions finally felt clear and sayable.',
        dateCompleted: '2021-11-19'
    },
    {
        id: 'freedom-is-a-constant-struggle',
        title: 'Freedom Is a Constant Struggle',
        authors: ['Angela Y. Davis'],
        category: 'completed',
        coverImage: '/books/freedom-is-a-constant-struggle/cover.jpg',
        notes: 'A collection of essays and speeches by Angela Y. Davis that explores the intersectionality. Reshaped my understanding of social justice and how to view marginalized communities.',
        dateCompleted: '2024-04-07'
    },
    {
        id: 'poor-economics',
        title: 'Poor Economics',
        authors: ['Abhijit V. Banerjee', 'Esther Duflo'],
        category: 'completed',
        coverImage: '/books/poor-economics/cover.jpg',
        notes: 'Reshaped my understanding of poverty and development economics. I mean, they won a freaking Nobel Prize for it! But very accessible. And relatable to someone coming from a developing country.',
        dateCompleted: '2023-09-22'
    },
    {
        id: 'catch-22',
        title: 'Catch-22',
        authors: ['Joseph Heller'],
        category: 'completed',
        coverImage: '/books/catch-22/cover.jpg',
        notes: 'One of my favorites. A comedy with a philosophical core! What could I ask for more? This is THE BOOK I wish I could write myself.',
        dateCompleted: '2023-02-14'
    },
    {
        id: 'the-hitchhikers-guide-to-the-galaxy',
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        authors: ['Douglas Adams'],
        category: 'completed',
        coverImage: '/books/the-hitchhikers-guide-to-the-galaxy/cover.jpg',
        notes: 'I am a sucker for humor, and this is one of the few books that has made me laugh out loud. Not just smile, actual laugh-and-put-the-book-down moments.',
        dateCompleted: '2022-08-30'
    },
    {
        id: 'dune',
        title: 'Dune',
        authors: ['Frank Herbert'],
        category: 'completed',
        coverImage: '/books/dune/cover.jpg',
        notes: 'Amazing world-building. I loved reading it.',
        dateCompleted: '2021-12-05'
    },
    {
        id: 'born-a-crime',
        title: 'Born a Crime',
        authors: ['Trevor Noah'],
        category: 'completed',
        coverImage: '/books/born-a-crime/cover.jpg',
        notes: 'This book, along with Half of a Yellow Sun, is my introduction to Africa in personal level. (I know! Defining whole continent based on two books!) But it helped me see how much humans share beneath the surface of culture. We often treat our own customs as singular and view others as fundamentally different. But when we look closely, those differences thin out. Climate, geography, flora, fauna, and resources shape culture, but power structures, struggles, fears, hopes, and love shape individuals and collectives much more convergently than we care to admit.',
        dateCompleted: '2021-03-11'
    },
    {
        id: 'the-unbearable-lightness-of-being',
        title: 'The Unbearable Lightness of Being',
        authors: ['Milan Kundera'],
        category: 'completed',
        coverImage: '/books/the-unbearable-lightness-of-being/cover.jpg',
        notes: 'Funny thing: I mostly remember that I loved this book, but I cannot remember many details now. I read it around six years ago, so I guess that is fair :)',
        dateCompleted: '2020-09-17'
    },
    {
        id: 'a-body-undone',
        title: 'A Body Undone',
        authors: ['Christina Crosby'],
        category: 'reading',
        coverImage: '/books/a-body-undone/cover.jpg',
        dateStarted: '2025-05-15'
    },
    {
        id: 'the-remains-of-the-day',
        title: 'The Remains of the Day',
        authors: ['Kazuo Ishiguro'],
        category: 'reading',
        coverImage: '/books/the-remains-of-the-day/cover.jpg',
        dateStarted: '2025-06-01'
    },
    {
        id: 'the-man-in-the-high-castle',
        title: 'The Man in the High Castle',
        authors: ['Philip K. Dick'],
        category: 'reading',
        coverImage: '/books/the-man-in-the-high-castle/cover.jpg',
        dateStarted: '2025-06-01'
    },
    {
        id: 'metaphors-we-live-by',
        title: 'Metaphors We Live By',
        authors: ['George Lakoff', 'Mark Johnson'],
        category: 'reading',
        coverImage: '/books/metaphors-we-live-by/cover.jpg',
        dateStarted: '2025-12-15'
    },
    {
        id: 'the-design-of-everyday-things',
        title: 'The Design of Everyday Things',
        authors: ['Don Norman'],
        category: 'reading',
        coverImage: '/books/the-design-of-everyday-things/cover.jpg',
        dateStarted: '2025-12-15'
    },
    {
        id: 'thinking-fast-and-slow',
        title: 'Thinking, Fast and Slow',
        authors: ['Daniel Kahneman'],
        category: 'wishlist',
        coverImage: '/books/thinking-fast-and-slow/cover.jpg',
    },
    {
        id: 'east-of-eden',
        title: 'East of Eden',
        authors: ['John Steinbeck'],
        category: 'wishlist',
        coverImage: '/books/east-of-eden/cover.jpg',
    },
    {
        id: 'brave-new-world',
        title: 'Brave New World',
        authors: ['Aldous Huxley'],
        category: 'wishlist',
        coverImage: '/books/brave-new-world/cover.jpg',
    },
    {
        id: 'one-hundred-years-of-solitude',
        title: 'One Hundred Years of Solitude',
        authors: ['Gabriel Garcia Marquez'],
        category: 'wishlist',
        coverImage: '/books/one-hundred-years-of-solitude/cover.jpg',
    },
    {
        id: 'scattered-minds',
        title: 'Scattered Minds',
        authors: ['Gabor Mate'],
        category: 'wishlist',
        coverImage: '/books/scattered-minds/cover.jpg',
    },
    {
        id: 'who-do-you-think-you-are',
        title: 'Who Do You Think You Are?',
        authors: ['Alice Munro'],
        category: 'wishlist',
        coverImage: '/books/who-do-you-think-you-are/cover.jpg',
    },
    {
        id: 'the-sirens-of-titan',
        title: 'The Sirens of Titan',
        authors: ['Kurt Vonnegut'],
        category: 'wishlist',
        coverImage: '/books/the-sirens-of-titan/cover.jpg',
    },
    {
        id: 'the-body-keeps-the-score',
        title: 'The Body Keeps the Score',
        authors: ['Bessel van der Kolk'],
        category: 'wishlist',
        coverImage: '/books/the-body-keeps-the-score/cover.jpg',
    }
];

export const getBookCount = (category: 'completed' | 'reading' | 'wishlist'): number => {
  return booksData.filter(book => book.category === category).length;
};

export interface OrbitCollectionGroup {
    id: string;
    label: string;
    items: string[];
}

export interface OrbitCollection {
    id: 'podcasts' | 'tv-shows' | 'manga' | 'video-games' | 'board-games';
    title: string;
    note?: string;
    groups: OrbitCollectionGroup[];
}

export const audioVisualData: OrbitCollection[] = [
    
    {
        id: 'tv-shows',
        title: 'TV Shows',
        groups: [
            {
                id: 'currently-watching',
                label: 'Currently Watching',
                items: ['Succession', 'Curb Your Enthusiasm', 'Severance']
            },
            {
                id: 'favourites',
                label: 'Some Favourites',
                items: [
                    'The Wire',
                    'Avatar: The Last Airbender',
                    'Friends',
                    'BoJack Horseman',
                    'Ted Lasso',
                    'Fleabag'
                ]
            },
            
            {
                id: 'wishlist',
                label: 'Wishlist',
                items: ['Pluribus', 'Shogun', 'The White Lotus']
            }
        ]
    },
    {
        id: 'manga',
        title: 'Manga',
        groups: [
            {
                id: 'currently-following',
                label: 'Currently Following',
                items: ['One Piece']
            },
            {
                id: 'favourites',
                label: 'Some Favourites',
                items: ['Attack on Titan', 'Fullmetal Alchemist', 'Death Note', 'Naruto']
            },
            
        ]
    },
    {
        id: 'podcasts',
        title: 'Podcasts',
        groups: [
            {
                id: 'currently-listening',
                label: 'Currently Listening',
                items: ['Normal Gossip', 'What Now? with Trevor Noah', 'Men in Blazers (Liverpool rocks!!)']
            }
        ]
    },
    {
        id: 'video-games',
        title: 'Video Games',
        note: 'Not a big gamer, but these are some personal favourites.',
        groups: [
            {
                id: 'favourites',
                label: 'Some Favourites',
                items: [
                    'Red Dead Redemption 2',
                    'EA FC (sadly EA sucks, but Liverpool rocks!)',
                    'The Witcher 3',
                    'Grand Theft Auto V'
                ]
            }
        ]
    },
    {
        id: 'board-games',
        title: 'Board Games',
        note: 'Sucker for board games.',
        groups: [
            {
                id: 'favourites',
                label: 'Some Favourites',
                items: [
                    'Hanabi',
                    'Sequence',
                    'Dominion',
                    'Dixit',
                    'Settlers of Catan',
                    'The Resistance: Avalon',
                    'Call Break'
                ]
            }
        ]
    }
];

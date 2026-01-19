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
        externalLink: 'https://github.com/ashuadh7/CallBreakGame',
        technologies: ['Unity', 'C#', 'Photon Networking', 'Rust'],
        icon: ExternalLink,
    },
    {
        id: 'chartx-gui',
        title: 'ChartX – Sensor Data Visualization Tool',
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
        id: 'born-a-crime',
        title: 'Born a Crime',
        authors: ['Trevor Noah'],
        category: 'completed',
        coverImage: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Born_a_Crime_by_Trevor_Noah_%28book_cover%29.jpg',
        notes: 'This book, along with Half of a Yellow Sun, helped me see how much humans share beneath the surface of culture. We often treat our own customs as singular and view others as fundamentally different. But when we look closely, those differences thin out. Climate, geography, flora, fauna, and resources shape culture, but power structures, struggles, fears, hopes, and love shape individuals and collectives much more convergently than we care to admit.',
        dateCompleted: '2024-05-20'
    },
    {
        id: 'catch-22',
        title: 'Catch-22',
        authors: ['Joseph Heller'],
        category: 'completed',
        coverImage: './books/catch-22/cover.jpg',
        notes: 'One of my favorites. A comedy with a philosophical core! What could I ask for more? This is THE BOOK I wish I could write myself.'
    },
    {
        id: 'poor-economics',
        title: 'Poor Economics',
        authors: ['Abhijit V. Banerjee', 'Esther Duflo'],
        category: 'completed',
        coverImage: './books/poor-economics/cover.jpg',
        notes: 'Reshaped my understanding of poverty and development economics. I mean, they won a freaking Nobel Prize for it! But very accessible. And reletable to someone coming from a developing country.'
    },
    {
        id: 'freedom-is-a-constant-struggle',
        title: 'Freedom Is a Constant Struggle',
        authors: ['Angela Y. Davis'],
        category: 'completed',
        coverImage: './books/freedom-is-a-constant-struggle/cover.jpg',
        notes: 'A collection of essays and speeches by Angela Y. Davis that explores the intersectionality. Reshaped my understanding of social justice and how to view marginalized communities.'
    },
    {
        id: 'a-body-undone',
        title: 'A Body Undone',
        authors: ['Christina Crosby'],
        category: 'reading',
        coverImage: './books/a-body-undone/cover.jpg',
        dateStarted: '2025-05-15'
    },
    {
        id: 'the-remains-of-the-day',
        title: 'The Remains of the Day',
        authors: ['Kazuo Ishiguro'],
        category: 'reading',
        coverImage: './books/the-remains-of-the-day/cover.jpg',
        dateStarted: '2025-06-01'
    },
    {
        id: 'the-man-in-the-high-castle',
        title: 'The Man in the High Castle',
        authors: ['Philip K. Dick'],
        category: 'reading',
        coverImage: './books/the-man-in-the-high-castle/cover.jpg',
        dateStarted: '2025-06-01'
    },
    {
        id: 'metaphors-we-live-by',
        title: 'Metaphors We Live By',
        authors: ['George Lakoff', 'Mark Johnson'],
        category: 'reading',
        coverImage: './books/metaphors-we-live-by/cover.jpg',
        dateStarted: '2025-12-15'
    },
    {
        id: 'the-design-of-everyday-things',
        title: 'The Design of Everyday Things',
        authors: ['Don Norman'],
        category: 'reading',
        coverImage: './books/the-design-of-everyday-things/cover.jpg',
        dateStarted: '2025-12-15'
    },
    {
        id: 'thinking-fast-and-slow',
        title: 'Thinking, Fast and Slow',
        authors: ['Daniel Kahneman'],
        category: 'wishlist',
        coverImage: './books/thinking-fast-and-slow/cover.jpg',
    },
    {
        id: 'east-of-eden',
        title: 'East of Eden',
        authors: ['John Steinbeck'],
        category: 'wishlist',
        coverImage: './books/east-of-eden/cover.jpg',
    },
    {
        id: 'Brave-New-World',
        title: 'Brave New World',
        authors: ['Aldous Huxley'],
        category: 'wishlist',
        coverImage: './books/brave-new-world/cover.jpg',
    }
];

export const getBookCount = (category: 'completed' | 'reading' | 'wishlist'): number => {
  return booksData.filter(book => book.category === category).length;
};

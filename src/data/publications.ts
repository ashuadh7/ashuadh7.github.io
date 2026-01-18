export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  linkText: string;
  linkUrl: string; // Placeholder or actual link if provided
  category: 'Peer-Reviewed Journals' | 'Other Peer-Reviewed Publications' | 'Exhibitions, Presentations, and Posters';
}

export const publicationsData: Publication[] = [
  // Peer-Reviewed Journals
  {
    id: 'journal-1',
    title: 'Leaning-based interfaces improve simultaneous locomotion and object interaction in VR compared to the handheld controller.',
    authors: 'Hashemian, A.M., **Adhikari, A.**, Aguilar, I.A., Kruij, E., von der Heyde, M., & Riecke, B.E.',
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 30(8), 4665-4682 (2024).',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Peer-Reviewed Journals'
  },
  {
    id: 'journal-2',
    title: 'Integrating continuous and teleporting VR locomotion into a seamless \'hyperjump\' paradigm.',
    authors: '**Adhikari, A.**, Zielasko, D., Aguilar, I., Bretin, A., Kruij, E., von der Heyde, M., & Riecke, B.E.',
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 29(12), 5265-5281 (2022).',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Peer-Reviewed Journals'
  },
  {
    id: 'journal-3',
    title: 'Lean to fly: Leaning-based embodied flying can improve performance and user experience in 3D navigation.',
    authors: '**Adhikari, A.**, Hashemian, A.M., Nguyen-Vo, T., Kruij, E., von der Heyde, M., & Riecke, B.E.',
    venue: 'Frontiers in Virtual Reality, 2, 730334 (2021).',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Peer-Reviewed Journals'
  },
  {
    id: 'journal-4',
    title: 'Leaning-based interfaces improve ground-based VR locomotion in reach-the-target, follow-the-path, and racing tasks.',
    authors: 'Hashemian, A.M., **Adhikari, A.**, Kruij, E., von der Heyde, M., & Riecke, B.E.',
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 29(3), 1748-1768 (2021).',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Peer-Reviewed Journals'
  },
  {
    id: 'journal-5',
    title: 'HeadJoystick: Improving flying in VR using a novel leaning-based interface.',
    authors: 'Hashemian, A.M., Lotfaliei, M., **Adhikari, A.**, Kruij, E., & Riecke, B.E.',
    venue: 'IEEE Transactions on Visualization and Computer Graphics, 28(4), 1792-1809 (2020).',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Peer-Reviewed Journals'
  },

  // Other Peer-Reviewed Publications
  {
    id: 'conf-1',
    title: "'I Call Upon a Friend': Virtual Reality-Based Supports for Cognitive Reappraisal Identified through Co-designing with Adolescents.",
    authors: 'Kitson, A., Antle, A.N., Kenny, S., **Adhikari, A.**, Karthik, K., Cimensel, A., & Chan, M.',
    venue: 'Proceedings of CHI 2024, ACM, Article 691, 1-18.',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Other Peer-Reviewed Publications'
  },
  {
    id: 'conf-2',
    title: 'Awedyssey: Design tensions in eliciting self-transcendent emotions in virtual reality to support mental well-being and connection.',
    authors: 'Miller, N., Stepanova, E.R., Desnoyers-Stewart, J., **Adhikari, A.**, Kitson, A., et al.',
    venue: 'Proceedings of the 2023 ACM Designing Interactive Systems Conference, 189-211.',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Other Peer-Reviewed Publications'
  },
  {
    id: 'conf-3',
    title: 'FeetBack: Augmenting robotic telepresence with haptic feedback on the feet.',
    authors: 'Jones, B., Maiero, J., Mogharrab, A., Aguilar, I.A., **Adhikari, A.**, Riecke, B.E., Kruij, E., Neustaedter, C., & Lindeman, R.W.',
    venue: 'Proceedings of ICMI 2020, 194-203.',
    linkText: 'View Publication',
    linkUrl: '#',
    category: 'Other Peer-Reviewed Publications'
  },

  // Exhibitions, Presentations, and Posters
  {
    id: 'exhibit-1',
    title: 'Awedyssey [Curated Mixed Reality Exhibition].',
    authors: 'Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., **Adhikari, A.**, Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.',
    venue: 'Cosmic Nights: Humans in Space, H.R. MacMillan Space Centre, November 23, 2023.',
    linkText: 'More Details',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-2',
    title: 'HyperJumping in Virtual Vancouver: Combating motion sickness by merging teleporting and continuous VR locomotion in an embodied hands-free VR flying paradigm.',
    authors: 'Riecke, B. E., Clement, D., **Adhikari, A.**, Quesnel, D., Zielasko, D., & von der Heyde, M.',
    venue: '',
    linkText: 'View Abstract',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-3',
    title: 'Embodied VR flying improves spatial orientation while reducing cybersickness.',
    authors: '**Adhikari, A.**, Riecke, B.E., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., & von der Heyde, M.',
    venue: 'Talk presented at ICSC 2021, Rome, Italy.',
    linkText: 'Watch Presentation',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-4',
    title: 'HyperJump: Merging Teleporting and Continuous VR Locomotion into One Paradigm.',
    authors: 'Riecke, B.E., **Adhikari, A.**, Zielasko, D., Bretin, A., von der Heyde, M., and Kruij, E.',
    venue: 'Talk presented at ICSC 2021, Rome, Italy.',
    linkText: 'Watch Presentation',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-5',
    title: 'Integrating Continuous and Teleporting VR Locomotion into a Seamless \'HyperJump\' Paradigm.',
    authors: '**Adhikari, A.**, Zielasko, D., Bretin, A., von der Heyde, M., Kruij, E., & Riecke, B.E.',
    venue: 'IEEE VR 2021 Workshop, 370-372.',
    linkText: 'View Abstract',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-6',
    title: 'Simultaneous Locomotion and Interaction in VR: Walking > Leaning > Controller.',
    authors: 'Riecke, B.E., Hashemian, A.M., **Adhikari, A.**, Aguilar, I., Kruijff, E., & von der Heyde, M.',
    venue: 'ICSC 2021: 8th International Conference on Spatial Cognition, Rome, Italy.',
    linkText: 'Watch Presentation',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  },
  {
    id: 'exhibit-7',
    title: 'SIRIUS [Curated & peer-reviewed Virtual Reality Exhibition]',
    authors: 'Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., **Adhikari, A.**, Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.',
    venue: 'V-Unframed 2021, Vancouver, Canada.',
    linkText: 'More Details',
    linkUrl: '#',
    category: 'Exhibitions, Presentations, and Posters'
  }
];

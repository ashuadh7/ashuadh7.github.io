export const publicationCategories = [
  "Peer-Reviewed Journals",
  "Other Peer-Reviewed Publications",
  "Exhibitions, Presentations, and Posters",
] as const;

export type PublicationCategory = (typeof publicationCategories)[number];

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  linkText: string;
  linkUrl: string;
  category: PublicationCategory;
  publishedOn: string;
  relatedProjectIds: string[];
}

export interface ProjectPublication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  link: string;
  linkText: string;
  publishedOn: string;
}

const PROFILE_AUTHOR_PATTERN = /\badhikari\b/i;

export function stripAuthorFormatting(authors: string): string {
  return authors.replace(/\*\*/g, "");
}

function toTimestamp(dateString: string): number {
  const timestamp = Date.parse(dateString);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function sortByPublishedOnDesc<T extends { publishedOn: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => toTimestamp(b.publishedOn) - toTimestamp(a.publishedOn),
  );
}

export function isProfileAuthoredPublication(publication: Publication): boolean {
  return PROFILE_AUTHOR_PATTERN.test(stripAuthorFormatting(publication.authors));
}

// For each new entry, set `publishedOn` (ISO date) and `relatedProjectIds`.
// If authors include "Adhikari", it will appear in profile publication/project listings.
export const publicationsData: Publication[] = [
  // Peer-Reviewed Journals
  {
    id: "journal-1",
    title:
      "Leaning-based interfaces improve simultaneous locomotion and object interaction in VR compared to the handheld controller.",
    authors:
      "Hashemian, A.M., **Adhikari, A.**, Aguilar, I.A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics, 30(8), 4665-4682 (2024).",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1109/TVCG.2023.3275111",
    category: "Peer-Reviewed Journals",
    publishedOn: "2024-01-01",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "journal-2",
    title:
      "Integrating continuous and teleporting VR locomotion into a seamless 'hyperjump' paradigm.",
    authors:
      "**Adhikari, A.**, Zielasko, D., Aguilar, I., Bretin, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics, 29(12), 5265-5281 (2022).",
    linkText: "View Publication",
    linkUrl: "https://ieeexplore.ieee.org/abstract/document/9894041/",
    category: "Peer-Reviewed Journals",
    publishedOn: "2022-01-01",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "journal-3",
    title:
      "Lean to fly: Leaning-based embodied flying can improve performance and user experience in 3D navigation.",
    authors:
      "**Adhikari, A.**, Hashemian, A.M., Nguyen-Vo, T., Kruij, E., von der Heyde, M., & Riecke, B.E.",
    venue: "Frontiers in Virtual Reality, 2, 730334 (2021).",
    linkText: "View Publication",
    linkUrl:
      "https://www.frontiersin.org/articles/10.3389/frvir.2021.730334/full",
    category: "Peer-Reviewed Journals",
    publishedOn: "2021-08-19",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "journal-4",
    title:
      "Leaning-based interfaces improve ground-based VR locomotion in reach-the-target, follow-the-path, and racing tasks.",
    authors:
      "Hashemian, A.M., **Adhikari, A.**, Kruij, E., von der Heyde, M., & Riecke, B.E.",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics, 29(3), 1748-1768 (2021).",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1109/TVCG.2021.3131422",
    category: "Peer-Reviewed Journals",
    publishedOn: "2021-01-01",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "journal-5",
    title:
      "HeadJoystick: Improving flying in VR using a novel leaning-based interface.",
    authors:
      "Hashemian, A.M., Lotfaliei, M., **Adhikari, A.**, Kruij, E., & Riecke, B.E.",
    venue:
      "IEEE Transactions on Visualization and Computer Graphics, 28(4), 1792-1809 (2020).",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1109/TVCG.2020.3025084",
    category: "Peer-Reviewed Journals",
    publishedOn: "2020-01-01",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },

  // Other Peer-Reviewed Publications
  {
    id: "conf-1",
    title:
      "'I Call Upon a Friend': Virtual Reality-Based Supports for Cognitive Reappraisal Identified through Co-designing with Adolescents.",
    authors:
      "Kitson, A., Antle, A.N., Kenny, S., **Adhikari, A.**, Karthik, K., Cimensel, A., & Chan, M.",
    venue: "Proceedings of CHI 2024, ACM, Article 691, 1-18.",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1145/3613904.3642723",
    category: "Other Peer-Reviewed Publications",
    publishedOn: "2024-05-11",
    relatedProjectIds: ["master-emotions-vr"],
  },
  {
    id: "conf-2",
    title:
      "Awedyssey: Design tensions in eliciting self-transcendent emotions in virtual reality to support mental well-being and connection.",
    authors:
      "Miller, N., Stepanova, E.R., Desnoyers-Stewart, J., **Adhikari, A.**, Kitson, A., et al.",
    venue:
      "Proceedings of the 2023 ACM Designing Interactive Systems Conference, 189-211.",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1145/3563657.3595998",
    category: "Other Peer-Reviewed Publications",
    publishedOn: "2023-07-10",
    relatedProjectIds: ["vr-beyond-ordinary"],
  },
  {
    id: "conf-3",
    title: "FeetBack: Augmenting robotic telepresence with haptic feedback on the feet.",
    authors:
      "Jones, B., Maiero, J., Mogharrab, A., Aguilar, I.A., **Adhikari, A.**, Riecke, B.E., Kruij, E., Neustaedter, C., & Lindeman, R.W.",
    venue: "Proceedings of ICMI 2020, 194-203.",
    linkText: "View Publication",
    linkUrl: "https://doi.org/10.1145/3382507.3418820",
    category: "Other Peer-Reviewed Publications",
    publishedOn: "2020-10-25",
    relatedProjectIds: [],
  },

  // Exhibitions, Presentations, and Posters
  {
    id: "exhibit-1",
    title: "Awedyssey [Curated Mixed Reality Exhibition].",
    authors:
      "Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., **Adhikari, A.**, Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.",
    venue:
      "Cosmic Nights: Humans in Space, H.R. MacMillan Space Centre, November 23, 2023.",
    linkText: "More Details",
    linkUrl: "https://events.sfu.ca/event/37966-cosmic-nights-humans-in-space",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2023-11-23",
    relatedProjectIds: ["vr-beyond-ordinary"],
  },
  {
    id: "exhibit-2",
    title:
      "HyperJumping in Virtual Vancouver: Combating motion sickness by merging teleporting and continuous VR locomotion in an embodied hands-free VR flying paradigm.",
    authors:
      "Riecke, B. E., Clement, D., **Adhikari, A.**, Quesnel, D., Zielasko, D., & von der Heyde, M.",
    venue: "",
    linkText: "View Abstract",
    linkUrl: "https://doi.org/10.1145/3532834.3536211",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2022-06-01",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "exhibit-3",
    title:
      "Embodied VR flying improves spatial orientation while reducing cybersickness.",
    authors:
      "**Adhikari, A.**, Riecke, B.E., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., & von der Heyde, M.",
    venue: "Talk presented at ICSC 2021, Rome, Italy.",
    linkText: "Watch Presentation",
    linkUrl: "https://www.youtube.com/watch?v=FbmE4SEISWU",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2021-09-13",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "exhibit-4",
    title:
      "HyperJump: Merging Teleporting and Continuous VR Locomotion into One Paradigm.",
    authors:
      "Riecke, B.E., **Adhikari, A.**, Zielasko, D., Bretin, A., von der Heyde, M., and Kruij, E.",
    venue: "Talk presented at ICSC 2021, Rome, Italy.",
    linkText: "Watch Presentation",
    linkUrl: "https://www.youtube.com/watch?v=hRqkqup40bI",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2021-09-13",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "exhibit-5",
    title:
      "Integrating Continuous and Teleporting VR Locomotion into a Seamless 'HyperJump' Paradigm.",
    authors:
      "**Adhikari, A.**, Zielasko, D., Bretin, A., von der Heyde, M., Kruij, E., & Riecke, B.E.",
    venue: "IEEE VR 2021 Workshop, 370-372.",
    linkText: "View Abstract",
    linkUrl: "https://doi.org/10.1109/VRW52623.2021.00074",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2021-03-27",
    relatedProjectIds: ["exploring-endless-worlds-vr"],
  },
  {
    id: "exhibit-6",
    title: "Simultaneous Locomotion and Interaction in VR: Walking > Leaning > Controller.",
    authors:
      "Riecke, B.E., Hashemian, A.M., **Adhikari, A.**, Aguilar, I., Kruijff, E., & von der Heyde, M.",
    venue:
      "ICSC 2021: 8th International Conference on Spatial Cognition, Rome, Italy.",
    linkText: "Watch Presentation",
    linkUrl: "https://www.youtube.com/watch?v=jzoaBAd6gPY",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2021-09-13",
    relatedProjectIds: ["exploring-endless-worlds-vr", "project-playground"],
  },
  {
    id: "exhibit-7",
    title: "SIRIUS [Curated & peer-reviewed Virtual Reality Exhibition]",
    authors:
      "Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., **Adhikari, A.**, Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.",
    venue: "V-Unframed 2021, Vancouver, Canada.",
    linkText: "More Details",
    linkUrl:
      "https://www.alliancefrancaise.ca/v-unframed/en/the-artworks-2021/sirius/",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2021-11-01",
    relatedProjectIds: ["vr-beyond-ordinary"],
  },
  {
    id: "exhibit-8",
    title:
      "A Neurophenomenological Approach to Better Understand the Effects of Eliciting Positive Experiences in Virtual Reality [Poster].",
    authors:
      "Stepanova, E.R., Brauns, K., Friedl-Werner, A., Miller, N., Desnoyers-Stewart, J., **Adhikari, A.**, Riecke, B.E., & Stahn, A.C.",
    venue:
      "Poster presented at the Phenomenological Methods in Neuroscience and Consciousness Research workshop, University of Zurich (2022).",
    linkText: "View Poster (PDF)",
    linkUrl: "/projects/vr-beyond-ordinary/poster_zurich.pdf",
    category: "Exhibitions, Presentations, and Posters",
    publishedOn: "2022-01-01",
    relatedProjectIds: ["vr-beyond-ordinary"],
  },
];

interface GetPublicationsOptions {
  category?: PublicationCategory;
  projectId?: string;
  includeExhibitions?: boolean;
  authoredByProfileOnly?: boolean;
}

export function getPublications(options: GetPublicationsOptions = {}): Publication[] {
  const {
    category,
    projectId,
    includeExhibitions = true,
    authoredByProfileOnly = false,
  } = options;

  return sortByPublishedOnDesc(
    publicationsData.filter((publication) => {
      if (category && publication.category !== category) {
        return false;
      }

      if (
        !includeExhibitions &&
        publication.category === "Exhibitions, Presentations, and Posters"
      ) {
        return false;
      }

      if (
        projectId &&
        !publication.relatedProjectIds.includes(projectId)
      ) {
        return false;
      }

      if (
        authoredByProfileOnly &&
        !isProfileAuthoredPublication(publication)
      ) {
        return false;
      }

      return true;
    }),
  );
}

export function getPublicationsByCategory(
  authoredByProfileOnly = true,
): Record<PublicationCategory, Publication[]> {
  return publicationCategories.reduce(
    (accumulator, category) => {
      accumulator[category] = getPublications({
        category,
        authoredByProfileOnly,
      });
      return accumulator;
    },
    {} as Record<PublicationCategory, Publication[]>,
  );
}

export function getProjectPublications(projectId: string): ProjectPublication[] {
  return getPublications({
    projectId,
    includeExhibitions: false,
    authoredByProfileOnly: true,
  }).map((publication) => ({
    id: publication.id,
    title: publication.title,
    authors: stripAuthorFormatting(publication.authors),
    venue: publication.venue,
    link: publication.linkUrl,
    linkText: publication.linkText,
    publishedOn: publication.publishedOn,
  }));
}

import {
  getPublications,
  stripAuthorFormatting,
} from "@/data/publications";

export interface ProjectResource {
  id: string;
  title: string;
  url: string;
  details?: string;
  linkText?: string;
  publishedOn: string;
}

interface ExternalProjectResource extends ProjectResource {
  projectId: string;
}

const externalProjectResources: ExternalProjectResource[] = [
  {
    id: "vr-beyond-media-1",
    projectId: "vr-beyond-ordinary",
    title: "Earthgazing VR experience to help astronauts cope with loneliness",
    url: "https://www.sfu.ca/sfunews/stories/2021/11/earthgazing-vr-experience-to-help-astronauts-cope-with-lonelines.html",
    details: "SFU News (November 3, 2021).",
    linkText: "Read Coverage",
    publishedOn: "2021-11-03",
  },
  {
    id: "vr-beyond-media-2",
    projectId: "vr-beyond-ordinary",
    title: "SFU project to help astronauts deal with isolation",
    url: "https://globalnews.ca/video/8439499/sfu-project-to-help-astronauts-deal-with-isolation/",
    details: "Global News video segment (December 9, 2021).",
    linkText: "Watch Coverage",
    publishedOn: "2021-12-09",
  },
  {
    id: "vr-beyond-media-3",
    projectId: "vr-beyond-ordinary",
    title:
      "Canadian VR technology will aid isolation effects on a simulated long duration space flight",
    url: "https://www.cbc.ca/radio/quirks/canadian-vr-technology-will-aid-isolation-effects-on-a-simulated-long-duration-space-flight-1.6245516",
    details: "CBC Radio - Quirks & Quarks (November 11, 2021).",
    linkText: "Listen on CBC",
    publishedOn: "2021-11-11",
  },
  {
    id: "vr-beyond-media-4",
    projectId: "vr-beyond-ordinary",
    title:
      "SFU researchers create virtual reality experience to help astronauts manage loneliness in space",
    url: "https://the-peak.ca/2021/11/sfu-researchers-create-virtual-reality-experience-to-help-astronauts-manage-loneliness-in-space/",
    details: "The Peak (November 22, 2021).",
    linkText: "Read Article",
    publishedOn: "2021-11-22",
  },
  {
    id: "vr-beyond-media-5",
    projectId: "vr-beyond-ordinary",
    title:
      "B.C. student's VR tech gets lift off in experiment on astronaut loneliness",
    url: "https://globalnews.ca/news/8440729/sfu-virtual-reality-space-astronauts-loneliness/",
    details: "Global News article (December 10, 2021).",
    linkText: "Read Coverage",
    publishedOn: "2021-12-10",
  },
  {
    id: "vr-chronic-pain-resource-1",
    projectId: "vr-chronic-pain",
    title:
      "Virtual Meditative Walk: Virtual Reality Therapy for Chronic Pain Management",
    url: "https://dl.acm.org/doi/abs/10.1145/2702123.2702344",
    details:
      "ACM publication describing the Virtual Meditative Walk (VMW) clinical proof-of-concept.",
    linkText: "View Resource",
    publishedOn: "2015-01-01",
  },
  {
    id: "project-playground-resource-1",
    projectId: "project-playground",
    title: "The Nether - University of Waterloo Theatre and Performance",
    url: "https://uwaterloo.ca/theatres/events/nether",
    details:
      "Production event page for the hybrid real-world/virtual-world staging context.",
    linkText: "View Event",
    publishedOn: "2026-02-16",
  },
  {
    id: "project-playground-resource-5",
    projectId: "project-playground",
    title: "Figma Make",
    url: "https://www.figma.com/make/",
    details: "Tool context for LLM-based UI generation experiments.",
    linkText: "Open Tool",
    publishedOn: "2026-02-16",
  },
  {
    id: "project-playground-resource-2",
    projectId: "project-playground",
    title: "Dr Owen Brierley - Kingston University",
    url: "https://www.kingston.ac.uk/about/staff/dr-owen-brierley",
    details: "VR lead profile.",
    linkText: "View Profile",
    publishedOn: "2026-02-16",
  },
  {
    id: "project-playground-resource-3",
    projectId: "project-playground",
    title: "Emily Kuang - Research Profile",
    url: "https://emilykuang.github.io/",
    details: "Collaborator profile (York University).",
    linkText: "View Profile",
    publishedOn: "2026-02-16",
  },
  {
    id: "project-playground-resource-4",
    projectId: "project-playground",
    title: "Selena Zhang - Research Profile",
    url: "https://selenazz.github.io/",
    details: "Collaborator profile.",
    linkText: "View Profile",
    publishedOn: "2026-02-16",
  },
  {
    id: "project-playground-resource-6",
    projectId: "project-playground",
    title: "Meiyappan (Mei) Nagappan - University of Waterloo",
    url: "https://cs.uwaterloo.ca/~m2nagapp/",
    details: "Collaborator profile for developer tooling/HCI research.",
    linkText: "View Profile",
    publishedOn: "2026-02-16",
  },
];

function toTimestamp(dateString: string): number {
  const timestamp = Date.parse(dateString);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function getProjectTalksAndResources(projectId: string): ProjectResource[] {
  const exhibitionResources = getPublications({
    category: "Exhibitions, Presentations, and Posters",
    projectId,
    authoredByProfileOnly: true,
  }).map((publication) => ({
    id: publication.id,
    title: publication.title,
    url: publication.linkUrl,
    details: [stripAuthorFormatting(publication.authors), publication.venue]
      .filter(Boolean)
      .join(" "),
    linkText: publication.linkText,
    publishedOn: publication.publishedOn,
  }));

  const additionalResources = externalProjectResources.filter(
    (resource) => resource.projectId === projectId,
  );

  return [...exhibitionResources, ...additionalResources].sort(
    (a, b) => toTimestamp(b.publishedOn) - toTimestamp(a.publishedOn),
  );
}

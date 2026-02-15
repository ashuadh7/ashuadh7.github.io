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
  // Add non-publication resources here (e.g., external papers, blog posts, videos).
  // {
  //   id: "example-resource-id",
  //   projectId: "exploring-endless-worlds-vr",
  //   title: "Example resource title",
  //   url: "https://example.com",
  //   details: "Optional short context",
  //   linkText: "Open Resource",
  //   publishedOn: "2025-01-01",
  // },
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

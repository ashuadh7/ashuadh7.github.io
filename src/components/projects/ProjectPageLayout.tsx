import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";

export interface ProjectVideoEmbed {
  title: string;
  embedUrl: string;
  caption?: string;
}

export interface ProjectLinkResource {
  title: string;
  url: string;
  details?: string;
  linkText?: string;
}

export interface ProjectPublication {
  title: string;
  authors?: string;
  venue?: string;
  link?: string;
  linkText?: string;
}

interface ProjectPageLayoutProps {
  title: string;
  subtitle: string;
  year: string;
  tags: string[];
  heroImage: string;
  heroAlt?: string;
  children?: ReactNode;
  videos?: ProjectVideoEmbed[];
  talks?: ProjectLinkResource[];
  publications?: ProjectPublication[];
}

export function ProjectPageLayout({
  title,
  subtitle,
  year,
  tags,
  heroImage,
  heroAlt,
  children,
  videos = [],
  talks = [],
  publications = [],
}: ProjectPageLayoutProps) {
  return (
    <main className="bg-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted hover-text-accent mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <article className="bg-surface rounded-lg shadow-sm p-5 sm:p-8 md:p-10 [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:text-base [&_h3]:sm:text-lg [&_h3]:font-semibold">
          <header className="mb-8 sm:mb-10">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <Calendar className="w-4 h-4" />
                {year}
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent-soft text-accent rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="mb-3 text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-muted">{subtitle}</p>
          </header>

          <div className="aspect-video rounded-lg overflow-hidden mb-8 sm:mb-10 bg-soft">
            <img
              src={heroImage}
              alt={heroAlt ?? title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8 sm:space-y-10">{children}</div>

          {videos.length > 0 && (
            <section className="mt-10 sm:mt-12">
              <h2 className="mb-4 text-primary">Videos & Demonstrations</h2>
              <div className="grid gap-6 sm:gap-8">
                {videos.map((video) => (
                  <div key={video.embedUrl} className="space-y-2">
                    <h3 className="text-primary text-lg font-semibold">
                      {video.title}
                    </h3>
                    <div className="aspect-video rounded-lg overflow-hidden bg-soft border border-default">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    {video.caption && (
                      <p className="text-sm text-muted">{video.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {talks.length > 0 && (
            <section className="mt-10 sm:mt-12">
              <h2 className="mb-4 text-primary">Talks & Online Resources</h2>
              <ul className="space-y-3">
                {talks.map((talk) => (
                  <li
                    key={talk.url}
                    className="rounded-lg border border-default bg-soft p-4"
                  >
                    <h3 className="text-primary font-semibold mb-1">
                      {talk.title}
                    </h3>
                    {talk.details && (
                      <p className="text-muted text-sm mb-2">{talk.details}</p>
                    )}
                    <a
                      href={talk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover-text-accent-strong transition-colors"
                    >
                      {talk.linkText ?? "Open Resource"}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {publications.length > 0 && (
            <section className="mt-10 sm:mt-12 pt-8 border-t border-default">
              <h2 className="mb-4 text-primary">Related Publications</h2>
              <div className="space-y-5">
                {publications.map((publication, index) => (
                  <div
                    key={`${publication.title}-${index}`}
                    className="pl-4 border-l-[3px] border-publication border-solid"
                  >
                    <h3 className="text-primary font-semibold">
                      {publication.title}
                    </h3>
                    {publication.authors && (
                      <p className="text-secondary">{publication.authors}</p>
                    )}
                    {publication.venue && (
                      <p className="text-muted">{publication.venue}</p>
                    )}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover-text-accent-strong transition-colors mt-2"
                      >
                        {publication.linkText ?? "View Publication"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      <Footer />
    </main>
  );
}

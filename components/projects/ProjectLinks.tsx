import { ArrowLink } from "../ui/ArrowLink";

type ProjectLinksProps = {
  liveUrl?: string;
  githubUrl?: string;
  androidUrl?: string;
  caseStudyHref?: string;
};

/** Row of project links. Renders only what exists — no dead buttons. */
export function ProjectLinks({ liveUrl, githubUrl, androidUrl, caseStudyHref }: ProjectLinksProps) {
  if (!liveUrl && !githubUrl && !androidUrl && !caseStudyHref) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {caseStudyHref && <ArrowLink href={caseStudyHref} external={false}>Case study</ArrowLink>}
      {liveUrl && <ArrowLink href={liveUrl}>Live ↗</ArrowLink>}
      {githubUrl && <ArrowLink href={githubUrl}>GitHub ↗</ArrowLink>}
      {androidUrl && <ArrowLink href={androidUrl}>Android ↗</ArrowLink>}
    </div>
  );
}

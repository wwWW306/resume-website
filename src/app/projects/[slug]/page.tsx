import { resumeData } from "@/data/resume";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return resumeData.projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetailClient slug={slug} />;
}

import { Navigate, useParams } from "react-router-dom";
import { projectPathById } from "@/data/projects";

export function LegacyProjectRedirect() {
  const { projectId } = useParams<{ projectId: string }>();
  const targetPath = projectId ? projectPathById[projectId] : undefined;

  return <Navigate to={targetPath ?? "/"} replace />;
}

import type { GitHubConfig } from "./types";

const API_BASE = "https://api.github.com";

function toBase64(content: string): string {
  return btoa(unescape(encodeURIComponent(content)));
}

function fromBase64(encoded: string): string {
  return decodeURIComponent(escape(atob(encoded)));
}

export interface GitHubFile {
  sha: string;
  content: string;
}

export async function fetchFile(
  config: GitHubConfig,
  path: string,
): Promise<GitHubFile> {
  const url = `${API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${config.pat}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub fetch failed (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  const raw = (data.content as string).replace(/\n/g, "");
  return {
    sha: data.sha as string,
    content: fromBase64(raw),
  };
}

export async function commitFile(
  config: GitHubConfig,
  path: string,
  content: string,
  sha: string,
): Promise<void> {
  const url = `${API_BASE}/repos/${config.owner}/${config.repo}/contents/${path}`;
  const date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const fileName = path.split("/").pop() ?? path;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${config.pat}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `Update ${fileName} via admin — ${date}`,
      content: toBase64(content),
      sha,
    }),
  });

  if (!res.ok) {
    throw new Error(
      `GitHub commit failed (${res.status}): ${await res.text()}`,
    );
  }
}

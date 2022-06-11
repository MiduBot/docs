export interface DocumentProps {
  title: string;
  date?: string;
  description?: string;
  slug: string;
}

export interface DocPageProps {
  docs: DocumentProps[];
}

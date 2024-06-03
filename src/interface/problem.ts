export interface Problem {
    id: string;
    title: string;
    content: string;
    examples: { id: string; input: string; output: string }[];
  }
import { Comment } from './comment';

export interface Board {
    title: string;
    content: string;
    comments: Comment[];
  
}

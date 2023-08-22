export interface Thread {
  subject: string;
  team: string;
  question: string;
  created_at: string;
  text: string;
  score: number;
}

interface ThreadsResponse {
  threads: Thread[][];
}

export interface CustomError {
  message: string;
}

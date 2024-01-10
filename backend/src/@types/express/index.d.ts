declare namespace Express {
  export interface Request {
    user: {
      id: string;
      name: string;
      avatarUrl: string | null;
    };
  }
}
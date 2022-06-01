export interface ILoginResult {
  code: number,
  result: {
    user: {
      id: number;
      username: string;
      role: string;
      email: string;
    },
    token: string,
  } | object,
}

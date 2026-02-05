export interface IFetcher<T> {
  (): Promise<{ data: T[]; error: string | null }>;
}
import { readFile } from 'fs/promises';
import path from 'path';

export type Algorithm = {
  title: string;
  section: number;
  number: number;
  needToReview: boolean;
  category: string;
  source: string;
};

export async function getAllAlgorithm(): Promise<Algorithm[]> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'algorithms',
    'algorithm.json'
  );

  return readFile(filePath, 'utf-8').then<Algorithm[]>(data =>
    JSON.parse(data)
  );
}

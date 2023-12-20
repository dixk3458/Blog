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

export type AlgorithmData = Algorithm & { content: string };

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

export async function getAlgorithmData(
  fileName: string
): Promise<AlgorithmData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'algorithms',
    'md',
    `${fileName}.md`
  );

  const algorithms = await getAllAlgorithm();

  const algorithm = algorithms.find(algorithm => algorithm.title === fileName);

  if (!algorithm) {
    throw new Error(`${fileName}에 해당하는 자료가 없습니다.`);
  }

  const content = await readFile(filePath, 'utf-8');

  return { ...algorithm, content: content };
}

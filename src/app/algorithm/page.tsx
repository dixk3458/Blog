import FilterableAlgorithms from '@/components/FilterableAlgorithms';
import { getAllAlgorithm } from '@/service/algorithm';

export default async function AlgorithmPage() {
  const algorithms = await getAllAlgorithm();
  const categories = [
    ...new Set(algorithms.map(algorithm => algorithm.category)),
  ];

  return (
    <>
      <FilterableAlgorithms
        algorithms={algorithms}
        categories={['All', ...categories]}
      />
    </>
  );
}

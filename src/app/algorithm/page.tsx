import FilterableAlgorithms from '@/components/FilterableAlgorithms';
import { getAllAlgorithm } from '@/service/algorithm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algorithm Page',
  description: '정재웅의 All Algorithm',
};

export default async function AlgorithmPage() {
  const algorithms = await getAllAlgorithm();
  const categories = [
    ...new Set(algorithms.map(algorithm => algorithm.category)),
  ];

  return (
    <section className='m-4'>
      <FilterableAlgorithms
        algorithms={algorithms}
        categories={['All', ...categories]}
      />
    </section>
  );
}

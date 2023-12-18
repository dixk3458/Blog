import { Algorithm } from '@/service/algorithm';
import AlgorithmCard from './AlgorithmCard';

type Props = {
  algorithms: Algorithm[];
};

export default function AlgorithmGrid({ algorithms }: Props) {
  return (
    <ul className='grow grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {algorithms.map(algorithm => {
        return (
          <li key={algorithm.title}>
            <AlgorithmCard algorithm={algorithm} />
          </li>
        );
      })}
    </ul>
  );
}

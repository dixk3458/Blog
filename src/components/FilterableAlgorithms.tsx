'use client';

import { Algorithm } from '@/service/algorithm';
import Categories from './Categories';
import { useState } from 'react';
import AlgorithmGrid from './AlgorithmGrid';

type Props = {
  algorithms: Algorithm[];
  categories: string[];
};

const ALL_ALGORITHM = 'All';

export default function FilterableAlgorithms({
  algorithms,
  categories,
}: Props) {
  const [selected, setSelected] = useState(ALL_ALGORITHM);
  const [reviewCheck, setReviewChcek] = useState(false);

  const filtered =
    reviewCheck && selected === ALL_ALGORITHM
      ? algorithms.filter(algorithm => algorithm.needToReview)
      : reviewCheck && selected !== ALL_ALGORITHM
      ? algorithms.filter(
          algorithm => algorithm.needToReview && algorithm.category === selected
        )
      : !reviewCheck && selected === ALL_ALGORITHM
      ? algorithms
      : algorithms.filter(algorithm => algorithm.category === selected);

  return (
    <section className="flex m-4 gap-4">
      <aside className="flex flex-col items-center">
        <Categories
          categories={categories}
          selected={selected}
          onClick={category => setSelected(category)}
        />
        <button
          className={` px-6 rounded-md ${
            reviewCheck ? 'bg-yellow-400' : 'bg-gray-400'
          }`}
          onClick={() => setReviewChcek(prev => !prev)}
        >
          {reviewCheck ? '검토!' : '모든!'}
        </button>
      </aside>
      <AlgorithmGrid algorithms={filtered} />
    </section>
  );
}

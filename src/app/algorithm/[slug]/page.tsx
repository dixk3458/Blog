import AlgorithmContent from '@/components/AlgorithmContent';

import { getAlgorithmData } from '@/service/algorithm';

type Props = {
  params: {
    slug: string;
  };
};

export default async function AlgorithmDetailPage({ params: { slug } }: Props) {
  const decoded = decodeURI(slug);
  const algorithmData = await getAlgorithmData(decoded);

  return (
    <article className="rounded-2xl overflow-hidden m-4 bg-sky-50 shadow-lg">
      <AlgorithmContent algorithmData={algorithmData} />
    </article>
  );
}

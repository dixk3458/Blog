import AlgorithmContent from '@/components/AlgorithmContent';

import { getAlgorithmData } from '@/service/algorithm';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decoded = decodeURI(params.slug);
  const { title, section, number } = await getAlgorithmData(decoded);
  return {
    title: title,
    description: `${section}-${number} ${title}`,
  };
}

export default async function AlgorithmDetailPage({ params: { slug } }: Props) {
  const decoded = decodeURI(slug);
  const algorithmData = await getAlgorithmData(decoded);

  return (
    <article className="rounded-2xl overflow-hidden m-4 bg-sky-50 shadow-lg">
      <AlgorithmContent algorithmData={algorithmData} />
    </article>
  );
}

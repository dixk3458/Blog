type Props = {
  needToReview: boolean;
};
export default function ReviewState({ needToReview }: Props) {
  return (
    <span
      className={`rounded-lg py-1 px-2 font-bold ${
        needToReview ? 'bg-yellow-400' : 'bg-gray-400'
      }`}
    >
      {needToReview ? '검토' : '해결'}
    </span>
  );
}

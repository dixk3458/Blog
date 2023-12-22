import { CiCircleCheck } from 'react-icons/ci';
import { MdOutlineSmsFailed } from 'react-icons/md';

type Props = {
  bannerData: BannerData;
};

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({ bannerData: { message, state } }: Props) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❌';
  return (
    <p
      className={`w-full rounded-xl text-center p-2 ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >{`${icon} ${message}`}</p>
  );
}

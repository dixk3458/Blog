import { sendEmail } from '@/service/email';
import Error from 'next/error';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  email: yup.string().email().required(),
  title: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({ message: '잘못된 메일 포맷입니다. 다시 시도해주세요' }),
      { status: 400, statusText: '데이터 포맷 실패' }
    );
  }

  const { email, title, message } = body;

  // 위의 데이터를 가지고
  // 노드 메일러를 이용해 메일을 전송하면된다.

  // 외부 라이브러리를 사용하기때문에 따로 모듈을 만들어서 사용해주자.

  return sendEmail(body)
    .then(() => {
      return new Response(JSON.stringify({ message: '성공' }), { status: 200 });
    })
    .catch((error: Error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: '실패' }), { status: 500 });
    });
}

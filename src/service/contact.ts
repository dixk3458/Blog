import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  // API Route에 이메일 전송을 위한 요청을 보냄(fetch)

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 요청을하고 응답을 기다린다.
  // 응답을 받으면 응답에 대한 처리를 해주자

  const data = await response.json();
  console.log(response);

  if (!response.ok) {
    throw new Error(data.message || '메일 전송에 실패함');
  }

  return data;
}

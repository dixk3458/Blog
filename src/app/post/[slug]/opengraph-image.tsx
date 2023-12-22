// import { ImageResponse } from 'next/og';

// export const runtime = 'edge';

// export const alt = 'About Acme';
// export const size = {
//   width: 1200,
//   height: 630,
// };
// export const contentType = 'image/png';

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export default async function Image({ params: { slug } }: Props) {
//   const post = await fetch(`https://.../posts/${slug}`).then(res => res.json());

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 48,
//           background: 'white',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         {post.title}
//       </div>
//     ),
//     {
//       ...size,
//     }
//   );
// }

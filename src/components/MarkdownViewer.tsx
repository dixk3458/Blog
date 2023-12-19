import { PostData } from '@/service/post';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

type Props = {
  content: string;
};
export default function MarkdownViewer({ content }: Props) {
  return (
    <>
      <Markdown
        className="max-w-none prose lg:prose-xl"
        children={content}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                // {...rest}
                PreTag="div"
                language={match[1]}
                style={materialDark}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
          img: image => (
            <Image
              className="w-full max-h-60 object-cover"
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={350}
            />
          ),
          pre({ node, children, style, ...props }) {
            return (
              <pre {...props} style={{ ...style, backgroundColor: '#2f2f2f' }}>
                {children}
              </pre>
            );
          },
        }}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      />
    </>
  );
}

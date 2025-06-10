import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/monokai.css";

interface Props {
  code: string;
}

export const CodeBlock = ({ code }: Props) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      delete codeRef.current.dataset.highlighted;
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef} className="language-tsx">
        {code}
      </code>
    </pre>
  );
};

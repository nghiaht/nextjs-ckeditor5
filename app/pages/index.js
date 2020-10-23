import dynamic from "next/dynamic";

// Common editors usually work on client-side, so we use Next.js's dynamic import with mode ssr=false to load them on client-side
const Editor = dynamic(() => import("../components/editor"), {ssr: false})

export default function IndexPage() {
  return (
    <div>
      Home
      <Editor />
    </div>
  );
}

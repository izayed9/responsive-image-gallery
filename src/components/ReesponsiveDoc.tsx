import Link from "next/link";
import { FC } from "react";

interface ReesponsiveDocProps {}

const ReesponsiveDoc: FC<ReesponsiveDocProps> = ({}) => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <p>
        This responsive image gallery using React JS with TypeScript the
        following features: reordering, deleting multiple images, and setting a
        feature image.
      </p>
      <p>
        <Link href="https://github.com/izayed9/responsive-image-gallery">
          {" "}
          Github Code Link
        </Link>
      </p>
    </div>
  );
};

export default ReesponsiveDoc;

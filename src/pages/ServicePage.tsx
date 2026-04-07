import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServicePage() {
  const { slug } = useParams();
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await fetch(
        `https://dimgrey-eagle-927666.hostingersite.com/wp-json/wp/v2/pages?slug=${slug}`,
      );

      const data = await res.json();
      setPage(data[0]);
    };

    fetchPage();
  }, [slug]);

  if (!page) return <div>Loading page...</div>;

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "40px" }}>
      {/* TITLE */}
      <h1>{page.title.rendered}</h1>

      {/* WORDPRESS HTML CONTENT */}
      <div
        dangerouslySetInnerHTML={{
          __html: page.content.rendered,
        }}
      />
    </div>
  );
}

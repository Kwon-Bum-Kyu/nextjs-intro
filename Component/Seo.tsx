import Head from "next/head";

type seo = {
  title: string;
};

export default function Seo({ title }: seo) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}

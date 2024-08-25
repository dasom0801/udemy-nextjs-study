import NewsList from '@/components/news-list';

export default async function NewsPage() {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw Error('Failed to fetch news.');
  }

  const news = await response.json();

  return (
    <>
      <main>
        <h1>News Page</h1>
        <NewsList news={news} />
      </main>
    </>
  );
}

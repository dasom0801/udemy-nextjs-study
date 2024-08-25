import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

export default async function ImagePage({ params }) {
  const newsItem = await getNewsItem(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

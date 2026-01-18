export async function getWikiSummary(topic: string) {
  try {
    const formattedTopic = topic.replace(/\s+/g, '_');
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(formattedTopic)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Wiki summary not found');
    const data = await res.json();
    return {
      title: data.title,
      extract: data.extract,
      thumbnail: data.thumbnail?.source,
      content_urls: data.content_urls?.desktop?.page
    };
  } catch (error) {
    console.error('Error fetching wiki summary:', error);
    return null;
  }
}

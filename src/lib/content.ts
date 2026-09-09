import { getCollection } from 'astro:content';

export async function getNews() {
  const entries = await getCollection('news');
  return entries
    .filter((entry) => !entry.data.placeholder)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications() {
  const entries = await getCollection('publications');
  return entries.sort((a, b) => {
    if (b.data.year !== a.data.year) return b.data.year - a.data.year;
    return a.data.title.localeCompare(b.data.title);
  });
}

export async function getPeople() {
  const entries = await getCollection('people');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

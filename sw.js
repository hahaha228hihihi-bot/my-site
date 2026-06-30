const CACHE_NAME = 'school-archive-v1';
const ASSETS = [
  'index.html',
  'math1.html',
  'rus1.html',
  'okr1.html',
  'chtenie1.html',
  'gramota1.html',
  'math2.html',
  'rus2.html',
  'okr2.html',
  'chtenie2.html',
  'eng2.html',
  'eng2_theory.html',
  'eng2_vocab.html',
  'fizika7.html',
  'fizika7_program.html',
  'glava1.html',
  'glava2.html',
  'glava3.html',
  'glava4.html',
  'glava5.html',
  'glava6.html',
  'rus7.html'
];

// Сохраняем все файлы в память при первой установке
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Выдаем файлы из памяти, если нет интернета
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

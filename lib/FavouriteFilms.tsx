interface Fetch {
  idFilm?: number; //фильма
  url: string; //адрес для поиска
  method: 'GET' | 'POST';
  myId?: number;
}
// const Set1: Fetch = {
//   id: 1,
//   url: "",
// };
export function FavouriteFilm({ url, method }: Fetch) {
  const fetchFilm = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3` + url, {
        method: method,
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk',
        },
      });

      if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
      }
      const data = await res.json();
      // setList(data)
      console.log(data);
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Неизвестная ошибка');
    }
  };
  fetchFilm();
}

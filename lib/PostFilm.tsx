interface Fetch {
  idFilm: number; //фильма
  url: string; //адрес для поиска
  method: 'GET' | 'POST';
  AddOrDelete: boolean;
  myId?: number;
}
// const Set1: Fetch = {
//   id: 1,
//   url: "",
// };
export function AddDeleteFavouriteFilm({ url, method, idFilm, AddOrDelete }: Fetch) {
  const fetchFilm = async () => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3` + url, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json', //не хватало этого контента
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5NGFiN2VkMWY0MTYzNWVmYTYwNWY3ZWM3NGEwYSIsIm5iZiI6MTc1Mzg5ODQzOC45MjEsInN1YiI6IjY4OGE1ZGM2ODYyYmNkMmJmYmExYTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkQMetRZX9F4quD8GBqSSWp2VLcNctcAL_VwQ_SUrSk',
        },
        body: JSON.stringify(
          { media_type: 'movie', media_id: idFilm, favorite: AddOrDelete } //а здесь была ошибка с понятием Json, и кавычками
          // `{ "media_type": "movie", "media_id": 1204680, "favorite": true }`,
        ),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        console.error('Детали ошибки от сервера:', errorData);
        throw new Error(`Ошибка сервера: ${res.status}`);
      }
      const data = await res.json();
      // setList(data)
      console.log(data);
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Неизвестная ошибка');
    } finally {
      console.log(idFilm, url, AddOrDelete, method);
    }
  };

  fetchFilm();
}

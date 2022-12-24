const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDAzNDYwNGNhMjg4NDU4YTFkYzVhYjk4M2IzZjYzMiIsInN1YiI6IjYzNjcxZGJhNjY1NjVhMDA3ZDUwNDQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RyRTlYEiS8u_kWZ2VVgbBMQzCA7ESolnL6kuu4KS4cA',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json());
}

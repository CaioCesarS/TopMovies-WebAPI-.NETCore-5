using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TopMovies.Model;

namespace TopMovies.Service
{
    public class MovieService : IMovieService
    {
        private List<Movie> _movies;
        private List<Movie> _topMovies;

        public async Task<List<Movie>> GetAll()
        {
            string url = "http://copafilmes.azurewebsites.net/api/filmes";

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;

            using HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            using Stream stream = response.GetResponseStream();
            using StreamReader reader = new StreamReader(stream);
            string req = reader.ReadToEnd();
            _movies = JsonConvert.DeserializeObject<List<Movie>>(req);

            return _movies;
        }

        public void GenerateChampionship(string ids)
        {
            List<Movie> selectedMovies = new List<Movie>();
            for (int i = 0; i < _movies.Count; i++)
            {
                if (ids.Contains(_movies[i].Id))
                {
                    selectedMovies.Add(_movies[i]);
                }
            }

            selectedMovies = selectedMovies.OrderBy(m => m.Titulo).ToList();

            TopMovies(selectedMovies);
        }

        private void TopMovies(List<Movie> movies)
        {
            // Vencedores
            if (movies.Count == 2)
            {
                if (movies[0].Nota < movies[1].Nota)
                {
                    movies = movies.OrderByDescending(m => m.Nota).ToList();
                }
                else if (movies[0].Nota == movies[1].Nota)
                {
                    movies = movies.OrderBy(m => m.Titulo).ToList();
                }

                _topMovies = new List<Movie>();
                _topMovies.AddRange(movies);
                return;
            }

            List<Movie> moviesWin = new List<Movie>();
            int countMovies = movies.Count;
            for (int i = 0; i < countMovies / 2; i++)
            {
                if (movies[i].Nota > movies[countMovies - i - 1].Nota)
                {
                    moviesWin.Add(movies[i]);
                }
                else if (movies[i].Nota < movies[countMovies - i - 1].Nota)
                {
                    moviesWin.Add(movies[countMovies - i - 1]);
                }
                else
                {
                    if (string.Compare(movies[i].Titulo, movies[countMovies - i - 1].Titulo) <= 0)
                    {
                        moviesWin.Add(movies[i]);
                    }
                    else
                    {
                        moviesWin.Add(movies[countMovies - i - 1]);
                    }
                }
            }

            TopMovies(moviesWin);
        }

        public List<Movie> GetResult()
        {
            return _topMovies;
        }
    }
}

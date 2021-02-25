using System.Collections.Generic;
using System.Threading.Tasks;
using TopMovies.Model;

namespace TopMovies.Service
{
    public interface IMovieService
    {
        Task<List<Movie>> GetAll();
        void GenerateChampionship(string ids);
        List<Movie> GetResult();
    }
}

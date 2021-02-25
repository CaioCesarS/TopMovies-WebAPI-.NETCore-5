using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TopMovies.Model;
using TopMovies.Service;

namespace TopMovies.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]
        public async Task<List<Movie>> GetAll()
        {
            List<Movie> movies = await _movieService.GetAll();
            return movies;
        }

        [HttpGet("{selectedIds}")]
        public ActionResult GenerateChampionship(string selectedIds)
        {
            _movieService.GenerateChampionship(selectedIds);
            return NoContent();
        }

        [HttpGet("getResult")]
        public List<Movie> GetResult()
        {
            List<Movie> movies = _movieService.GetResult();
            return movies;
        }
    }
}

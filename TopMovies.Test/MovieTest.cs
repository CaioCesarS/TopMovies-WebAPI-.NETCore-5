using System.Collections.Generic;
using TopMovies.Controllers;
using TopMovies.Model;
using TopMovies.Service;
using Xunit;

namespace TopMovies.Test
{
    public class MovieTest
    {
        private readonly MovieController _movieController;
        private readonly IMovieService _movieService;

        public MovieTest()
        {
            _movieService = new MovieService();
            _movieController = new MovieController(_movieService);
        }

        [Fact]
        public async void GetAll()
        {
            // Arrange

            // Act
            List<Movie> movies = await _movieController.GetAll();

            // Assert
            Assert.Equal(16, movies.Count);
        }

        [Fact]
        public async void GetReult()
        {
            // Arrange
            List<Movie> movies = await _movieController.GetAll();
            string selectedIds = string.Empty;
            for (int i = 0; i < 8; i++)
            {
                selectedIds += movies[i].Id;
            }

            // Act
            _movieController.GenerateChampionship(selectedIds);
            List<Movie> topMovies = _movieController.GetResult();

            // Assert
            Assert.Equal(2, topMovies.Count);
        }
    }
}

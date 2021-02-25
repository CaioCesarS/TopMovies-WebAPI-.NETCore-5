using Microsoft.AspNetCore.Mvc;

namespace TopMovies.FrontEnd.Controllers
{
    public class ResultController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

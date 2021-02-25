using Microsoft.AspNetCore.Mvc;

namespace TopMovies.FrontEnd.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

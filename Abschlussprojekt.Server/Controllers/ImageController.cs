using Microsoft.AspNetCore.Mvc;

namespace Abschlussprojekt.Server.Controllers;

public class ImageController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
}
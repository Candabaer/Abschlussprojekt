using Abschlussprojekt.Server.Model;
using Microsoft.AspNetCore.Mvc;

namespace Abschlussprojekt.Server.Controllers;


[ApiController]
[Route("api/[controller]")]
[Tags("Image")]
public class ImageController : ControllerBase
{
    // GET
    [HttpGet]
    public IActionResult Get([FromQuery]string[]? searchHandles)
    {
        return Ok(new { message = "Image API" });
    }
    
    [HttpPost("upload")]
    public IActionResult Upload([FromBody] ImageMetaData metaData, [FromForm] ImageData imageData)
    {
        // Upload-Logik hier
        // return Ok(new { message = "Datei erfolgreich hochgeladen" });
        return Ok(new { message = "Datei erfolgreich hochgeladen" });
    }
    
}
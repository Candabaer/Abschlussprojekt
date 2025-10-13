namespace Abschlussprojekt.Server.Model;


public enum UsagePurpose
{
    OnlineBanner,
    PrintMagazine,
    PrintFlyer,
    Video
}

public class ImageMetaData
{
    public string FileName { get; init; }
    public string Url { get; init; }
    public decimal Price { get; init; }
    public string Licence { get; init; }
    public UsagePurpose UsagePurpose { get; init; }
    public List<string> Tags { get; init; }
    private string FilePath { get; set; }
    public string ProjectName { get; init; }
}

public class ImageData
{
    public IFormFile Image { get; init; }
}
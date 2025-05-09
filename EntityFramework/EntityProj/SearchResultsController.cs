using EntityProj;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SearchController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetSearchResults([FromQuery] string query, [FromQuery] string algorithm = "invertedIndex")
    {
        _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;

        if (string.IsNullOrEmpty(query))
        {
            return BadRequest("Query parameter is required.");
        }

        if (algorithm != "invertedIndex" && algorithm != "pageRank")
        {
            return BadRequest("Invalid algorithm. Must be either 'invertedIndex' or 'pageRank'.");
        }

        if (algorithm == "pageRank")
        {
            var results = await _context.PageRanks
                .Where(r => r.Word.Contains(query))
                .Select(r => new { r.Url, r.WordCount })
                .ToListAsync();
            return Ok(results);
        }
        else
        {
            var results = await _context.SearchResults
                .Where(r => r.Word.Contains(query))
                .Select(r => new { r.Url, r.WordCount })
                .ToListAsync();
            return Ok(results);
        }


    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IConfiguration _config;
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IConfiguration configuration)
    {
        _logger = logger;
        _config = configuration;
    }

    [HttpGet]
    public async Task<IEnumerable<WeatherForecastDto>> Get()
    {
        string connString = _config.GetSection("ConnectionStrings").GetSection("DefaultConnection").Value;
        List<WeatherForecastDto> res = new List<WeatherForecastDto>();

        using (var conn = new SqlConnection(connString)){
            string query = "SELECT * FROM dbo.WeatherForecast";
            try {
                await conn.OpenAsync();
                var command = conn.CreateCommand();
                command.CommandText = query;
                command.CommandType = System.Data.CommandType.Text;

                var reader = await command.ExecuteReaderAsync();
                while (await reader.ReadAsync()){
                    res.Add(new WeatherForecastDto(){
                        Id = (int)(reader[0]),
                        Date = (DateTime)(reader[1]),
                        TemperatureC = (int)(reader[2]),
                        TemperatureF = (int)(reader[3]),
                        Summary = reader[4].ToString()
                    });
                }
                reader.Close();
            }
            catch (Exception ex){
                _logger.LogError(ex.Message);
                throw;
            }
            return res;
        }


        // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        // {
        //     Date = DateTime.Now.AddDays(index),
        //     TemperatureC = Random.Shared.Next(-20, 55),
        //     Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        // })
        // .ToArray();
    }
}

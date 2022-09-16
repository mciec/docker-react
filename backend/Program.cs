var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddCors();

Console.WriteLine($"builder.Environment.ContentRootPath: {builder.Environment.ContentRootPath}");

var path = Path.Combine(Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location), "wwwroot");
Console.WriteLine($"path: {path}");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors(x => x
    .AllowAnyHeader()
    .AllowAnyMethod()
    .WithOrigins("*"));

// app.UseHttpsRedirection();
app.UseStaticFiles(
    new StaticFileOptions {
        FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(path),
        RequestPath = ""
    }
);

app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();

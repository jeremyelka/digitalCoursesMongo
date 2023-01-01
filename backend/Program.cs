using MongoExample.Models;
using MongoExample.Services;

var builder = WebApplication.CreateBuilder(args);


builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<MongoDBService>();

//app.MapGet("/", () => "Hello World!");
builder.Services.AddControllers();
var app = builder.Build();
//app.UseHttpsRedirection();

app.MapControllers();
app.Run();

//builder.Build().Run();

using Microsoft.AspNetCore.SpaServices.AngularCli;

var builder = WebApplication.CreateBuilder(args);
///adding angular//////////
builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/dist"; });
//////////////
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

///adding angular//////////

app.UseSpaStaticFiles();
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
    if (app.Environment.IsDevelopment())
    {
        spa.UseAngularCliServer(npmScript: "start");
    }
});
//////////////////////////
app.Run();
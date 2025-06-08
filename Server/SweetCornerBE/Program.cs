

using Microsoft.EntityFrameworkCore;
using SweetCornerBE;
using SweetCornerBE.Model;
using SweetCornerBE.Model.Entities;
using SweetCornerBE.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<MailCreationService>();
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSingleton<EmailSettings>(
    builder.Configuration.GetSection("EmailSettings").Get<EmailSettings>());
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddTransient<MailSendingService>();
var app = builder.Build();

using var scope = app.Services.CreateScope();
var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

if (!db.ProductTypes.Any())
{
    db.ProductTypes.AddRange(
        new ProductType { Id = Guid.NewGuid(), Name = "Cake", Description = "Ciasto" },
        new ProductType { Id = Guid.NewGuid(), Name = "Macaroons", Description = "Makaroniki" },
        new ProductType { Id = Guid.NewGuid(), Name = "Cupcakes", Description = "Babeczki" }
    );
    db.SaveChanges();
}

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();

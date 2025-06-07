

using SweetCornerBE.Model;
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

builder.Services.AddTransient<MailSendingService>();
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();

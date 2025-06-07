using Microsoft.EntityFrameworkCore;
using SweetCornerBE.Model.Entities;

namespace SweetCornerBE
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<CakeConfig> CakeConfigs { get; set; }
        public DbSet<MacaroonsCupcakesConfig> MacaroonsCupcakesConfigs { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
    }
}

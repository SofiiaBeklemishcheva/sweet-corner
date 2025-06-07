using System.ComponentModel.DataAnnotations;

namespace SweetCornerBE.Model.Entities
{
    public class Order
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }
        public string? Description { get; set; }
        public string? ClientMail { get; set; }
        public string? FactoryMail { get; set; }
        public DateTime? Created { get; set; }
        public List<CakeConfig> Cakes { get; set; } = new();
        public List<MacaroonsCupcakesConfig> MacaroonsCupcakes { get; set; } = new();

    }
}

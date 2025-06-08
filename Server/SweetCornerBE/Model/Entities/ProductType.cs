using System.ComponentModel.DataAnnotations;

namespace SweetCornerBE.Model.Entities
{
    public class ProductType
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}

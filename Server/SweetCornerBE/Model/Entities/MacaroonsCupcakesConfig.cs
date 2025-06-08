using System.ComponentModel.DataAnnotations;

namespace SweetCornerBE.Model.Entities
{
    public class MacaroonsCupcakesConfig
    {
        [Key]
        public Guid Id { get; set; }
        public string? SpongeColor { get; set; }
        public string? FillingKind { get; set; }
        public string? FillingFlavor { get; set; }
        public string? CreamKind { get; set; }
        public string? CreamColor { get; set; }
        public Guid OrderId { get; set; }
        public Order Order { get; set; }
    }
}

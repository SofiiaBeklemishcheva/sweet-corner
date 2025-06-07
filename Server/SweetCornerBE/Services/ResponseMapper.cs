using SweetCornerBE.Model.Entities;
using SweetCornerBE.Model;

namespace SweetCornerBE.Services
{
    public class ResponseMapper
    {
        public static GetOrderResponse ToGetOrderResponse(Order order)
        {
            return new GetOrderResponse
            {
                Name = order.Name,
                ProductTypeId = order.ProductTypeId,
                ProductType = order.ProductType,
                Description = order.Description,
                ClientMail = order.ClientMail,
                FactoryMail = order.FactoryMail,
                Created = order.Created,
                Cakes = order.Cakes?.Select(cake => new CakeConfig
                {
                    Id = cake.Id,
                    CreamColor = cake.CreamColor,
                    CreamFlavor = cake.CreamFlavor,
                    CreamKind = cake.CreamKind,
                    FillingFlavor = cake.FillingFlavor,
                    FillingKind = cake.FillingKind,
                    Frosting = cake.Frosting,
                    FrostingColor = cake.FrostingColor,
                    SpongeColor = cake.SpongeColor,
                    SpongeType = cake.SpongeType,
                }).ToList() ?? new List<CakeConfig>(),

                MacaroonsCupcakes = order.MacaroonsCupcakes?.Select(macaron => new MacaroonsCupcakesConfig
                {
                    Id = macaron.Id,
                    CreamColor = macaron.CreamColor,
                    CreamKind = macaron.CreamKind,
                    FillingFlavor = macaron.FillingFlavor,
                    FillingKind = macaron.FillingKind,
                    SpongeColor = macaron.SpongeColor,
                }).ToList() ?? new List<MacaroonsCupcakesConfig>()
            };
        }
    }
}

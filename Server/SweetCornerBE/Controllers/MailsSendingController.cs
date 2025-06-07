using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using SweetCornerBE.Services;
using SweetCornerBE.Model;
using System.Threading.Tasks;
using SweetCornerBE.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace SweetCornerBE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MailsSendingController : ControllerBase
    {
        private readonly MailCreationService _mailCreationService;
        private readonly MailSendingService _mailSendingService;
        private readonly EmailSettings _emailSettings;
        private readonly AppDbContext _appDbContext;
        public MailsSendingController(MailCreationService mailCreationService, MailSendingService mailSendingService, EmailSettings mailSettings, AppDbContext appDbContext)
        {
            _mailCreationService = mailCreationService;
            _mailSendingService = mailSendingService;
            _emailSettings = mailSettings;
            _appDbContext = appDbContext;
        }

        [HttpPost("cake")]
        public async Task<IActionResult> CakeOrder([FromBody] CakeResponse cake)
        {

            try
            {
           
            var clientMailTask = _mailSendingService.SendMail(_mailCreationService.CreateCakeClientMail(cake), cake.Email, "Twoje zamówienie - tort");
            var factoryMailTask = _mailSendingService.SendMail(_mailCreationService.CreateCakeFactoryMail(cake), _emailSettings.FactoryMail, "Nowe zamówienie - tort");

            await Task.WhenAll(clientMailTask, factoryMailTask);

            var productType = await _appDbContext.ProductTypes.FirstOrDefaultAsync(pt => pt.Name == "Cake");

            var order = new Order
            {
                Name = "Zamówienie na tort",
                ProductTypeId = productType.Id,
                ProductType = productType,
                ClientMail = cake.Email,
                FactoryMail = _emailSettings.FactoryMail,
                Cakes = new List<CakeConfig> { 
                new CakeConfig
                {
                    CreamColor = cake.CreamColor,
                    CreamFlavor = cake.CreamFlavor,
                    CreamKind = cake.CreamKind,
                    FillingFlavor = cake.FillingFlavor,
                    FillingKind = cake.FillingKind,
                    Frosting = cake.Frosting,
                    SpongeColor = cake.SpongeColor,
                    FrostingColor = cake.FrostingColor,
                    SpongeType = cake.SpongeType
                }},
                Created = DateTime.UtcNow,
            };

            _appDbContext.Orders.Add(order);
            await _appDbContext.SaveChangesAsync();

             return Ok();

            }catch
            {
                return BadRequest(); 
            }
        }

        [HttpPost("cupcake")]
        public async Task<IActionResult> CupcakeOrder([FromBody] List<MacaronCupcakesResponse> cupcakes)
        {
            try
            {
                var clientMailTask = _mailSendingService.SendMail(_mailCreationService.CreateCupCakeClientMail(cupcakes), cupcakes.FirstOrDefault()?.Email, "Twoje zamówienie - cupcake");
                var factoryMailTask = _mailSendingService.SendMail(_mailCreationService.CreateCupCakeFactoryMail(cupcakes), _emailSettings.FactoryMail, "Nowe zamówienie - cupcake");
                await Task.WhenAll(clientMailTask, factoryMailTask);

                return await MacaroonCupcakeHelperWrapper("Cupcakes", cupcakes);

            }
            catch
            {
                return BadRequest();
            }
        }


        [HttpPost("macaroon")]
        public async Task<IActionResult> MacaroonOrder([FromBody] List<MacaronCupcakesResponse> macaroons)
        {
            try
            {


                var clientMailTask = _mailSendingService.SendMail(_mailCreationService.CreateMacaronClientMail(macaroons), macaroons.FirstOrDefault()?.Email, "Twoje zamówienie - makaron");
                var factoryMailTask = _mailSendingService.SendMail(_mailCreationService.CreateMacaronFactoryMail(macaroons), _emailSettings.FactoryMail, "Nowe zamówienie - makaron");
                await Task.WhenAll(clientMailTask, factoryMailTask);

                return await MacaroonCupcakeHelperWrapper("Macaroons", macaroons);

            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpGet("orders")]
        public async Task<IActionResult> GetAllOrders()
        {

            var orders = await _appDbContext.Orders
            .Include(o => o.ProductType)
            .Include(o => o.Cakes)
            .Include(o => o.MacaroonsCupcakes)
            .ToListAsync();

            var response = orders.Select(ResponseMapper.ToGetOrderResponse).ToList();

            return Ok(response);


        }

        private async Task<IActionResult> MacaroonCupcakeHelperWrapper(String type, List<MacaronCupcakesResponse> item)
        {
            var productType = await _appDbContext.ProductTypes.FirstOrDefaultAsync(pt => pt.Name == type);

            var cupcakeConfigs = item.Select(cupcake => new MacaroonsCupcakesConfig
            {
                CreamColor = cupcake.CreamColor,
                SpongeColor = cupcake.SpongeColor,
                CreamKind = cupcake.CreamKind,
                FillingFlavor = cupcake.FillingFlavor,
                FillingKind = cupcake.FillingKind,
            }).ToList();

            var order = new Order
            {
                Name = "Zamówienie na " + type,
                ProductTypeId = productType.Id,
                ProductType = productType,
                ClientMail = item.FirstOrDefault()?.Email,
                FactoryMail = _emailSettings.FactoryMail,
                MacaroonsCupcakes = cupcakeConfigs,
                Created = DateTime.UtcNow,
            };

            _appDbContext.Orders.Add(order);
            await _appDbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
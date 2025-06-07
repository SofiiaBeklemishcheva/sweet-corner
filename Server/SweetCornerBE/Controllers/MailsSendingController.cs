using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using SweetCornerBE.Services;
using SweetCornerBE.Model;
using System.Threading.Tasks;

namespace SweetCornerBE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MailsSendingController : ControllerBase
    {
        private readonly MailCreationService _mailCreationService;
        private readonly MailSendingService _mailSendingService;
        private readonly EmailSettings _emailSettings;
        public MailsSendingController(MailCreationService mailCreationService, MailSendingService mailSendingService, EmailSettings mailSettings) {
            _mailCreationService = mailCreationService;
            _mailSendingService = mailSendingService;
            _emailSettings = mailSettings;
        }

        [HttpPost("cake")]
        public async Task<IActionResult> CakeOrder([FromBody] CakeResponse cake)
        {

            await _mailSendingService.SendMail(_mailCreationService.CreateCakeClientMail(cake), cake.Email, "Twoje zamówienie - tort");
            await _mailSendingService.SendMail(_mailCreationService.CreateCakeFactoryMail(cake), _emailSettings.FactoryMail, "Nowe zamówienie - tort");

            return Ok();
        }

        [HttpPost("cupcake")]
        public async Task<IActionResult> CupcakeOrder([FromBody] List<MacaronCupcakesResponse> cupcakes)
        {

            await _mailSendingService.SendMail(_mailCreationService.CreateCupCakeClientMail(cupcakes), cupcakes.FirstOrDefault()?.Email, "Twoje zamówienie - tort");
            await _mailSendingService.SendMail(_mailCreationService.CreateCupCakeFactoryMail(cupcakes), _emailSettings.FactoryMail, "Nowe zamówienie - tort");

            return Ok();
        }

        [HttpPost("macaroon")]
        public async Task<IActionResult> MacaroonOrder([FromBody] List<MacaronCupcakesResponse> macaroons)
        {

            await _mailSendingService.SendMail(_mailCreationService.CreateMacaronClientMail(macaroons), macaroons.FirstOrDefault()?.Email, "Twoje zamówienie - tort");
            await _mailSendingService.SendMail(_mailCreationService.CreateMacaronFactoryMail(macaroons), _emailSettings.FactoryMail, "Nowe zamówienie - tort");

            return Ok();
        }

    }
}
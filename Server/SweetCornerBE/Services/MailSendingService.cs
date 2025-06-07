using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Identity;
using SweetCornerBE.Model;

namespace SweetCornerBE.Services
{
    public class MailSendingService
    {
        private readonly EmailSettings _mailSettings;

        public MailSendingService(EmailSettings mailSettings)
        {
            _mailSettings = mailSettings;
        }

        public async Task<bool> SendMail(String mailContent, String mailTo, String mailSubject)
        {
            try
            {
                var smtpClient = new SmtpClient(_mailSettings.Host, _mailSettings.Port)
                {
                    Credentials = new NetworkCredential(_mailSettings.Username, _mailSettings.Password),
                    EnableSsl = true 
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_mailSettings.From),
                    Subject = mailSubject,
                    Body = mailContent,
                    IsBodyHtml = true
                };

                
                mailMessage.To.Add(mailTo);

                await smtpClient.SendMailAsync(mailMessage);

                return true;
            }
            catch (Exception ex)
            {

                Console.WriteLine($"Błąd wysyłania maila: {ex.Message}");
                Console.WriteLine($"Błąd wysyłania maila: {ex.StackTrace}");
                return false;
            }
        }
    }
    
}

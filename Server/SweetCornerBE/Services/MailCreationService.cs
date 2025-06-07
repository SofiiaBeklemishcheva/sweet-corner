using System.Diagnostics.Metrics;
using System.Text;
using SweetCornerBE.Model;

namespace SweetCornerBE.Services
{
    public class MailCreationService
    {
        public MailCreationService() { }

        public String CreateCakeClientMail(CakeResponse cake)
        {
           StringBuilder mailTop = new StringBuilder();
            mailTop.Append(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Potwierdzenie zamówienia - Sweet Corner</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fefcf8; padding: 20px; color: #333;"">
  <div style=""max-width: 600px; margin: auto; border: 1px solid #f3e5d2; border-radius: 10px; background-color: #ffffff; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);"">
    <h1 style=""font-size: 24px; color: #c97d3d;"">🍰 Mail klient tort</h1>
    
    <h2 style=""font-size: 18px;"">Temat: 🧁 Dziękujemy za złożenie zamówienia w Sweet Corner!</h2>

    <p>Dzień dobry!</p>

    <p>Z radością potwierdzamy, że otrzymaliśmy Twoje zamówienie w naszej cukierni <strong>Sweet Corner</strong> – miejscu, gdzie słodkie marzenia stają się rzeczywistością.</p>

    <h3>🔍 Oto szczegóły zamówienia, jakie do nas trafiły:</h3>
    
    <h4>🍰 Rodzaj deseru: <strong>Tort</strong></h4>

    <h4>▶ Szczegóły:</h4>");

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            cakeContents.AppendFormat(@"<li><strong>Kolor biszkoptu:</strong> {0}</li>", cake.SpongeColor);
            cakeContents.AppendFormat(@"<li><strong>Rodzaj biszkoptu:</strong> {0}</li>", cake.SpongeType);
            cakeContents.AppendFormat(@"<li><strong>Nadzienie:</strong> {0} – {1}</li>", cake.FillingKind, cake.FillingFlavor);
            cakeContents.AppendFormat(@"<li><strong>Krem:</strong> {0} – {1} – {2}</li>", cake.CreamKind,  cake.CreamColor, cake.CreamFlavor);
            cakeContents.AppendFormat(@"<li><strong>Polewa:</strong> {0} – {1}</li>", cake.Frosting, cake.FrostingColor);
            cakeContents.Append("</ul>");


            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@"<h4> 📝 W celu sfinalizowania zamówienia:</h4>
    <p>Prosimy o przesłanie dodatkowych informacji, np.:</p>
    <ul>
      <li>Wzór wykończenia / inspiracja wizualna</li>
      <li>Ewentualny napis lub personalizacja</li>
      <li>Ilość porcji, data wydarzenia</li>
    </ul>

    <p>📧 Wystarczy, że odpiszesz na tę wiadomość lub skontaktujesz się z nami pod adresem: <strong>kontakt@sweetcorner.pl</strong></p>

    <p>📅 Dopiero po potwierdzeniu wszystkich szczegółów przedstawimy ostateczną wycenę oraz ustalimy termin odbioru lub dostawy.</p>

    <p>Dziękujemy, że jesteś częścią naszej słodkiej rodziny!<br>
    <strong>Zespół Sweet Corner</strong><br>
    <a href=""https://sweetcorner.pl"" style=""color: #c97d3d;"">https://sweetcorner.pl</a></p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }

        public String CreateCakeFactoryMail(CakeResponse cake)
        {
            StringBuilder mailTop = new StringBuilder();
            mailTop.Append(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Nowe zamówienie - Sweet Corner</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fffbea; padding: 20px; color: #333;"">
  <div style=""max-width: 600px; margin: auto; border: 1px solid #f0e6cc; border-radius: 10px; background-color: #ffffff; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);"">
    <h1 style=""font-size: 24px; color: #c97d3d;"">🍰 Mail cukiernia tort</h1>
    
    <h2 style=""font-size: 18px;"">Temat: 🧁 Nowe zamówienie od klienta – prosimy o weryfikację możliwości realizacji</h2>

    <p>Witajcie w <strong>Sweet Corner</strong>!</p>

    <p>Z radością informujemy, że pojawiło się nowe zamówienie. Poniżej szczegóły przesłane przez klienta:</p>

    <h3>🍰 Rodzaj deseru: <strong>Tort</strong></h3>

    <h4>▶ Szczegóły zamówienia:</h4>");

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            cakeContents.AppendFormat(@"<li><strong>Kolor biszkoptu:</strong> {0}</li>", cake.SpongeColor);
            cakeContents.AppendFormat(@"<li><strong>Rodzaj biszkoptu:</strong> {0}</li>", cake.SpongeType);
            cakeContents.AppendFormat(@"<li><strong>Nadzienie:</strong> {0} – {1}</li>", cake.FillingKind, cake.FillingFlavor);
            cakeContents.AppendFormat(@"<li><strong>Krem:</strong> {0} – {1} – {2}</li>", cake.CreamKind, cake.CreamColor, cake.CreamFlavor);
            cakeContents.AppendFormat(@"<li><strong>Polewa:</strong> {0} – {1}</li>", cake.Frosting, cake.FrostingColor);
            cakeContents.Append("</ul>");


            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@" <h4>🔄 Prosimy o:</h4>
    <ul>
      <li>Zweryfikowanie możliwości wykonania deseru zgodnie z wytycznymi.</li>
      <li>Oszacowanie przewidywanego terminu realizacji.</li>
      <li>W razie potrzeby kontakt z klientem celem doprecyzowania szczegółów (np. wzór dekoracji, personalizacja).</li>
    </ul>

    <p>📬 <strong>Jeśli wszystko się zgadza, prześlijcie potwierdzenie gotowości do realizacji i przewidywaną datę zakończenia.</strong></p>

    <p>Pozdrawiamy,<br>
    <strong>Zespół Sweet Corner</strong><br>
    <em>– Gdzie słodkie marzenia stają się rzeczywistością!</em></p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }

        public String CreateCupCakeClientMail(List<MacaronCupcakesResponse> cupcakes)
        {
            StringBuilder mailTop = new StringBuilder();
            mailTop.AppendFormat(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Dziękujemy za zamówienie - Cupcake</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fefcf9; padding: 20px;"">
  <div style=""max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border: 1px solid #eee;"">
    <h2>🧁 Mail klient cupcake</h2>
    <p><strong>Temat:</strong> 🧁 Dziękujemy za zamówienie na cupcake’i – Sweet Corner</p>

    <p>Dzień dobry!</p>
    <p>Otrzymaliśmy Twoje zamówienie na nasze ręcznie robione cupcake’i – dziękujemy za zaufanie!</p>

    <p>📦 <strong>Ilość:</strong> {0} sztuk<br>
    🧁 <strong>Rodzaj deseru:</strong> Cupcake</p>

    <p>▶ <strong>Szczegóły zamówienia:</strong></p>", cupcakes.Count);

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            int counter = 1;
            foreach (var cupcake in cupcakes)
            {
                cakeContents.AppendFormat(@"<li><strong>Cupcake {0}:</strong> {1} biszkopt, {2} – {3}, {4} – {5}</li>",
                        counter,
                        cupcake.SpongeColor ?? "Brak",
                        cupcake.FillingKind ?? "Brak",
                        cupcake.FillingFlavor ?? "Brak",
                        cupcake.CreamKind ?? "Brak",
                        cupcake.CreamColor ?? "Brak"
                    );

                counter++;
            }
            cakeContents.Append("</ul>");

            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@"<p>📸 <strong>Prosimy:</strong></p>
    <ul>
      <li>O przesłanie inspiracji wizualnej (np. zdjęcie dekoracji)</li>
      <li>Czy wszystkie cupcake’i mają wyglądać tak samo?</li>
      <li>Czy mają zawierać napisy lub ozdoby tematyczne?</li>
    </ul>

    <p>📬 Po doprecyzowaniu szczegółów i naszej dostępności terminowej, prześlemy wycenę i ustalimy datę realizacji.</p>

    <p>Z cukierniczym pozdrowieniem,<br><strong>Zespół Sweet Corner</strong><br><a href=""https://sweetcorner.pl"">https://sweetcorner.pl</a></p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }

        public String CreateCupCakeFactoryMail(List<MacaronCupcakesResponse> cupcakes)
        {
            StringBuilder mailTop = new StringBuilder();
            mailTop.AppendFormat(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Nowe zamówienie - Cupcake</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fffefa; padding: 20px;"">
  <div style=""max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border: 1px solid #eee;"">
    <h2>🧁 Mail cukiernia cupcaki</h2>
    <p><strong>Temat:</strong> 🧁 Nowe zamówienie na cupcake’i – prosimy o weryfikację</p>
    <p>Witajcie w Sweet Corner!</p>
    <p>Klient złożył zamówienie na cupcake’i. Prosimy o weryfikację szczegółów i potwierdzenie możliwości realizacji.</p>
    
    <p>🧁 <strong>Rodzaj deseru:</strong> Cupcake<br>
    📦 <strong>Ilość:</strong> {0} sztuk</p>

    <p>▶ <strong>Szczegóły smakowe:</strong></p>", cupcakes.Count);

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            int counter = 1;
            foreach (var cupcake in cupcakes)
            {
                cakeContents.AppendFormat(@"<li><strong>Cupcake {0}:</strong> {1} biszkopt, {2} – {3}, {4} – {5}</li>",
                        counter,
                        cupcake.SpongeColor ?? "Brak",
                        cupcake.FillingKind ?? "Brak",
                        cupcake.FillingFlavor ?? "Brak",
                        cupcake.CreamKind ?? "Brak",
                        cupcake.CreamColor ?? "Brak"
                    );

                counter++;
            }
            cakeContents.Append("</ul>");

            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@"<p>📩 <strong>Prosimy o:</strong></p>
    <ul>
      <li>Potwierdzenie możliwości wykonania wskazanych wariantów smakowych</li>
      <li>Oszacowanie przewidywanego terminu realizacji</li>
      <li>Kontakt z klientem w celu doprecyzowania dekoracji lub liczby sztuk</li>
    </ul>

    <p>Pozdrawiamy,<br><strong>Zespół Sweet Corner</strong><br>– Gdzie słodkie marzenia stają się rzeczywistością!</p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }

        public String CreateMacaronClientMail(List<MacaronCupcakesResponse> cupcakes)
        {
            StringBuilder mailTop = new StringBuilder();
            mailTop.AppendFormat(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Dziękujemy za zamówienie - Macarons</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fdfaf6; padding: 20px;"">
  <div style=""max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border: 1px solid #eee;"">
    <h2>🍬 Mail klient macaroons</h2>
    <p><strong>Temat:</strong> ✨ Dziękujemy za zamówienie na macarons – Sweet Corner</p>

    <p>Dzień dobry!</p>
    <p>Dziękujemy za zamówienie na nasze kolorowe macaronsy – małe dzieła sztuki cukierniczej!</p>

    <p>📦 <strong>Ilość:</strong> {0} sztuk <br>
    🍪 <strong>Rodzaj deseru:</strong> Macarons</p>

    <p>▶ <strong>Szczegóły:</strong></p>", cupcakes.Count);

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            int counter = 1;
            foreach (var cupcake in cupcakes)
            {
                cakeContents.AppendFormat(@"<li><strong>Macaron {0}:</strong> {1} biszkopt, {2} – {3}, {4} – {5}</li>",
                        counter,
                        cupcake.SpongeColor ?? "Brak",
                        cupcake.FillingKind ?? "Brak",
                        cupcake.FillingFlavor ?? "Brak",
                        cupcake.CreamKind ?? "Brak",
                        cupcake.CreamColor ?? "Brak"
                    );

                counter++;
            }
            cakeContents.Append("</ul>");

            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@"<p>📸 <strong>Abyśmy mogli dopracować zamówienie:</strong></p>
    <ul>
      <li>Czy wszystkie macaronsy mają wyglądać tak samo?</li>
      <li>Czy chcesz konkretny wzór dekoracji / napis?</li>
      <li>Czy zestaw ma być zapakowany jako prezent?</li>
    </ul>

    <p>Po doprecyzowaniu detali i naszej weryfikacji dostępności składników, otrzymasz finalną wycenę i termin wykonania.</p>

    <p>Z cukierniczym pozdrowieniem,<br><strong>Zespół Sweet Corner</strong><br><a href=""https://sweetcorner.pl"">https://sweetcorner.pl</a></p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }

        public String CreateMacaronFactoryMail(List<MacaronCupcakesResponse> cupcakes)
        {
            StringBuilder mailTop = new StringBuilder();
            mailTop.AppendFormat(@"<!DOCTYPE html>
<html lang=""pl"">
<head>
  <meta charset=""UTF-8"">
  <title>Nowe zamówienie - Macarons</title>
</head>
<body style=""font-family: Arial, sans-serif; background-color: #fffefa; padding: 20px;"">
  <div style=""max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border: 1px solid #eee;"">
    <h2>🍬 Mail cukiernia macaroons</h2>
    <p><strong>Temat:</strong> ✨ Nowe zamówienie na macarons – prosimy o potwierdzenie</p>

    <p>Witajcie w Sweet Corner!</p>
    <p>Otrzymaliśmy zamówienie na ciasteczka macarons – poniżej szczegóły przesłane przez klienta:</p>

    <p>🍪 <strong>Rodzaj deseru:</strong> Macarons<br>
    📦 <strong>Ilość:</strong> {0} sztuk </p>

    <p>▶ <strong>Skład:</strong></p>", cupcakes.Count);

            StringBuilder cakeContents = new StringBuilder();
            cakeContents.Append("<ul>");
            int counter = 1;
            foreach (var cupcake in cupcakes)
            {
                cakeContents.AppendFormat(@"<li><strong>Macaron {0}:</strong> {1} biszkopt, {2} – {3}, {4} – {5}</li>",
                        counter,
                        cupcake.SpongeColor ?? "Brak",
                        cupcake.FillingKind ?? "Brak",
                        cupcake.FillingFlavor ?? "Brak",
                        cupcake.CreamKind ?? "Brak",
                        cupcake.CreamColor ?? "Brak"
                    );

                counter++;
            }
            cakeContents.Append("</ul>");

            StringBuilder mailBottom = new StringBuilder();
            mailBottom.Append(@"<p>📩 <strong>Prosimy o:</strong></p>
    <ul>
      <li>Weryfikację dostępności składników</li>
      <li>Potwierdzenie możliwości wykonania zestawu</li>
      <li>Oszacowanie terminu realizacji</li>
    </ul>

    <p>Dziękujemy za zaangażowanie – jak zawsze!</p>
    <p><strong>Zespół Sweet Corner</strong><br>– Mistrzowie ręcznie robionych delik</p>
  </div>
</body>
</html>");

            StringBuilder finalMail = new StringBuilder();
            finalMail.Append(mailTop.ToString()).Append(cakeContents.ToString()).Append(mailBottom.ToString());


            return finalMail.ToString();
        }
    }
}

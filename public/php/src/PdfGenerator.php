<?php
require_once __DIR__ . '/../libs/tcpdf.php';
require_once __DIR__ . '/Order.php';

class PdfGenerator {
    public function generate(Order $order) {
        $pdf = new TCPDF();
        $pdf->AddPage();

        // Nagłówek
        $pdf->SetFont('helvetica', 'B', 18);
        $pdf->Cell(0, 15, '🍰 Podsumowanie zamówienia tortu', 0, 1, 'C');

        $pdf->Ln(5);
        $pdf->SetFont('helvetica', '', 12);

        // Lista elementów zamówienia
        foreach ($order->getItems() as $item) {
            if ($item->imagePath && file_exists($item->imagePath)) {
                $pdf->Image($item->imagePath, $pdf->GetX(), $pdf->GetY(), 15, 15);
                $pdf->SetX($pdf->GetX() + 20); // przesunięcie obok obrazka
            }
            $pdf->Cell(50, 10, $item->label . ":", 0, 0);
            $pdf->Cell(0, 10, $item->value, 0, 1);
        }

        $pdf->Ln(10);
        $pdf->SetFont('helvetica', 'B', 12);
        $pdf->Cell(0, 10, "Email: " . $order->email, 0, 1);

        $pdf->Ln(15);
        $pdf->SetFont('helvetica', 'I', 10);
        $pdf->Cell(0, 10, "Dziękujemy za zamówienie! 🎂 Skontaktujemy się z Tobą w celu potwierdzenia.", 0, 1, 'C');

        $pdf->Output('zamowienie_tortu.pdf', 'I'); // I = podgląd w przeglądarce
    }
}

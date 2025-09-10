<?php
require_once __DIR__ . '/OrderItem.php';

class Order {
    public $spongeType;
    public $spongeColor;
    public $fillingKind;
    public $fillingFlavor;
    public $creamKind;
    public $creamColor;
    public $creamFlavor;
    public $frosting;
    public $frostingColor;
    public $email;

    public function __construct($data) {
        $this->spongeType    = new OrderItem("Biszkopt", $data['spongeType']['label'] ?? null, $data['spongeType']['src'] ?? null);
        $this->spongeColor   = new OrderItem("Kolor biszkoptu", $data['spongeColor']['label'] ?? null, $data['spongeColor']['src'] ?? null);
        $this->fillingKind   = new OrderItem("Rodzaj nadzienia", $data['fillingKind']['label'] ?? null, $data['fillingKind']['src'] ?? null);
        $this->fillingFlavor = new OrderItem("Smak nadzienia", $data['fillingFlavor']['label'] ?? null, $data['fillingFlavor']['src'] ?? null);
        $this->creamKind     = new OrderItem("Rodzaj kremu", $data['creamKind']['label'] ?? null, $data['creamKind']['src'] ?? null);
        $this->creamColor    = new OrderItem("Kolor kremu", $data['creamColor']['label'] ?? null, $data['creamColor']['src'] ?? null);
        $this->creamFlavor   = new OrderItem("Smak kremu", $data['creamFlavor']['label'] ?? null, $data['creamFlavor']['src'] ?? null);
        $this->frosting      = new OrderItem("Lukier", $data['frosting']['label'] ?? null, $data['frosting']['src'] ?? null);
        $this->frostingColor = new OrderItem("Kolor lukru", $data['frostingColor']['label'] ?? null, $data['frostingColor']['src'] ?? null);
        $this->email         = $data['email'] ?? "Nie podano";
    }

    public function getItems() {
        return [
            $this->spongeType,
            $this->spongeColor,
            $this->fillingKind,
            $this->fillingFlavor,
            $this->creamKind,
            $this->creamColor,
            $this->creamFlavor,
            $this->frosting,
            $this->frostingColor,
        ];
    }
}

<?php
class OrderItem {
    public $label;
    public $value;
    public $imagePath;

    public function __construct($label, $value = null, $imagePath = null) {
        $this->label = $label;
        $this->value = $value ?? "Nie wybrano";
        $this->imagePath = $imagePath;
    }
}

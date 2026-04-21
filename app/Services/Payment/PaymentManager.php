<?php

namespace App\Services\Payment;

use App\Services\Payment\Drivers\MidtransDriver;

class PaymentManager
{
    public static function make(string $driver)
    {
       return match ($driver) {
            'midtrans' => new MidtransDriver(),
            default    => throw new \Exception("Driver tidak didukung"),
        };
    }
}

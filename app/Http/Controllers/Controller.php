<?php

namespace App\Http\Controllers;

use App\Services\Payment\PaymentManager;
use Midtrans\Config;
abstract class Controller
{
    public function Payment(){
    $midtrans = PaymentManager::make('midtrans');

    }
}

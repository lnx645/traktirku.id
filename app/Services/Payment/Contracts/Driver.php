<?php

namespace App\Services\Payment\Contracts;

abstract class Driver
{
    abstract public function processPayment($paymentData);
    abstract public function refundPayment($paymentId, $amount);
    abstract public function getPaymentStatus($paymentId);
}

<?php

namespace App\Services\Payment;

interface PaymentInterface
{
    public function processPayment($paymentData);
    public function refundPayment($paymentId, $amount);
    public function getPaymentStatus($paymentId);
}

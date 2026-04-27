// Interface esperada pelo cliente
interface ModernPaymentAPI {
  processPayment(amount: number): void;
}

// Serviço legado com interface incompatível
class LegacyPaymentSystem {
  makePayment(value: number, currency: string): boolean {
    console.log(`Pagamento de ${value} ${currency} processado pelo sistema legado`);
    return true;
  }
}

// Adapter para compatibilizar as interfaces
class PaymentAdapter implements ModernPaymentAPI {
  private legacySystem: LegacyPaymentSystem;

  constructor(legacySystem: LegacyPaymentSystem) {
    this.legacySystem = legacySystem;
  }

  processPayment(amount: number): void {
    // Converte a chamada para o formato esperado pelo sistema legado
    this.legacySystem.makePayment(amount, "BRL");
  }
}

// Cliente
const legacySystem = new LegacyPaymentSystem();
const paymentAdapter = new PaymentAdapter(legacySystem);

// O cliente usa a interface moderna
paymentAdapter.processPayment(100);
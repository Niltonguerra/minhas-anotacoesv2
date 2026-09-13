// Interface do produto
interface Payment {
  process(amount: number): boolean;
}

// Implementações concretas
class CreditCardPayment implements Payment {
  process(amount: number): boolean {
    console.log(`Processando ${amount} via Cartão de Crédito`);
    return true;
  }
}

class PayPalPayment implements Payment {
  process(amount: number): boolean {
    console.log(`Processando ${amount} via PayPal`);
    return true;
  }
}

// Factory
class PaymentFactory {
  static createPayment(type: string): Payment {
    if (type === "credit") {
      return new CreditCardPayment();
    } else if (type === "paypal") {
      return new PayPalPayment();
    }
    throw new Error("Método de pagamento não suportado");
  }
}

// Cliente
const payment = PaymentFactory.createPayment("credit");
payment.process(100);
// Interface de estado
interface OrderState {
  processOrder(order: Order): void;
  cancelOrder(order: Order): void;
}

// Estados concretos
class PendingState implements OrderState {
  processOrder(order: Order): void {
    console.log("Processando pedido pendente...");
    order.setState(new ProcessingState());
  }

  cancelOrder(order: Order): void {
    console.log("Pedido pendente cancelado");
    order.setState(new CanceledState());
  }
}

class ProcessingState implements OrderState {
  processOrder(order: Order): void {
    console.log("Pedido já está em processamento");
  }

  cancelOrder(order: Order): void {
    console.log("Cancelando pedido em processamento...");
    order.setState(new CanceledState());
  }
}

class CanceledState implements OrderState {
  processOrder(order: Order): void {
    console.log("Não é possível processar um pedido cancelado");
  }

  cancelOrder(order: Order): void {
    console.log("Pedido já está cancelado");
  }
}

// Contexto
class Order {
  private state: OrderState;

  constructor() {
    // Estado inicial
    this.state = new PendingState();
  }

  setState(state: OrderState): void {
    this.state = state;
  }

  processOrder(): void {
    this.state.processOrder(this);
  }

  cancelOrder(): void {
    this.state.cancelOrder(this);
  }
}

// Uso
const order = new Order();
order.processOrder(); // Muda para ProcessingState
order.cancelOrder();  // Muda para CanceledState
order.processOrder(); // Não é possível processar
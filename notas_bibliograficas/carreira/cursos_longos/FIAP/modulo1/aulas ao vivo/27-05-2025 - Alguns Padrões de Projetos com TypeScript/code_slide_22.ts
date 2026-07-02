// Interface do Observer
interface Observer {
  update(data: any): void;
}

// Subject (objeto observado)
class NewsPublisher {
  private observers: Observer[] = [];
  private latestNews: string = '';

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }

  publishNews(news: string): void {
    this.latestNews = news;
    console.log(`Nova notícia publicada: ${news}`);
    this.notifyObservers();
  }
}

// Observadores concretos
class EmailSubscriber implements Observer {
  constructor(private email: string) {}

  update(news: string): void {
    console.log(`Enviando email para ${this.email}: ${news}`);
  }
}

class MobileAppSubscriber implements Observer {
  constructor(private userId: string) {}

  update(news: string): void {
    console.log(`Enviando notificação push para usuário ${this.userId}: ${news}`);
  }
}

// Uso
const publisher = new NewsPublisher();

const emailSub = new EmailSubscriber("usuario@exemplo.com");
const mobileSub = new MobileAppSubscriber("user123");

publisher.addObserver(emailSub);
publisher.addObserver(mobileSub);

publisher.publishNews("TypeScript 5.0 lançado com novos recursos!");
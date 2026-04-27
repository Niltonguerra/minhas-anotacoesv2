// Interface da estratégia
interface SortStrategy {
  sort(data: number[]): number[];
}

// Estratégias concretas
class BubbleSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Ordenando com Bubble Sort");
    // Implementação do bubble sort
    return [...data].sort((a, b) => a - b);
  }
}

class QuickSortStrategy implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Ordenando com Quick Sort");
    // Implementação do quick sort
    return [...data].sort((a, b) => a - b);
  }
}

// Contexto
class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy): void {
    this.strategy = strategy;
  }

  sortData(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

// Uso
const data = [5, 3, 8, 1, 2];

const sorter = new Sorter(new BubbleSortStrategy());
console.log(sorter.sortData(data));

// Mudando a estratégia em tempo de execução
sorter.setStrategy(new QuickSortStrategy());
console.log(sorter.sortData(data));
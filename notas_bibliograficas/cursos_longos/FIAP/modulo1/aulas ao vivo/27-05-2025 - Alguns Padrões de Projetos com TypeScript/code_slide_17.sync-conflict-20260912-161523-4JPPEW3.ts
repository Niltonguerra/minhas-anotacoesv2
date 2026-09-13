// Interface componente
interface DataSource {
  readData(): string;
  writeData(data: string): void;
}

// Componente concreto
class FileDataSource implements DataSource {
  constructor(private filename: string) {}

  readData(): string {
    console.log(`Lendo dados do arquivo ${this.filename}`);
    return `dados de ${this.filename}`;
  }

  writeData(data: string): void {
    console.log(`Escrevendo "${data}" no arquivo ${this.filename}`);
  }
}

// Decorator base
abstract class DataSourceDecorator implements DataSource {
  constructor(protected source: DataSource) {}

  readData(): string {
    return this.source.readData();
  }

  writeData(data: string): void {
    this.source.writeData(data);
  }
}

// Decorator concreto
class EncryptionDecorator extends DataSourceDecorator {
  readData(): string {
    // Desencripta os dados
    const data = this.source.readData();
    console.log("Desencriptando dados");
    return data;
  }

  writeData(data: string): void {
    // Encripta os dados
    console.log("Encriptando dados");
    this.source.writeData(data);
  }
}

// Uso
const source = new FileDataSource("dados.txt");
const encryptedSource = new EncryptionDecorator(source);

encryptedSource.writeData("Dados sensíveis");
const data = encryptedSource.readData();
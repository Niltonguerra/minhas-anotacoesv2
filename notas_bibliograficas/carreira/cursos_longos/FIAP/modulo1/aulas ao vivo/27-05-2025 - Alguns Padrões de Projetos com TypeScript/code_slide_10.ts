class DatabaseConnection {
  private static instance: DatabaseConnection;
  private constructor() {
    // Inicialização da conexão
    console.log("Conexão com o banco de dados inicializada");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executando query: ${sql}`);
  }
}

// Uso
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true - mesma instância
db1.query("SELECT * FROM users");
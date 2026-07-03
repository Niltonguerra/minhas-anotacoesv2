// Subsistemas complexos
class AudioSystem {
  setVolume(level: number): void {
    console.log(`Volume ajustado para ${level}`);
  }

  tune(frequency: number): void {
    console.log(`Sintonizado em ${frequency}MHz`);
  }
}

class DisplaySystem {
  setBrightness(level: number): void {
    console.log(`Brilho ajustado para ${level}`);
  }

  setResolution(width: number, height: number): void {
    console.log(`Resolução ajustada para ${width}x${height}`);
  }
}

class InputSystem {
  configureKeyboard(): void {
    console.log("Teclado configurado");
  }

  configureMouse(sensitivity: number): void {
    console.log(`Mouse configurado com sensibilidade ${sensitivity}`);
  }
}

// Facade
class ComputerFacade {
  private audio: AudioSystem;
  private display: DisplaySystem;
  private input: InputSystem;

  constructor() {
    this.audio = new AudioSystem();
    this.display = new DisplaySystem();
    this.input = new InputSystem();
  }

  startComputer(): void {
    console.log("Iniciando computador...");
    this.display.setBrightness(80);
    this.display.setResolution(1920, 1080);
    this.audio.setVolume(50);
    this.audio.tune(98.5);
    this.input.configureKeyboard();
    this.input.configureMouse(70);
    console.log("Computador pronto para uso!");
  }
}

// Uso
const computer = new ComputerFacade();
computer.startComputer();
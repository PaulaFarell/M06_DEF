import Menu from "./scenes/Menu.js";
import Wood from "./scenes/Wood.js";
import Preload from "./scenes/Preload.js";
import Waterfall from "./scenes/Waterfall.js";
import Final from "./scenes/Final.js";

window.addEventListener("load", function () {
    // Inicializa Phaser Game con configuración correcta
    const game = new Phaser.Game({
        width: 1280,
        height: 720,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        physics: {
            default: 'arcade', // Asegúrate de usar el sistema físico 'arcade'
            arcade: {
                gravity: { y: 150 }, // Si no necesitas gravedad global
                debug: true // Cambia a true si deseas depurar las físicas
            }
        },
    });

    // Añadir las escenas al juego
    game.scene.add("Preload", Preload);
    game.scene.add("Final", Final);
    game.scene.add("Menu", Menu);
    game.scene.add("Wood", Wood);
    game.scene.add("Waterfall", Waterfall);
    game.scene.add("Boot", Boot, true); // El Boot se inicia al cargar la página
});

// Clase Boot
class Boot extends Phaser.Scene {
    preload() {
        // Carga los recursos necesarios para la escena Preload
        this.load.pack("pack", "assets/preload-asset-pack.json");
    }

    create() {
        // Aquí cargamos la siguiente escena una vez que Boot haya completado su tarea
        this.scene.start("Preload");
    }
}

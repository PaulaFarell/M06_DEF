
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Final extends Phaser.Scene {

	constructor() {
		super("Final");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// fondo_Juego
		const fondo_Juego = this.add.image(642, 356, "Fondo_Juego");
		fondo_Juego.scaleX = 0.8;
		fondo_Juego.scaleY = 0.8;

		// Titulo_Final
		const titulo_Final = this.add.text(115, 190, "", {});
		titulo_Final.text = "GRACIAS POR JUGAR";
		titulo_Final.setStyle({ "fontSize": "100px", "fontStyle": "bold" });

		// Titulo_Final_1
		const titulo_Final_1 = this.add.text(568, 379, "", {});
		titulo_Final_1.text = "MENÚ";
		titulo_Final_1.setStyle({ "color": "#fdfab1ff", "fontSize": "60px", "fontStyle": "bold" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

    // Seleccionar el texto "MENÚ" y agregar interacción
    const tituloFinal1 = this.add.text(568, 379, "MENÚ", {
        color: "#fdfab1ff",
        fontSize: "60px",
        fontStyle: "bold",
    });

    // Hacer que el texto sea interactivo
    tituloFinal1.setInteractive();

    // Cambiar a la escena de Menú al hacer clic
    tituloFinal1.on('pointerdown', () => {
        this.scene.start('Menu'); // Cambia 'Menu' por el nombre exacto de tu escena de Menú
    });

    // Opcional: Cambiar el color del texto al pasar el ratón por encima
    tituloFinal1.on('pointerover', () => {
        tituloFinal1.setStyle({ color: "#ffffff" }); // Cambia el color al pasar el ratón
    });

    // Restaurar el color original al quitar el ratón
    tituloFinal1.on('pointerout', () => {
        tituloFinal1.setStyle({ color: "#fdfab1ff" }); // Regresa al color original
    });
}
}
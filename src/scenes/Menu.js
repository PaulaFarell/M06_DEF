
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// Title
		const titleLayer = this.add.layer();

		// title
		const title = this.add.image(640, 443, "Title");
		title.scaleX = 1.25;
		title.scaleY = 1.25;
		titleLayer.add(title);

		// Text
		const textLayer = this.add.layer();

		// Play_Text
		const play_Text = this.add.text(563, 497, "", {});
		play_Text.text = "PLAY";
		play_Text.setStyle({ "fontSize": "64px", "fontStyle": "bold" });
		textLayer.add(play_Text);

		// Add interactive property
		play_Text.setInteractive(); // Hacer el texto interactivo

		// Add click event
		play_Text.on("pointerdown", () => {
			this.scene.start("Wood"); // Cambia a la escena del nivel
		});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

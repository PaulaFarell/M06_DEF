
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Phisics {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Phisics"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene

		scene.physics.add.existing(this.gameObject)
		/* END-USER-CTR-CODE */
	}

	/** @returns {Phisics} */
	static getComponent(gameObject) {
		return gameObject["__Phisics"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

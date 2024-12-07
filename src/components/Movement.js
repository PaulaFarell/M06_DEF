
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Movement {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Movement"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene
		this.cursors = scene.input.keyboard.createCursorKeys()
		// each time the scene is updated, call the `update` method
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	update() {
    // Velocidad del jugador
    const speed = 200;

	const player = this.gameObject

	const body = player.body

	if (!body)
	{
		return
	}

    // Resetear velocidad horizontal
    body.setVelocityX(0);

    // Movimiento horizontal
    if (this.cursors.left.isDown || this.wasd.A.isDown) {
        body.setVelocityX(-speed); // Mover hacia la izquierda
        chara___BlueIdle00000.setFlipX(true); // Voltear sprite a la izquierda
    } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
        body.setVelocityX(speed); // Mover hacia la derecha
        chara___BlueIdle00000.setFlipX(false); // Voltear sprite a la derecha
    }

    // Movimiento vertical (opcional, si el personaje puede volar o moverse arriba/abajo)
    if (this.cursors.up.isDown || this.wasd.W.isDown) {
        body.setVelocityY(-speed); // Mover hacia arriba
    } else if (this.cursors.down.isDown || this.wasd.S.isDown) {
       body.setVelocityY(speed); // Mover hacia abajo
    } else {
        body.setVelocityY(0); // Detener movimiento vertical
    }
}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

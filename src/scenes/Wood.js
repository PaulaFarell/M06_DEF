
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Wood extends Phaser.Scene {

	constructor() {
		super("Wood");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// left_key
		const left_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// right_key
		const right_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// up_key
		const up_key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// fondo_tenebroso
		const fondo_tenebroso = this.add.image(-21, -187, "Fondo_tenebroso");
		fondo_tenebroso.setOrigin(0, 0);

		// fondo_tenebroso_1
		this.add.image(2803, 353, "Fondo_tenebroso");

		// deco_5
		const deco_5 = this.add.image(1978, 380, "Deco_5");
		deco_5.scaleX = 0.1;
		deco_5.scaleY = 0.1;

		// bluePlantClosed
		const bluePlantClosed = this.add.sprite(13, 396, "BluePlantClosed_00000");
		bluePlantClosed.scaleX = 0.1;
		bluePlantClosed.scaleY = 0.1;
		bluePlantClosed.play("TokenBluePlantClosed");

		// bluePlantClosed_00000
		const bluePlantClosed_00000 = this.add.sprite(493, 606, "BluePlantClosed_00000");
		bluePlantClosed_00000.scaleX = 0.1;
		bluePlantClosed_00000.scaleY = 0.1;
		bluePlantClosed_00000.play("TokenBluePlantClosed");

		// bluePlantClosed_3
		const bluePlantClosed_3 = this.add.sprite(1038, 255, "BluePlantClosed_00000");
		bluePlantClosed_3.scaleX = 0.1;
		bluePlantClosed_3.scaleY = 0.1;
		bluePlantClosed_3.play("TokenBluePlantClosed");

		// bluePlantClosed_2
		const bluePlantClosed_2 = this.add.sprite(1165, 504, "BluePlantClosed_00000");
		bluePlantClosed_2.scaleX = 0.1;
		bluePlantClosed_2.scaleY = 0.1;
		bluePlantClosed_2.play("TokenBluePlantClosed");

		// bluePlantClosed_4
		const bluePlantClosed_4 = this.add.sprite(1687, 148, "BluePlantClosed_00000");
		bluePlantClosed_4.scaleX = 0.1;
		bluePlantClosed_4.scaleY = 0.1;
		bluePlantClosed_4.play("TokenBluePlantClosed");

		// bluePlantClosed_5
		const bluePlantClosed_5 = this.add.sprite(2219, 435, "BluePlantClosed_00000");
		bluePlantClosed_5.scaleX = 0.1;
		bluePlantClosed_5.scaleY = 0.1;
		bluePlantClosed_5.play("TokenBluePlantClosed");

		// bluePlantClosed_6
		const bluePlantClosed_6 = this.add.sprite(2690, 199, "BluePlantClosed_00000");
		bluePlantClosed_6.scaleX = 0.1;
		bluePlantClosed_6.scaleY = 0.1;
		bluePlantClosed_6.play("TokenBluePlantClosed");

		// bluePlantClosed_7
		const bluePlantClosed_7 = this.add.sprite(3458, 286, "BluePlantClosed_00000");
		bluePlantClosed_7.scaleX = 0.1;
		bluePlantClosed_7.scaleY = 0.1;
		bluePlantClosed_7.play("TokenBluePlantClosed");

		// bluePlantClosed_8
		const bluePlantClosed_8 = this.add.sprite(3456, 622, "BluePlantClosed_00000");
		bluePlantClosed_8.scaleX = 0.1;
		bluePlantClosed_8.scaleY = 0.1;
		bluePlantClosed_8.play("TokenBluePlantClosed");

		// deco_14
		const deco_14 = this.add.image(3297, 604, "Deco_1");
		deco_14.scaleX = 0.1;
		deco_14.scaleY = 0.1;

		// deco_13
		const deco_13 = this.add.image(3067, 424, "Deco_3");
		deco_13.scaleX = 0.2;
		deco_13.scaleY = 0.2;

		// deco_15
		const deco_15 = this.add.image(3535, 274, "Deco_4");
		deco_15.scaleX = 0.2;
		deco_15.scaleY = 0.2;

		// deco_12
		const deco_12 = this.add.image(2585, 441, "Deco_3");
		deco_12.scaleX = 0.2;
		deco_12.scaleY = 0.2;

		// deco_11
		const deco_11 = this.add.image(2310, 421, "Deco_4");
		deco_11.scaleX = 0.2;
		deco_11.scaleY = 0.2;

		// deco_8
		const deco_8 = this.add.image(1735, 133, "Deco_3");
		deco_8.scaleX = 0.2;
		deco_8.scaleY = 0.2;

		// deco
		const deco = this.add.image(1687, 418, "Deco_1");
		deco.scaleX = 0.1;
		deco.scaleY = 0.1;

		// deco_10
		const deco_10 = this.add.image(1499, 433, "Deco_4");
		deco_10.scaleX = 0.2;
		deco_10.scaleY = 0.2;

		// deco_6
		const deco_6 = this.add.image(1142, 242, "Deco_4");
		deco_6.scaleX = 0.2;
		deco_6.scaleY = 0.2;

		// deco_7
		const deco_7 = this.add.image(1102, 243, "Deco_4");
		deco_7.scaleX = 0.2;
		deco_7.scaleY = 0.2;

		// deco_3
		const deco_3 = this.add.image(1027, 447, "Deco_3");
		deco_3.scaleX = 0.2;
		deco_3.scaleY = 0.2;

		// deco_2
		const deco_2 = this.add.image(821, 597, "Deco_2");
		deco_2.scaleX = 0.1;
		deco_2.scaleY = 0.1;
		deco_2.angle = -45.00000000000006;

		// deco_4
		const deco_4 = this.add.image(267, 660, "Deco_4");
		deco_4.scaleX = 0.2;
		deco_4.scaleY = 0.2;

		// deco_1
		const deco_1 = this.add.image(140, 348, "Deco_1");
		deco_1.scaleX = 0.2;
		deco_1.scaleY = 0.2;

    	const platforms = this.physics.add.staticGroup();
		// plataforma_1
		platforms.create('')
		const plataforma_1 = this.add.tileSprite(157, 719, 2048, 499, "Plataforma_1");
		plataforma_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_1.scaleX = 0.2;
		plataforma_1.scaleY = 0.2;

		// plataforma_3
		const plataforma_3 = this.add.tileSprite(483, 494, 473, 533, "Plataforma_3");
		plataforma_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_3.scaleX = 0.2;
		plataforma_3.scaleY = 0.2;

		// plataforma_2
		const plataforma_2 = this.add.tileSprite(611, 660, 2048, 499, "Plataforma_1");
		plataforma_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_2.scaleX = 0.2;
		plataforma_2.scaleY = 0.2;

		// plataforma_4
		const plataforma_4 = this.add.tileSprite(148, 454, 2048, 499, "Plataforma_1");
		plataforma_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_4.scaleX = 0.2;
		plataforma_4.scaleY = 0.2;

		// plataforma_5
		const plataforma_5 = this.add.tileSprite(677, 423, 473, 533, "Plataforma_3");
		plataforma_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_5.scaleX = 0.2;
		plataforma_5.scaleY = 0.2;

		// plataforma_6
		const plataforma_6 = this.add.tileSprite(1035, 310, 2048, 499, "Plataforma_1");
		plataforma_6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_6.scaleX = 0.2;
		plataforma_6.scaleY = 0.2;

		// plataforma_7
		const plataforma_7 = this.add.tileSprite(1031, 505, 1417, 580, "Plataforma_5");
		plataforma_7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1417, 580), Phaser.Geom.Rectangle.Contains);
		plataforma_7.scaleX = 0.2;
		plataforma_7.scaleY = 0.2;

		// plataforma
		const plataforma = this.add.tileSprite(1032, 567, 2048, 499, "Plataforma_1");
		plataforma.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma.scaleX = 0.2;
		plataforma.scaleY = 0.2;

		// plataforma_8
		const plataforma_8 = this.add.tileSprite(1506, 489, 2048, 498, "Plataforma_2");
		plataforma_8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 498), Phaser.Geom.Rectangle.Contains);
		plataforma_8.scaleX = 0.2;
		plataforma_8.scaleY = 0.2;

		// plataforma_9
		const plataforma_9 = this.add.tileSprite(1871, 493, 2048, 499, "Plataforma_1");
		plataforma_9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_9.scaleX = 0.2;
		plataforma_9.scaleY = 0.2;

		// plataforma_10
		const plataforma_10 = this.add.tileSprite(1736, 215, 1341, 897, "Plataforma_6");
		plataforma_10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1341, 897), Phaser.Geom.Rectangle.Contains);
		plataforma_10.scaleX = 0.2;
		plataforma_10.scaleY = 0.2;

		// plataforma_11
		const plataforma_11 = this.add.tileSprite(1465, 290, 473, 533, "Plataforma_3");
		plataforma_11.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_11.scaleX = 0.2;
		plataforma_11.scaleY = 0.2;

		// plataforma_12
		const plataforma_12 = this.add.tileSprite(1977, 297, 473, 533, "Plataforma_3");
		plataforma_12.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_12.scaleX = 0.2;
		plataforma_12.scaleY = 0.2;

		// plataforma_13
		const plataforma_13 = this.add.tileSprite(2310, 76, 475, 1031, "Plataforma_4");
		plataforma_13.setInteractive(new Phaser.Geom.Rectangle(0, 0, 475, 1031), Phaser.Geom.Rectangle.Contains);
		plataforma_13.scaleX = 0.2;
		plataforma_13.scaleY = 0.2;

		// plataforma_14
		const plataforma_14 = this.add.tileSprite(2317, 491, 2048, 499, "Plataforma_1");
		plataforma_14.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_14.scaleX = 0.2;
		plataforma_14.scaleY = 0.2;

		// plataforma_16
		const plataforma_16 = this.add.tileSprite(2716, 429, 1417, 580, "Plataforma_5");
		plataforma_16.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1417, 580), Phaser.Geom.Rectangle.Contains);
		plataforma_16.scaleX = 0.2;
		plataforma_16.scaleY = 0.2;

		// plataforma_15
		const plataforma_15 = this.add.tileSprite(2666, 492, 2048, 499, "Plataforma_1");
		plataforma_15.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_15.scaleX = 0.2;
		plataforma_15.scaleY = 0.2;

		// plataforma_17
		const plataforma_17 = this.add.tileSprite(2511, 324, 473, 533, "Plataforma_3");
		plataforma_17.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_17.scaleX = 0.2;
		plataforma_17.scaleY = 0.2;

		// plataforma_18
		const plataforma_18 = this.add.tileSprite(2719, 235, 473, 533, "Plataforma_3");
		plataforma_18.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_18.scaleX = 0.2;
		plataforma_18.scaleY = 0.2;

		// plataforma_19
		const plataforma_19 = this.add.tileSprite(2914, 320, 473, 533, "Plataforma_3");
		plataforma_19.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_19.scaleX = 0.2;
		plataforma_19.scaleY = 0.2;

		// plataforma_20
		const plataforma_20 = this.add.tileSprite(3066, 473, 473, 533, "Plataforma_3");
		plataforma_20.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_20.scaleX = 0.2;
		plataforma_20.scaleY = 0.2;

		// plataforma_21
		const plataforma_21 = this.add.tileSprite(3415, 340, 2048, 498, "Plataforma_2");
		plataforma_21.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 498), Phaser.Geom.Rectangle.Contains);
		plataforma_21.scaleX = 0.2;
		plataforma_21.scaleY = 0.2;

		// plataforma_22
		const plataforma_22 = this.add.tileSprite(3398, 680, 2048, 499, "Plataforma_1");
		plataforma_22.setInteractive(new Phaser.Geom.Rectangle(0, 0, 2048, 499), Phaser.Geom.Rectangle.Contains);
		plataforma_22.scaleX = 0.2;
		plataforma_22.scaleY = 0.2;

		// plataforma_23
		const plataforma_23 = this.add.tileSprite(3675, 529, 473, 533, "Plataforma_3");
		plataforma_23.setInteractive(new Phaser.Geom.Rectangle(0, 0, 473, 533), Phaser.Geom.Rectangle.Contains);
		plataforma_23.scaleX = 0.2;
		plataforma_23.scaleY = 0.2;

		// deco_9
		const deco_9 = this.add.image(2094, 480, "Deco_2");
		deco_9.scaleX = 0.1;
		deco_9.scaleY = 0.1;

		// chara___BlueIdle00000
		const chara___BlueIdle00000 = this.physics.add.sprite(419, 190, "Chara - BlueIdle00000");
		chara___BlueIdle00000.scaleX = 0.3;
		chara___BlueIdle00000.scaleY = 0.3;
		chara___BlueIdle00000.body.gravity.y = 10;
		chara___BlueIdle00000.body.acceleration.y = 5;
		chara___BlueIdle00000.body.bounce.x = 0.2;
		chara___BlueIdle00000.body.bounce.y = 0.2;
		chara___BlueIdle00000.body.collideWorldBounds = true;
		chara___BlueIdle00000.body.onWorldBounds = true;
		chara___BlueIdle00000.body.setSize(512, 512, false);

		// slimeBasic_00000
		const slimeBasic_00000 = this.add.sprite(665, 600, "SlimeBasic_00000");
		slimeBasic_00000.scaleX = 0.2;
		slimeBasic_00000.scaleY = 0.2;
		slimeBasic_00000.play("SlimeSlimeBasic");

		// slimeBasic
		const slimeBasic = this.add.sprite(268, 392, "SlimeBasic_00000");
		slimeBasic.scaleX = 0.2;
		slimeBasic.scaleY = 0.2;
		slimeBasic.play("SlimeSlimeBasic");

		// slimeBasic_1
		const slimeBasic_1 = this.add.sprite(959, 246, "SlimeBasic_00000");
		slimeBasic_1.scaleX = 0.2;
		slimeBasic_1.scaleY = 0.2;
		slimeBasic_1.play("SlimeSlimeBasic");

		// slimeBasic_2
		const slimeBasic_2 = this.add.sprite(1578, 434, "SlimeBasic_00000");
		slimeBasic_2.scaleX = 0.2;
		slimeBasic_2.scaleY = 0.2;
		slimeBasic_2.play("SlimeSlimeBasic");

		// slimeBasic_3
		const slimeBasic_3 = this.add.sprite(2411, 424, "SlimeBasic_00000");
		slimeBasic_3.scaleX = 0.2;
		slimeBasic_3.scaleY = 0.2;
		slimeBasic_3.play("SlimeSlimeBasic");

		// slimeBasic_4
		const slimeBasic_4 = this.add.sprite(3360, 281, "SlimeBasic_00000");
		slimeBasic_4.scaleX = 0.2;
		slimeBasic_4.scaleY = 0.2;
		slimeBasic_4.play("SlimeSlimeBasic");

		// lists
		const platforms = [plataforma_23, plataforma_22, plataforma_21, plataforma_20, plataforma_19, plataforma_18, plataforma_17, plataforma_15, plataforma_16, plataforma_14, plataforma_13, plataforma_12, plataforma_11, plataforma_10, plataforma_9, plataforma_8, plataforma, plataforma_7, plataforma_6, plataforma_5, plataforma_4, plataforma_2, plataforma_3, plataforma_1];

		// collider
		this.physics.add.collider(chara___BlueIdle00000, platforms);

		this.chara___BlueIdle00000 = chara___BlueIdle00000;
		this.left_key = left_key;
		this.right_key = right_key;
		this.up_key = up_key;
		this.platforms = platforms;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	chara___BlueIdle00000;
	/** @type {Phaser.Input.Keyboard.Key} */
	left_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	right_key;
	/** @type {Phaser.Input.Keyboard.Key} */
	up_key;
	/** @type {Phaser.GameObjects.TileSprite[]} */
	platforms;

	/* START-USER-CODE */

	// Write your code here

	create() {

    this.editorCreate();

	// Habilitar física en el personaje
    this.physics.add.existing(this.chara___BlueIdle00000);
    this.chara___BlueIdle00000.setCollideWorldBounds(true); // Evitar que salga de la pantalla


    // Configuración de la tecla espacio
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Agregar un evento que escuche la tecla
    this.spaceKey.on('down', () => {
        this.scene.start('Waterfall');
    }); // <- Aquí cerramos correctamente el paréntesis del evento `on`

} // <- Aquí cerramos correctamente el método `create`

update () {
	if (this.right_key.isDown) {
		this.chara___BlueIdle00000.setVelocityX(160);
	} else {
		this.chara___BlueIdle00000.setVelocityX(0);
	}
	if (this.up_key.isDown && this.chara___BlueIdle00000.body.touching.down) {
		this.chara___BlueIdle00000.setVelocityY(330)
	}
	if (this.left_key.isDown) {
		this.chara___BlueIdle00000.setVelocityX(-160)
	}
}



}/* END-USER-CODE */


/* END OF COMPILED CODE */

// You can write more code here

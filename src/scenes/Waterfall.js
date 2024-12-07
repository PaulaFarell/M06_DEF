
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waterfall extends Phaser.Scene {

	constructor() {
		super("Waterfall");

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

		// Background
		const background = this.add.layer();

		// fondo_Waterfall_1
		const fondo_Waterfall_1 = this.add.image(2821, 407, "Fondo_Waterfall");
		fondo_Waterfall_1.flipX = true;
		background.add(fondo_Waterfall_1);

		// fondo_Waterfall
		const fondo_Waterfall = this.add.image(930, 407, "Fondo_Waterfall");
		background.add(fondo_Waterfall);

		// bluePlantClosed_7
		const bluePlantClosed_7 = this.add.image(3418, 565, "BluePlantClosed_00000");
		bluePlantClosed_7.scaleX = 0.1;
		bluePlantClosed_7.scaleY = 0.1;

		// bluePlantClosed_6
		const bluePlantClosed_6 = this.add.image(2463, 662, "BluePlantClosed_00000");
		bluePlantClosed_6.scaleX = 0.1;
		bluePlantClosed_6.scaleY = 0.1;

		// bluePlantClosed_5
		const bluePlantClosed_5 = this.add.image(2697, 331, "BluePlantClosed_00000");
		bluePlantClosed_5.scaleX = 0.1;
		bluePlantClosed_5.scaleY = 0.1;

		// bluePlantClosed_4
		const bluePlantClosed_4 = this.add.image(2197, 416, "BluePlantClosed_00000");
		bluePlantClosed_4.scaleX = 0.1;
		bluePlantClosed_4.scaleY = 0.1;

		// bluePlantClosed_3
		const bluePlantClosed_3 = this.add.image(959, 230, "BluePlantClosed_00000");
		bluePlantClosed_3.scaleX = 0.1;
		bluePlantClosed_3.scaleY = 0.1;

		// bluePlantClosed_2
		const bluePlantClosed_2 = this.add.image(1501, 585, "BluePlantClosed_00000");
		bluePlantClosed_2.scaleX = 0.1;
		bluePlantClosed_2.scaleY = 0.1;

		// bluePlantClosed_1
		const bluePlantClosed_1 = this.add.image(1007, 586, "BluePlantClosed_00000");
		bluePlantClosed_1.scaleX = 0.1;
		bluePlantClosed_1.scaleY = 0.1;

		// bluePlantClosed
		const bluePlantClosed = this.add.image(728, 349, "BluePlantClosed_00000");
		bluePlantClosed.scaleX = 0.1;
		bluePlantClosed.scaleY = 0.1;

		// bluePlantClosed_00000
		const bluePlantClosed_00000 = this.add.image(101, 491, "BluePlantClosed_00000");
		bluePlantClosed_00000.scaleX = 0.1;
		bluePlantClosed_00000.scaleY = 0.1;

		// deco_14
		const deco_14 = this.add.image(3335, 573, "Deco_3");
		deco_14.scaleX = 0.2;
		deco_14.scaleY = 0.2;

		// deco_13
		const deco_13 = this.add.image(2572, 341, "Deco_3");
		deco_13.scaleX = 0.2;
		deco_13.scaleY = 0.2;

		// deco_12
		const deco_12 = this.add.image(2383, 668, "Deco_3");
		deco_12.scaleX = 0.2;
		deco_12.scaleY = 0.2;

		// deco_11
		const deco_11 = this.add.image(1577, 558, "Deco_3");
		deco_11.scaleX = 0.2;
		deco_11.scaleY = 0.2;

		// deco_10
		const deco_10 = this.add.image(1079, 238, "Deco_3");
		deco_10.scaleX = 0.2;
		deco_10.scaleY = 0.2;

		// deco_9
		const deco_9 = this.add.image(606, 496, "Deco_3");
		deco_9.scaleX = 0.2;
		deco_9.scaleY = 0.2;

		// deco_8
		const deco_8 = this.add.image(2554, 658, "Deco_4");
		deco_8.scaleX = 0.2;
		deco_8.scaleY = 0.2;

		// deco_6
		const deco_6 = this.add.image(1390, 624, "Deco_4");
		deco_6.scaleX = 0.2;
		deco_6.scaleY = 0.2;

		// deco_5
		const deco_5 = this.add.image(902, 574, "Deco_4");
		deco_5.scaleX = 0.2;
		deco_5.scaleY = 0.2;

		// deco_3
		const deco_3 = this.add.image(859, 577, "Deco_4");
		deco_3.scaleX = 0.2;
		deco_3.scaleY = 0.2;

		// deco_4
		const deco_4 = this.add.image(240, 653, "Deco_4");
		deco_4.scaleX = 0.2;
		deco_4.scaleY = 0.2;

		// deco
		const deco = this.add.image(1165, 219, "Deco_1");
		deco.scaleX = 0.1;
		deco.scaleY = 0.1;
		deco.flipX = true;

		// deco_1
		const deco_1 = this.add.image(506, 481, "Deco_1");
		deco_1.scaleX = 0.1;
		deco_1.scaleY = 0.1;

		// deco_7
		const deco_7 = this.add.image(2099, 484, "Deco_4");
		deco_7.scaleX = 0.2;
		deco_7.scaleY = 0.2;

		// deco_2
		const deco_2 = this.add.image(2965, 507, "Deco_1");
		deco_2.scaleX = 0.2;
		deco_2.scaleY = 0.2;
		deco_2.flipX = true;

		// plataforma_1
		const plataforma_1 = this.add.tileSprite(163, 724, 2048, 499, "Plataforma_1");
		plataforma_1.scaleX = 0.2;
		plataforma_1.scaleY = 0.2;

		// plataforma_2
		const plataforma_2 = this.add.tileSprite(467, 549, 2048, 498, "Plataforma_2");
		plataforma_2.scaleX = 0.2;
		plataforma_2.scaleY = 0.2;

		// plataforma_3
		const plataforma_3 = this.add.tileSprite(128, 550, 473, 533, "Plataforma_3");
		plataforma_3.scaleX = 0.2;
		plataforma_3.scaleY = 0.2;

		// plataforma
		const plataforma = this.add.tileSprite(896, 646, 2048, 499, "Plataforma_1");
		plataforma.scaleX = 0.2;
		plataforma.scaleY = 0.2;

		// plataforma_4
		const plataforma_4 = this.add.tileSprite(1083, 294, 2048, 499, "Plataforma_1");
		plataforma_4.scaleX = 0.2;
		plataforma_4.scaleY = 0.2;

		// plataforma_5
		const plataforma_5 = this.add.tileSprite(757, 392, 473, 533, "Plataforma_3");
		plataforma_5.scaleX = 0.2;
		plataforma_5.scaleY = 0.2;

		// plataforma_6
		const plataforma_6 = this.add.tileSprite(1308, 687, 2048, 498, "Plataforma_2");
		plataforma_6.scaleX = 0.2;
		plataforma_6.scaleY = 0.2;

		// plataforma_8
		const plataforma_8 = this.add.tileSprite(1581, 620, 1417, 580, "Plataforma_5");
		plataforma_8.scaleX = 0.2;
		plataforma_8.scaleY = 0.2;

		// plataforma_7
		const plataforma_7 = this.add.tileSprite(1657, 693, 2048, 499, "Plataforma_1");
		plataforma_7.scaleX = 0.2;
		plataforma_7.scaleY = 0.2;

		// plataforma_9
		const plataforma_9 = this.add.tileSprite(1416, 427, 473, 533, "Plataforma_3");
		plataforma_9.scaleX = 0.2;
		plataforma_9.scaleY = 0.2;

		// plataforma_10
		const plataforma_10 = this.add.tileSprite(1971, 614, 473, 533, "Plataforma_3");
		plataforma_10.scaleX = 0.2;
		plataforma_10.scaleY = 0.2;

		// plataforma_11
		const plataforma_11 = this.add.tileSprite(2101, 538, 473, 533, "Plataforma_3");
		plataforma_11.scaleX = 0.2;
		plataforma_11.scaleY = 0.2;

		// plataforma_12
		const plataforma_12 = this.add.tileSprite(2234, 465, 473, 533, "Plataforma_3");
		plataforma_12.scaleX = 0.2;
		plataforma_12.scaleY = 0.2;

		// plataforma_13
		const plataforma_13 = this.add.tileSprite(2374, 389, 473, 533, "Plataforma_3");
		plataforma_13.scaleX = 0.2;
		plataforma_13.scaleY = 0.2;

		// plataforma_14
		const plataforma_14 = this.add.tileSprite(2656, 395, 2048, 499, "Plataforma_1");
		plataforma_14.scaleX = 0.2;
		plataforma_14.scaleY = 0.2;

		// plataforma_15
		const plataforma_15 = this.add.tileSprite(1746, 353, 1341, 897, "Plataforma_6");
		plataforma_15.scaleX = 0.2;
		plataforma_15.scaleY = 0.2;

		// plataforma_16
		const plataforma_16 = this.add.tileSprite(2450, 725, 2048, 499, "Plataforma_1");
		plataforma_16.scaleX = 0.2;
		plataforma_16.scaleY = 0.2;

		// plataforma_17
		const plataforma_17 = this.add.tileSprite(2380, 576, 473, 533, "Plataforma_3");
		plataforma_17.scaleX = 0.2;
		plataforma_17.scaleY = 0.2;

		// plataforma_18
		const plataforma_18 = this.add.tileSprite(2957, 623, 2048, 499, "Plataforma_1");
		plataforma_18.scaleX = 0.2;
		plataforma_18.scaleY = 0.2;

		// plataforma_19
		const plataforma_19 = this.add.tileSprite(3316, 626, 2048, 499, "Plataforma_1");
		plataforma_19.scaleX = 0.2;
		plataforma_19.scaleY = 0.2;

		// plataforma_20
		const plataforma_20 = this.add.tileSprite(3189, 452, 473, 533, "Plataforma_3");
		plataforma_20.scaleX = 0.2;
		plataforma_20.scaleY = 0.2;

		// plataforma_21
		const plataforma_21 = this.add.tileSprite(3636, 611, 473, 533, "Plataforma_3");
		plataforma_21.scaleX = 0.2;
		plataforma_21.scaleY = 0.2;

		// plataforma_22
		const plataforma_22 = this.add.tileSprite(6, 329, 475, 1031, "Plataforma_4");
		plataforma_22.scaleX = 0.2;
		plataforma_22.scaleY = 0.2;

		// chara___BlueIdle00000
		const chara___BlueIdle00000 = this.physics.add.sprite(57, 643, "Chara - BlueIdle00000");
		chara___BlueIdle00000.setInteractive(new Phaser.Geom.Rectangle(0, 0, 512, 512), Phaser.Geom.Rectangle.Contains);
		chara___BlueIdle00000.scaleX = 0.3;
		chara___BlueIdle00000.scaleY = 0.3;
		chara___BlueIdle00000.body.maxSpeed = 3;
		chara___BlueIdle00000.body.gravity.y = 10;
		chara___BlueIdle00000.body.acceleration.y = 5;
		chara___BlueIdle00000.body.bounce.x = 0.2;
		chara___BlueIdle00000.body.bounce.y = 0.2;
		chara___BlueIdle00000.body.allowRotation = false;
		chara___BlueIdle00000.body.collideWorldBounds = true;
		chara___BlueIdle00000.body.onWorldBounds = true;
		chara___BlueIdle00000.body.setSize(512, 512, false);
		chara___BlueIdle00000.play("PlayerChara - BlueIdle");

		// slimeBasic_00000
		const slimeBasic_00000 = this.add.sprite(410, 496, "SlimeBasic_00000");
		slimeBasic_00000.scaleX = 0.2;
		slimeBasic_00000.scaleY = 0.2;
		slimeBasic_00000.play("SlimeSlimeBasic");

		// slimeBasic
		const slimeBasic = this.add.sprite(789, 586, "SlimeBasic_00000");
		slimeBasic.scaleX = 0.2;
		slimeBasic.scaleY = 0.2;
		slimeBasic.play("SlimeSlimeBasic");

		// slimeBasic_1
		const slimeBasic_1 = this.add.sprite(1579, 633, "SlimeBasic_00000");
		slimeBasic_1.scaleX = 0.2;
		slimeBasic_1.scaleY = 0.2;
		slimeBasic_1.play("SlimeSlimeBasic");

		// slimeBasic_2
		const slimeBasic_2 = this.add.sprite(2778, 336, "SlimeBasic_00000");
		slimeBasic_2.scaleX = 0.2;
		slimeBasic_2.scaleY = 0.2;
		slimeBasic_2.play("SlimeSlimeBasic");

		// slimeBasic_3
		const slimeBasic_3 = this.add.sprite(2310, 668, "SlimeBasic_00000");
		slimeBasic_3.scaleX = 0.2;
		slimeBasic_3.scaleY = 0.2;
		slimeBasic_3.play("SlimeSlimeBasic");

		// slimeBasic_4
		const slimeBasic_4 = this.add.sprite(3189, 567, "SlimeBasic_00000");
		slimeBasic_4.scaleX = 0.2;
		slimeBasic_4.scaleY = 0.2;
		slimeBasic_4.play("SlimeSlimeBasic");

		// lists
		const platforms = this.physics.add.staticGroup();

		[plataforma_22, plataforma_21, plataforma_20, plataforma_19, plataforma_18, plataforma_17, plataforma_16, plataforma_15, plataforma_14, plataforma_13, plataforma_12, plataforma_11, plataforma_10, plataforma_9, plataforma_7, plataforma_8, plataforma_6, plataforma_5, plataforma_4, plataforma, plataforma_3, plataforma_2, plataforma_1].forEach(plataforma => {
    		platforms.add(plataforma);
		});

		// collider
		console.log(platforms)
		this.physics.add.collider(chara___BlueIdle00000, platforms);

		this.chara___BlueIdle00000 = chara___BlueIdle00000;
		this.left_key = left_key;
		this.right_key = right_key;
		this.up_key = up_key;
		this.platforms = platforms;

		this.physics.world.setBoundsCollision(true, true, true, true); // Opcional
		this.physics.world.drawDebug = true;
		
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

    this.editorCreate(); // Asegura que los objetos se creen
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.spaceKey.on('down', () => {
        this.scene.start('Final');
    });
}
update () {
	if (this.right_key.isDown) {
		this.chara___BlueIdle00000.setVelocityX(160);
	} else {
		this.chara___BlueIdle00000.setVelocityX(0);
	}
	if (this.up_key.isDown && this.chara___BlueIdle00000.body.touching.down) {
		this.chara___BlueIdle00000.setVelocityY(-330)
	}
	if (this.left_key.isDown) {
		this.chara___BlueIdle00000.setVelocityX(-160)
	}
}





}




/* END-USER-CODE */


/* END OF COMPILED CODE */

// You can write more code here

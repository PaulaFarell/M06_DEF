
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Water extends Phaser.Scene {

	constructor() {
		super("Water");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// fondo_Waterfall_1
		const fondo_Waterfall_1 = this.add.image(2837, 297, "Fondo_Waterfall");
		fondo_Waterfall_1.flipX = true;

		// fondo_Waterfall
		this.add.image(946, 297, "Fondo_Waterfall");

		// bluePlantClosed_7
		const bluePlantClosed_7 = this.add.image(3434, 455, "BluePlantClosed_00000");
		bluePlantClosed_7.scaleX = 0.1;
		bluePlantClosed_7.scaleY = 0.1;

		// bluePlantClosed_6
		const bluePlantClosed_6 = this.add.image(2479, 552, "BluePlantClosed_00000");
		bluePlantClosed_6.scaleX = 0.1;
		bluePlantClosed_6.scaleY = 0.1;

		// bluePlantClosed_5
		const bluePlantClosed_5 = this.add.image(2713, 221, "BluePlantClosed_00000");
		bluePlantClosed_5.scaleX = 0.1;
		bluePlantClosed_5.scaleY = 0.1;

		// bluePlantClosed_4
		const bluePlantClosed_4 = this.add.image(2213, 306, "BluePlantClosed_00000");
		bluePlantClosed_4.scaleX = 0.1;
		bluePlantClosed_4.scaleY = 0.1;

		// bluePlantClosed_3
		const bluePlantClosed_3 = this.add.image(975, 120, "BluePlantClosed_00000");
		bluePlantClosed_3.scaleX = 0.1;
		bluePlantClosed_3.scaleY = 0.1;

		// bluePlantClosed_2
		const bluePlantClosed_2 = this.add.image(1517, 475, "BluePlantClosed_00000");
		bluePlantClosed_2.scaleX = 0.1;
		bluePlantClosed_2.scaleY = 0.1;

		// bluePlantClosed_1
		const bluePlantClosed_1 = this.add.image(1023, 476, "BluePlantClosed_00000");
		bluePlantClosed_1.scaleX = 0.1;
		bluePlantClosed_1.scaleY = 0.1;

		// bluePlantClosed
		const bluePlantClosed = this.add.image(744, 239, "BluePlantClosed_00000");
		bluePlantClosed.scaleX = 0.1;
		bluePlantClosed.scaleY = 0.1;

		// bluePlantClosed_00000
		const bluePlantClosed_00000 = this.add.image(117, 381, "BluePlantClosed_00000");
		bluePlantClosed_00000.scaleX = 0.1;
		bluePlantClosed_00000.scaleY = 0.1;

		// deco_14
		const deco_14 = this.add.image(3351, 463, "Deco_3");
		deco_14.scaleX = 0.2;
		deco_14.scaleY = 0.2;

		// deco_13
		const deco_13 = this.add.image(2588, 231, "Deco_3");
		deco_13.scaleX = 0.2;
		deco_13.scaleY = 0.2;

		// deco_12
		const deco_12 = this.add.image(2399, 558, "Deco_3");
		deco_12.scaleX = 0.2;
		deco_12.scaleY = 0.2;

		// deco_11
		const deco_11 = this.add.image(1593, 448, "Deco_3");
		deco_11.scaleX = 0.2;
		deco_11.scaleY = 0.2;

		// deco_10
		const deco_10 = this.add.image(1095, 128, "Deco_3");
		deco_10.scaleX = 0.2;
		deco_10.scaleY = 0.2;

		// deco_9
		const deco_9 = this.add.image(622, 386, "Deco_3");
		deco_9.scaleX = 0.2;
		deco_9.scaleY = 0.2;

		// deco_8
		const deco_8 = this.add.image(2570, 548, "Deco_4");
		deco_8.scaleX = 0.2;
		deco_8.scaleY = 0.2;

		// deco_6
		const deco_6 = this.add.image(1406, 514, "Deco_4");
		deco_6.scaleX = 0.2;
		deco_6.scaleY = 0.2;

		// deco_5
		const deco_5 = this.add.image(918, 464, "Deco_4");
		deco_5.scaleX = 0.2;
		deco_5.scaleY = 0.2;

		// deco_3
		const deco_3 = this.add.image(875, 467, "Deco_4");
		deco_3.scaleX = 0.2;
		deco_3.scaleY = 0.2;

		// deco_4
		const deco_4 = this.add.image(256, 543, "Deco_4");
		deco_4.scaleX = 0.2;
		deco_4.scaleY = 0.2;

		// deco
		const deco = this.add.image(1181, 109, "Deco_1");
		deco.scaleX = 0.1;
		deco.scaleY = 0.1;
		deco.flipX = true;

		// deco_1
		const deco_1 = this.add.image(522, 371, "Deco_1");
		deco_1.scaleX = 0.1;
		deco_1.scaleY = 0.1;

		// deco_7
		const deco_7 = this.add.image(2115, 374, "Deco_4");
		deco_7.scaleX = 0.2;
		deco_7.scaleY = 0.2;

		// deco_2
		const deco_2 = this.add.image(2981, 397, "Deco_1");
		deco_2.scaleX = 0.2;
		deco_2.scaleY = 0.2;
		deco_2.flipX = true;

		// plataforma_1
		const plataforma_1 = this.add.tileSprite(179, 614, 2048, 499, "Plataforma_1");
		plataforma_1.scaleX = 0.2;
		plataforma_1.scaleY = 0.2;

		// plataforma_2
		const plataforma_2 = this.add.tileSprite(483, 439, 2048, 498, "Plataforma_2");
		plataforma_2.scaleX = 0.2;
		plataforma_2.scaleY = 0.2;

		// plataforma_3
		const plataforma_3 = this.add.tileSprite(144, 440, 473, 533, "Plataforma_3");
		plataforma_3.scaleX = 0.2;
		plataforma_3.scaleY = 0.2;

		// plataforma
		const plataforma = this.add.tileSprite(912, 536, 2048, 499, "Plataforma_1");
		plataforma.scaleX = 0.2;
		plataforma.scaleY = 0.2;

		// plataforma_4
		const plataforma_4 = this.add.tileSprite(1099, 184, 2048, 499, "Plataforma_1");
		plataforma_4.scaleX = 0.2;
		plataforma_4.scaleY = 0.2;

		// plataforma_5
		const plataforma_5 = this.add.tileSprite(773, 282, 473, 533, "Plataforma_3");
		plataforma_5.scaleX = 0.2;
		plataforma_5.scaleY = 0.2;

		// plataforma_6
		const plataforma_6 = this.add.tileSprite(1324, 577, 2048, 498, "Plataforma_2");
		plataforma_6.scaleX = 0.2;
		plataforma_6.scaleY = 0.2;

		// plataforma_8
		const plataforma_8 = this.add.tileSprite(1597, 510, 1417, 580, "Plataforma_5");
		plataforma_8.scaleX = 0.2;
		plataforma_8.scaleY = 0.2;

		// plataforma_7
		const plataforma_7 = this.add.tileSprite(1673, 583, 2048, 499, "Plataforma_1");
		plataforma_7.scaleX = 0.2;
		plataforma_7.scaleY = 0.2;

		// plataforma_9
		const plataforma_9 = this.add.tileSprite(1432, 317, 473, 533, "Plataforma_3");
		plataforma_9.scaleX = 0.2;
		plataforma_9.scaleY = 0.2;

		// plataforma_10
		const plataforma_10 = this.add.tileSprite(1987, 504, 473, 533, "Plataforma_3");
		plataforma_10.scaleX = 0.2;
		plataforma_10.scaleY = 0.2;

		// plataforma_11
		const plataforma_11 = this.add.tileSprite(2117, 428, 473, 533, "Plataforma_3");
		plataforma_11.scaleX = 0.2;
		plataforma_11.scaleY = 0.2;

		// plataforma_12
		const plataforma_12 = this.add.tileSprite(2250, 355, 473, 533, "Plataforma_3");
		plataforma_12.scaleX = 0.2;
		plataforma_12.scaleY = 0.2;

		// plataforma_13
		const plataforma_13 = this.add.tileSprite(2390, 279, 473, 533, "Plataforma_3");
		plataforma_13.scaleX = 0.2;
		plataforma_13.scaleY = 0.2;

		// plataforma_14
		const plataforma_14 = this.add.tileSprite(2672, 285, 2048, 499, "Plataforma_1");
		plataforma_14.scaleX = 0.2;
		plataforma_14.scaleY = 0.2;

		// plataforma_15
		const plataforma_15 = this.add.tileSprite(1762, 243, 1341, 897, "Plataforma_6");
		plataforma_15.scaleX = 0.2;
		plataforma_15.scaleY = 0.2;

		// plataforma_16
		const plataforma_16 = this.add.tileSprite(2466, 615, 2048, 499, "Plataforma_1");
		plataforma_16.scaleX = 0.2;
		plataforma_16.scaleY = 0.2;

		// plataforma_17
		const plataforma_17 = this.add.tileSprite(2396, 466, 473, 533, "Plataforma_3");
		plataforma_17.scaleX = 0.2;
		plataforma_17.scaleY = 0.2;

		// plataforma_18
		const plataforma_18 = this.add.tileSprite(2973, 513, 2048, 499, "Plataforma_1");
		plataforma_18.scaleX = 0.2;
		plataforma_18.scaleY = 0.2;

		// plataforma_19
		const plataforma_19 = this.add.tileSprite(3332, 516, 2048, 499, "Plataforma_1");
		plataforma_19.scaleX = 0.2;
		plataforma_19.scaleY = 0.2;

		// plataforma_20
		const plataforma_20 = this.add.tileSprite(3205, 342, 473, 533, "Plataforma_3");
		plataforma_20.scaleX = 0.2;
		plataforma_20.scaleY = 0.2;

		// plataforma_21
		const plataforma_21 = this.add.tileSprite(3652, 501, 473, 533, "Plataforma_3");
		plataforma_21.scaleX = 0.2;
		plataforma_21.scaleY = 0.2;

		// plataforma_22
		const plataforma_22 = this.add.tileSprite(22, 219, 475, 1031, "Plataforma_4");
		plataforma_22.scaleX = 0.2;
		plataforma_22.scaleY = 0.2;

		// chara___BlueIdle00000
		const chara___BlueIdle00000 = this.add.sprite(73, 533, "Chara - BlueIdle00000");
		chara___BlueIdle00000.scaleX = 0.3;
		chara___BlueIdle00000.scaleY = 0.3;
		chara___BlueIdle00000.play("PlayerChara - BlueIdle");

		// slimeBasic_00000
		const slimeBasic_00000 = this.add.sprite(426, 386, "SlimeBasic_00000");
		slimeBasic_00000.scaleX = 0.2;
		slimeBasic_00000.scaleY = 0.2;
		slimeBasic_00000.play("SlimeSlimeBasic");

		// slimeBasic
		const slimeBasic = this.add.sprite(805, 476, "SlimeBasic_00000");
		slimeBasic.scaleX = 0.2;
		slimeBasic.scaleY = 0.2;
		slimeBasic.play("SlimeSlimeBasic");

		// slimeBasic_1
		const slimeBasic_1 = this.add.sprite(1595, 523, "SlimeBasic_00000");
		slimeBasic_1.scaleX = 0.2;
		slimeBasic_1.scaleY = 0.2;
		slimeBasic_1.play("SlimeSlimeBasic");

		// slimeBasic_2
		const slimeBasic_2 = this.add.sprite(2794, 226, "SlimeBasic_00000");
		slimeBasic_2.scaleX = 0.2;
		slimeBasic_2.scaleY = 0.2;
		slimeBasic_2.play("SlimeSlimeBasic");

		// slimeBasic_3
		const slimeBasic_3 = this.add.sprite(2326, 558, "SlimeBasic_00000");
		slimeBasic_3.scaleX = 0.2;
		slimeBasic_3.scaleY = 0.2;
		slimeBasic_3.play("SlimeSlimeBasic");

		// slimeBasic_4
		const slimeBasic_4 = this.add.sprite(3205, 457, "SlimeBasic_00000");
		slimeBasic_4.scaleX = 0.2;
		slimeBasic_4.scaleY = 0.2;
		slimeBasic_4.play("SlimeSlimeBasic");

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

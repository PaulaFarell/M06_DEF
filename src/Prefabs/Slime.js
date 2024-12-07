
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
import Slime from "./Slime.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Slime extends ScriptNode {

	constructor(parent) {
		super(parent);

		// slime
		new Slime(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	points = 0;
	/** @type {{key:string,frame?:string|number}} */
	TextureConfig;
	/** @type {string} */
	AnimationKey = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

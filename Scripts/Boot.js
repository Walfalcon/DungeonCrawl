var Boot = {
	init: function () {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setMinMax(256,240);
		this.scale.pageAlignHorizontally = true;
	},
	
	preload: function() {
		
	},
	
	create: function() {		
		game.state.start('Preload');
	}
}
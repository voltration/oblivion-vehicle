// @ts-nocheck
import "./vehicle"

mp.gui.chat.colors = true;

mp.events.add('render', () => {

    if (mp.players.local.vehicle) {
        mp.game.audio.setRadioToStationName("OFF");
        mp.game.audio.setUserRadioControlEnabled(false);
    }
    // Draw to screen.
    mp.game.graphics.drawText("K Lock", [0.05, 0.5], { 
      font: 2, 
      color: [255, 255, 255, 185], 
      scale: [0.5, 0.5], 
      outline: true
    });

    mp.game.graphics.drawText("Y Engine", [0.05, 0.45], { 
		font: 2, 
		color: [255, 255, 255, 185], 
		scale: [0.5, 0.5], 
		outline: true
	  });
});
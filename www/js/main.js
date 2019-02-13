// This is a JavaScript file


var angleMemory = -1,
     rotation = 0;

//function onDeviceOrientation(dataEvent) {
function _onDeviceOrientation(dataAngle) {
    //"use strict";
	if (dataAngle !== angleMemory) {
		var angle = dataAngle,
			deltaAngle,
			text = '';

    	if (angle > 345 || angle < 15) {
			navigator.notification.vibrate(60);
    	}

		if (angle < 68 || angle > 292) {
			text += 'NORTH';
		} else if (angle > 112 && angle < 248) {
			text += 'SOUTH';
		}
		if (angle > 22 && angle < 158) {
			text += 'EAST';
		} else if (angle > 202 && angle < 338) {
			text += 'WEST';
		}

		deltaAngle = angleMemory - angle;
		if (Math.abs(deltaAngle) > 180) {
			if (deltaAngle > 0) {
				rotation -= ((360 - angleMemory) + angle);
			} else {
				rotation += (angleMemory + (360 - angle));
			}
		} else {
			rotation += deltaAngle;
		}
        console.log( "angle:" + angle );
		angleMemory = angle;
		$('#direction').text(text);
		$("#angle").html(Math.round(angle) + "<sup>o</sup>");
		$('#rotation').css('-webkit-transform', 'rotate(' + rotation + 'deg)');
	}
}

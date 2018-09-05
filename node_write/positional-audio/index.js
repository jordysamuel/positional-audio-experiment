console.log('positional audio started');

var exports = module.exports = {}

exports.userPosition = [0, 0, 0];

exports.howling = { Howl, Howler } = require('howler');

exports.startAudio = function (fileName) {

    var sound = new Howl({
        src: ['./media/testtrack.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.5,
        onplay: function () {
            Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
            this.pos(0, 0, 0);
        },
        onend: function () {
            console.log('Finished!');
        }
    });

    console.log('audio started');
}

exports.moveRight = function () {
    exports.userPosition[0] = (exports.userPosition[0] + 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}

exports.moveLeft = function () {
    exports.userPosition[0] = (exports.userPosition[0] - 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}

exports.moveForward = function () {
    exports.userPosition[1] = (exports.userPosition[1] + 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}

exports.moveBackward = function () {
    exports.userPosition[1] = (exports.userPosition[1] - 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}

exports.moveUp = function () {
    exports.userPosition[2] = (exports.userPosition[2] + 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}

exports.moveDown = function () {
    exports.userPosition[2] = (exports.userPosition[2] - 0.1);
    Howler.pos(exports.userPosition[0], exports.userPosition[1], exports.userPosition[2]);
}
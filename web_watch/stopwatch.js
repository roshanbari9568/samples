$(function () {

    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var lapNumber = 0;


    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;


    hideshowButtons("#startButton", "#lapButton");

    $("#startButton").click(function () {

        mode = 1;

        hideshowButtons("#stopButton", "#lapButton");

        startAction();
    });



    $("#stopButton").click(function () {

        hideshowButtons("#resumeButton", "#resetButton");

        clearInterval(action);
    });


    $("#resumeButton").click(function () {

        hideshowButtons("#stopButton", "#lapButton");
        startAction();
    });


    $("#resetButton").click(function () {

        location.reload();
    });


    $("#lapButton").click(function () {
        if (mode) {

            clearInterval(action);
            lapCounter = 0;
            addLap();
            startAction();
        }
    });


    function hideshowButtons(x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }


    function startAction() {
        action = setInterval(function () {
            timeCounter++;
            if (timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10);
    }


    function updateTime() {

        timeMinutes = Math.floor(timeCounter / 6000);

        timeSeconds = Math.floor((timeCounter % 6000) / 100);
        timeCentiseconds = (timeCounter % 6000) % 100;
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timecentisecond").text(format(timeCentiseconds));


        lapMinutes = Math.floor(lapCounter / 6000);

        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        lapCentiseconds = (lapCounter % 6000) % 100;
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapcentisecond").text(format(lapCentiseconds));
    }


    function format(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }


    function addLap() {
        lapNumber++;
        var myLapDetails =
                '<div class="lap">' +
                '<div class="laptimetitle">' +
                'Lap' + lapNumber +
                '</div>' +
                '<div class="laptime">' +
                '<span>' + format(lapMinutes) + '</span>' +
                ':<span>' + format(lapSeconds) + '</span>' +
                ':<span>' + format(lapCentiseconds) + '</span>' +
                '</div>' +
                '</div>';
        $(myLapDetails).prependTo("#laps");
    }
});
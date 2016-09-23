jQuery(document).ready(function($) {

    var coloursArray =  [
      '#97C8EB',
      '#87CEEB',
      '#70C3FF',
      '#60B2FF',
      '#50AAFF',
      '#4BA8FF',
      '#47A4FF',
      '#509FF2',
      '#4495E0',
      '#4D98E2',
      '#4D99DD',
      '#5B93E1',
      '#6199DF',
      '#5BA7E1',
      '#66A6E5',
      '#63A5E7',
      '#5FA7EB',
      '#5AB0EE',
      '#57ADF3',
      '#5FAAF6',
      '#5FA8F3',
      '#60ACF1',
      '#61ADF0',
      '#62ACF0',
      '#63ADEE',
      '#64ADEE',
      '#60ACEB',
      '#61ADEB',
      '#62AFE9',
      '#64B0E5',
      '#65AFE7',
      '#66B0EA',
      '#68B0EC',
      '#76B9ED',
      '#6DBCF5',
      '#6CB6F5',
      '#6BB6F4',
      '#68B7F4',
      '#69B8EE',
      '#6DBAE7',
      '#70BFDF',
      '#5BC0DE',
      '#6884FF',
      '#5272FF',
      '#3399FF',
      '#22ABF3',
      '#31BDEB',
      '#34B2DB',
      '#31B0D5',
      '#2AABD2',
      '#2B93D5',
      '#208CCA',
      '#048DC7',
      '#0F6AB4',
      '#0D6698',
      '#265A88',
      '#286090',
      '#31708F',
      '#416590',
      '#3D5A7F',
      '#3B5275',
      '#45566D',
      '#41536E',
      '#41526B',
      '#40516A',
      '#3F516B',
      '#3D4D65',
      '#3B4E5F',
      '#384962',
      '#36475F',
      '#34465F',
      '#39476B',
      '#41455D',
      '#323753',
      '#353E52',
      '#304158',
      '#2F3F57',
      '#2C3E57',
      '#2C3B58',
      '#2A3B4F',
      '#2B3A4E',
      '#25354D',
      '#29364A',
      '#2E3749',
      '#2E354A',
      '#31354A',
      '#0000FF',
      '#0073F9',
      '#13AFDC',
      '#7193BA',
      '#6689B4',
      '#6185B0',
      '#597FAA',
      '#597EAA',
      '#4E74A1',
      '#436EA4',
      '#2E6DA4',
      '#2B81AF',
      '#337AB7',
      '#4C7CB8',
      '#00008B',
      '#003A66',
      '#22496D',
      '#103144',
      '#0D3349',
      '#002451',
      '#002240',
      '#273242',
      '#223145',
      '#213045',
      '#213147',
      '#1B2C42',
      '#18273A',
      '#1B2536'
    ];

    function displayColor(color, parent) {
        var div = document.createElement('div');
        var colorName = document.createElement('h3');

        console.log($('#Sorted div').length && $('#Original div').length);
        // console.log(color.length);

        div.style.backgroundColor = color;
        colorName.innerHTML = color;

        div.style.position = 'relative';
        parent.appendChild(div);
        div.appendChild(colorName);
        // console.log(color);
    }

    function displayColors(id, colors) {
        var div = document.createElement("div");
        var head = document.createElement('h1');
        div.id = id;

        head.innerHTML = id;

        div.appendChild(head);

        for (var i = 0; i < colors.length; i++)
            displayColor(colors[i], div);

        document.body.appendChild(div);
    }

    function hexToRgb(hex) {
        hex = hex.substring(1, hex.length);
        var r = parseInt((hex).substring(0, 2), 16);
        var g = parseInt((hex).substring(2, 4), 16);
        var b = parseInt((hex).substring(4, 6), 16);

        return [r, g, b];
    }

    function rgbToHex(rgb) {
        return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    }

    function colorDistance(color1, color2) {
        // This is actually the square of the distance but
        // this doesn't matter for sorting.
        var result = 0;
        for (var i = 0; i < color1.length; i++)
            result += (color1[i] - color2[i]) * (color1[i] - color2[i]);
        return result;
    }

    function sortColors(colors) {
        // Calculate distance between each color
        var distances = [];
        for (var i = 0; i < colors.length; i++) {
            // distances[i] = [];
            for (var j = 0; j < i; j++)
                distances.push([colors[i], colors[j], colorDistance(colors[i], colors[j])]);
        }
        distances.sort(function(a, b) {
            return a[2] - b[2];
        });

        // Put each color into separate cluster initially
        var colorToCluster = {};
        for (var i = 0; i < colors.length; i++)
            colorToCluster[colors[i]] = [colors[i]];

        // Merge clusters, starting with lowest distances
        var lastCluster;
        for (var i = 0; i < distances.length; i++) {
            var color1 = distances[i][0];
            var color2 = distances[i][1];
            var cluster1 = colorToCluster[color1];
            var cluster2 = colorToCluster[color2];
            if (!cluster1 || !cluster2 || cluster1 == cluster2)
                continue;

            // Make sure color1 is at the end of its cluster and
            // color2 at the beginning.
            if (color1 != cluster1[cluster1.length - 1])
                cluster1.reverse();
            if (color2 != cluster2[0])
                cluster2.reverse();

            // Merge cluster2 into cluster1
            cluster1.push.apply(cluster1, cluster2);
            delete colorToCluster[color1];
            delete colorToCluster[color2];
            colorToCluster[cluster1[0]] = cluster1;
            colorToCluster[cluster1[cluster1.length - 1]] = cluster1;
            lastCluster = cluster1;
        }

        // By now all colors should be in one cluster
        return lastCluster;
    }

    displayColors("Original", coloursArray);
    var rgbArr = coloursArray.map(hexToRgb);
    var sortedRgbArr = sortColors(rgbArr);
    var finalArray = sortedRgbArr.map(rgbToHex);
    displayColors("Sorted", finalArray);

});
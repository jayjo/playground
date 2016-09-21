jQuery(document).ready(function($) {

    var coloursArray =  [
      '#000000',
      '#000080',
      '#00008B',
      '#000099',
      '#0000A2',
      '#0000CC',
      '#0000FF',
      '#000AE5',
      '#001221',
      '#002240',
      '#002751'
    ];

    function displayColor(color, parent) {
        var div = document.createElement('div');
        var colorName = document.createElement('h3');

        console.log(color.length);

        div.style.backgroundColor = color;
        colorName.innerHTML = color;

        // div.style.width = div.style.height = '102px';
        div.style.position = 'relative';
        // div.style.margin = "5px";
        parent.appendChild(div);
        div.appendChild(colorName);
        console.log(color);
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
            distances[i] = [];
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
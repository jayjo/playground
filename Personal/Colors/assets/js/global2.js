jQuery(document).ready(function($) {

    var coloursArray =  ['#010101','#050f1f','#09d1c4','#15b1b4','#181818','#1ab1b5','#1b2536','#1b2c42','#1bb6b8','#1d1f24','#1d1f25','#1d293a','#1dbabc','#1e7171','#213045','#213147','#223145','#22496d','#238384','#25354d','#2671f7','#273242','#282b32','#289697','#28c7c9','#29364a','#2a3b4f','#2b3a4e','#2b3a4e','#2b93d5','#2c3e57','#2cc6c7','#2d3038','#2da9aa','#2dc376','#2e313a','#2e3749','#2ec6c8','#2f3439','#2f3f57','#30415a','#31354a','#3194ed','#32415a','#33bcbd','#34465f','#344d7a','#353e52','#355185','#36475f','#37cbc8','#39476b','#3b4e5f','#3b5275','#3c4d66','#3c688b','#3d4d65','#3d4e67','#3d609b','#3f516b','#40516a','#40526a','#41455d','#41526b','#41536d','#41536e','#4191ce','#42546d','#436ea4','#4495e0','#4679a2','#485b7a','#495d79','#499dda','#4b5e7b','#4b6080','#4ba8ff','#4c6080','#4c6180','#4c7cb8','#4d98e2','#4d99dd','#4e607b','#4e607b','#4e74a1','#4ea8e8','#4f5e75','#4f6483','#508bba','#509ff2','#50aaff','#53a6f1','#55b64c','#5a6784','#5a9bd1','#5ab0ee','#5bbb52','#5eabf1','#5fa7eb','#5fa8f3','#5faaf6','#5fc456','#60aceb','#60acf1','#60b2ff','#61547a','#61708a','#61708a','#61aade','#61ace2','#61adf0','#62afe9','#63a5e7','#63adee','#64708e','#647997','#64ade8','#64adee','#65afe7','#66a6e5','#66a6e5','#66b0ea','#66b1e5','#67aee6','#68b0e7','#68b0ec','#68b7f4','#68c76a','#69b8ee','#6bb6f4','#6cb6f5','#70c3ff','#71618d','#7187a8','#71b9e9','#73ac71','#74bef6','#76b9ed','#77a2de','#81ade8','#826fa2','#848dac','#8694b5','#8793af','#88919d','#8d9bb4','#8e95f2','#8fbbf1','#917db6','#91a1b8','#94c897','#97c8eb','#985559','#a172b5','#a28347','#a28ccb','#a58bd6','#a68acf','#a7adba','#a7afc3','#aab6cb','#acb9c8','#ad6366','#af79bd','#af85c9','#afb1be','#afb9d1','#b6606c','#b7d7f1','#b96775','#b99651','#bbc2cd','#bdc7d2','#c36e72','#c46e30','#c56d7c','#c68185','#c6d5de','#cdd4de','#ced6dd','#cf5e73','#d0a95b','#d1d1d1','#d2f7da','#d39d23','#d3f6da','#d5dceb','#d63969','#d7d7d7','#d7dae4','#d7dbe6','#d7ddeb','#d8dadc','#d97b7f','#d9dce5','#d9dde6','#d9dee4','#d9dfe9','#dbdee8','#dbe0e8','#dbe2eb','#dcbd80','#dcdcdc','#dce0ea','#dce0eb','#dce1eb','#dce3eb','#dd537e','#dd7b35','#dde0eb','#dee3ec','#dee4ee','#dfdfe3','#dfe5ed','#e0e2eb','#e0e3ec','#e0e3ed','#e1e2e7','#e1e3ec','#e2e5ec','#e2e5ee','#e3eaef','#e4f9f9','#e57a8f','#e6e7ec','#e6e9ef','#e6e9f0','#e7eaee','#e7eaef','#e7eaf0','#e7eaf1','#e7ebf3','#e8bc65','#e8eaf3','#e8ebf2','#e9ebf2','#e9f2fa','#eaedf2','#eaedf6','#eaedf7','#ebebeb','#ebebf0','#ebeef2','#ebeef4','#ec7b88','#eceff2','#eceff3','#eceff4','#ecf0f5','#ecf0f7','#ededed','#ededfd','#edeef3','#edeff2','#edeff5','#edf0f4','#edf0f6','#edf0f7','#edf1f9','#edf2f6','#edf4fa','#edfbfb','#eeedf3','#eef0f5','#eef1f4','#eef1f6','#eef1f7','#eef1f8','#eef1fa','#eef2f9','#eef2fa','#efefef','#efeff3','#eff1f5','#eff1f6','#eff2f5','#eff2f7','#eff2f8','#eff2f9','#f0f0f0','#f0f0f7','#f0f1f5','#f0f2f5','#f0f2f6','#f0f2f7','#f0f2f8','#f0f3f5','#f0f3f7','#f0f7fc','#f1843f','#f1f1f4','#f1f3f5','#f1f3f7','#f1f3f8','#f1f3f9','#f1f3fa','#f1f4f8','#f1f4f9','#f1f4fa','#f2f1a6','#f2f2f2','#f2f3f5','#f2f3f6','#f2f4f7','#f2f4f8','#f2f4f9','#f2f4fa','#f3eff9','#f3f3f6','#f3f3ff','#f3f4f6','#f3f5f8','#f3f5f9','#f3f5fa','#f3f5fb','#f3f6fa','#f3f6fb','#f3f7fb','#f4c50d','#f4f4f6','#f4f5f9','#f4f6f8','#f4f6f9','#f4f6fd','#f4f7f9','#f4f9fd','#f5f5f5','#f5f5f7','#f5f6f7','#f5f6f8','#f5f6f9','#f5f7f9','#f5f7fa','#f6893b','#f6f5f5','#f6f6f5','#f6f6f6','#f6f6fa','#f6f6fc','#f6f6ff','#f6f7f8','#f6f7f9','#f6f7fa','#f6f8fb','#f6f8fc','#f7f7f7','#f7f7f9','#f7f7fa','#f7f8f9','#f7f8fa','#f7f9f9','#f7f9fc','#f7f9fe','#f8f8f8','#f8f8f9','#f8f8fa','#f8f9fb','#f8f9fc','#f8f9fd','#f9f6fc','#f9f9f9','#f9f9fb','#f9f9fe','#f9fafb','#f9fafd','#f9fbfd','#f9fcfe','#fafafa','#fafafb','#fafbfd','#fafbfe','#fbfbfb','#fbfbfc','#fbfbff','#fbfcfd','#fbfcfe','#fcce0e','#fcfad0','#fcfcfc','#fcfcfd','#fdece1','#fdf2ea','#fdfdfd','#fdfdfe','#fefee3','#fefefe','#ffd425','#ffdce0','#ffe','#fff','#fffce5','#fffce6','#fffce7','#fffdea','#fffdf1','#ffffe5','#ffffe'];

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
        div.id = id;

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

    // displayColors("Original", coloursArray);
    var rgbArr = coloursArray.map(hexToRgb);
    var sortedRgbArr = sortColors(rgbArr);
    var finalArray = sortedRgbArr.map(rgbToHex);
    displayColors("Sorted", finalArray);

});
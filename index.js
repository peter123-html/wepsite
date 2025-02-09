// Create the HTML structure dynamically using JavaScript
document.body.innerHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Peter's Web</title>
</head>
<body>
    <p style="background-image: url('me.jpg');"></p>
    <h1 style="text-align:center;">My Homepage</h1>
    <br>
    <hr>
    
    <marquee>My fav links</marquee>
    
    <table border="1">
        <tr>
            <th><a href="https://www.duolingo.com/">Duolingo</a></th>
            <th><a href="https://minecraft.net/">Minecraft</a></th>
            <th><a href="https://www.pokemon.com/us/">Pokemon</a></th>
        </tr>
        <tr>
            <td>
                <a href="https://www.duolingo.com/">
                    <img src="https://pground.com/images/duolingo-clipart-7.png" height="175px" width="175px" alt="Duolingo">
                </a>
            </td>
            <td>
                <a href="https://www.minecraft.net/">
                    <img src="https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png" height="175px" width="175px" alt="Minecraft">
                </a>
            </td>
            <td>
                <a href="https://www.pokemon.com/us/">
                    <img src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-scarlet-violet/3/30/Koraidon-2x.png" height="175px" width="175px" alt="Pokemon">
                </a>
            </td>
        </tr>
    </table>
    
    <marquee>My fav links</marquee>
    
    <hr>
</body>
</html>
`;


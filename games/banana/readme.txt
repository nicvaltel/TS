1)
in tsconfig.json comment the line
 // "module": "commonjs",     

2)
in html use type="module" (e.g. <script type="module" src="scripts/types.js"></script>)
<body>
    <canvas id="gameCanvas"></canvas>
    <script type="module" src="scripts/types.js"></script>
    <script type="module" src="scripts/player.js"></script>
    <script type="module" src="scripts/game.js"></script>
    <script type="module" src="scripts/script.js"></script>
</body>

3) 
    -- import with .js e.g.
import {IO} from "./types.js"
import {Player, updatePlayer} from "./player.js"
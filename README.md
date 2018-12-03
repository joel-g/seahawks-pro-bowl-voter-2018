# seahawks-pro-bowl-voter-2018

Go to [http://www.nfl.com/probowl/ballot](http://www.nfl.com/probowl/ballot) and open the console by pressing F12 in Chrome or Ctrl+Shift+K in Firefox.

Then paste the code from seahawks.js into the 'Console' and hit enter. Wait 3 seconds. You have just voted for every eligible Seahawks player at every position.
Delete the last line if you want to be able to look through the ballot and submit it manually.

```
let positions = ["QB", "RB", "WR", "FB", "TE", "T", "G", "C", "DE", "DT", "ILB", "OLB", "CB", "SS", "FS", "K", "KR", "P", "ST"]
for (var i = 0; i < positions.length; i++) {
    document.getElementById("button-"+positions[i]).children[0].click()
    for (var n = 0; n < document.getElementsByClassName("logo-SEA").length; n++) { document.getElementsByClassName("logo-SEA")[n].nextSibling.lastChild.click() }
}
document.getElementById("ballot-submit").click()
```

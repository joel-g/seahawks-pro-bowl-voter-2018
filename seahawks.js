let positions = ["QB", "RB", "WR", "FB", "TE", "T", "G", "C", "DE", "DT", "ILB", "OLB", "CB", "SS", "FS", "K", "KR", "P", "ST"]
for (var i = 0; i < positions.length; i++) {
    document.getElementById("button-"+positions[i]).children[0].click()
    for (var n = 0; n < document.getElementsByClassName("logo-SEA").length; n++) { document.getElementsByClassName("logo-SEA")[n].nextSibling.lastChild.click() }
}
document.getElementById("ballot-submit").click()
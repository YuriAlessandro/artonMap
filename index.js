const IS_LOCAL_DEV = location.href.includes("artonMap");

function goToMap(map) {
    if (map === "arton") window.location.href = "https://mapadearton.fichasdenimb.com.br/";
    else window.location.href = `https://mapadearton.fichasdenimb.com.br/${map}/${map}.html`;
}

$(".mapSelectionBtn").on("click", function() {
    var mapSelection = $(this).attr("data-map");
    
    if (IS_LOCAL_DEV) {
        alert("Go manually. Map selection: " + mapSelection);
        return
    }
    
    goToMap(mapSelection);
});
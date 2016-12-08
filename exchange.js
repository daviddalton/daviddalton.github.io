window.onload = listItems;
var content = "";
function listItems() {
	loadJSON('exchange.json', function(p) {
		groups = JSON.parse(p);
		for (a = 0; a < groups.length; a++) {
			var groupName = groups[a].name;
			var groupId = groups[a].group;
			var id = groups[a].id;
			for (b = 0; b < groups[a].members.length; b++) {
				var name = groups[a].members[b].name;
				var group = groups[a].members[b].group;
				var members = groups[a].members[b];
				content += '<h4>' + name + "(" + group + ")" + '</h4>'
 				showItems(content);
			}
		}
		
	});
}

function loadJSON(fileName, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function showItems(content) {
 document.getElementById('list').innerHTML = content;
}

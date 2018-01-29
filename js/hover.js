window.onload = function () {
				var i, tx, html, node;

				node = document.getElementById("source");
				tx = node.innerHTML;

				html = "";
				for (i = 0; i < tx.length; i++)
				{
				  html += "<span>" + tx.charAt(i) + "</span>";
				}

				node.innerHTML = html;
			  };
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

(function () {
	document.documentElement.style.boxSizing = "border-box";
	document.documentElement.style.width = "100%";
	document.documentElement.style.height = "100%";
	document.documentElement.style.margin = "0";
	document.documentElement.style.padding = "0";
	document.documentElement.style.overflow = "hidden";

	document.body.style.boxSizing = "border-box";
	document.body.style.width = "100%";
	document.body.style.height = "100%";
	document.body.style.margin = "0";
	document.body.style.padding = "0";
	document.body.style.overflow = "hidden";

	const div = document.createElement('div');
	div.id = 'root';
	div.style = 'width:100%; height:100%; border:1px solid #ccc;';

	document.body.appendChild(div);

	if(window.MonacoIsReady) window.MonacoIsReady(monaco);
})();

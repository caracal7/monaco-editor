import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

(function () {
	document.documentElement.style.width = "100%";
	document.documentElement.style.height = "100%";
	document.documentElement.style.margin = "0";
	document.documentElement.style.padding = "0";
	document.documentElement.style.overflow = "hidden";

	document.body.style.width = "100%";
	document.body.style.height = "100%";
	document.body.style.margin = "0";
	document.body.style.padding = "0";
	document.body.style.overflow = "hidden";

	// create div to avoid needing a HtmlWebpackPlugin template
	const div = document.createElement('div');
	div.id = 'root';
	div.style = 'width:100%; height:100%; border:1px solid #ccc;';

	document.body.appendChild(div);


})();


monaco.editor.defineTheme('myTheme', {
	base: 'vs-dark',
	inherit: true,
	rules: [
		{ token: 'global', foreground: 'FF00FF', fontStyle: "bold" },
		{ token: 'keyword', foreground: 'ff6a00', fontStyle: "bold" },
		{ token: 'comment', foreground: '666666' },
		{ token: 'number', foreground: 'ffc600' },
		{ token: 'string', foreground: 'a1c808' },
		{ token: 'type', fontStyle: 'italic' },
		{ token: 'type.identifier', foreground: 'ff0000' },
//		  { token: 'identifier', foreground: 'ff0000' },

	],
	colors: {
		'editorCursor.foreground': '#ffff00',
//		  'editor.lineHighlightBackground': '#0000FF20',
//		  'editorLineNumber.foreground': '#008800',
//		  'editor.selectionBackground': '#88000030',
//		  'editor.inactiveSelectionBackground': '#88000015'
	}
});
monaco.editor.setTheme('myTheme');


const editor = monaco.editor.create(document.getElementById('root'), {
	value: `const foo = () => 0;`,
	language: 'javascript',
	theme: "myTheme",
	acceptSuggestionOnEnter: "smart",
	suggestOnTriggerCharacters: true,
	suggestSelection: "recentlyUsed",
	folding: true,
	wordBasedSuggestions : true,
	scrollbar: {
		verticalHasArrows: true,
	},
	dragAndDrop: true,
	links: true,
	minimap: {
		enabled: true,
	},
	showFoldingControls: "always",
	scrollBeyondLastLine: false,
	smoothScrolling: true,
});



window.onresize = function () {
	editor.layout();
};

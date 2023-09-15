import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("component", {
		description: "Create a new component",
		prompts: [
			{ type: "input", name: "name", message: "Component name" },
			{ type: "list", name: "type", message: "Component type", choices: ["Atom", "Molecule", "Organism", "Page"] },
		],
		actions: [
			{
				type: "add",
				path: "packages/components/{{type}}/{{name}}/{{name}}.tsx",
				templateFile: "templates/component.hbs",
			},
			{
				type: "add",
				templateFile: "templates/package.json.hbs",
				path: `packages/components/{{type}}/{{name}}/package.json`,
			},
			{
				type: "add",
				templateFile: "templates/tsconfig.json.hbs",
				path: `packages/components/{{type}}/{{name}}/tsconfig.json`,
			},
			{
				type: "add",
				templateFile: "templates/types.ts.hbs",
				path: `packages/components/{{type}}/{{name}}/src/types.ts`,
			},
			{
				type: "add",
				templateFile: "templates/index.ts.hbs",
				path: `packages/components/{{type}}/{{name}}/src/index.ts`,
			},
		],
	});
}

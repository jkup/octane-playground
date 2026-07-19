// Ambient declaration for `.tsrx` modules so TypeScript can resolve imports
// from .ts entry files (the octane Vite plugin compiles them at build time).
declare module '*.tsrx';

// octane@0.1.10 ships no JSX type surface — packages/octane/src/jsx-runtime.d.ts
// exists upstream but is not in the published tarball. Until it is, this
// permissive namespace keeps TSC from drowning in implicit-any noise about
// <div>, <span>, etc. Real errors (bad hook args, unknown identifiers) still
// surface. Copied from the octane repo's own workaround for the same gap.
declare namespace JSX {
	interface IntrinsicElements {
		[tag: string]: any;
	}
}

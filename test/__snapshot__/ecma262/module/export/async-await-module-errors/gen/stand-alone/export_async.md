# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/module/export/async-await-module-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/module/export/async-await-module-errors/gen/stand-alone
> :: test: stand-alone
> :: case: export async
## Options

`````js
{}
`````
## Input

`````js
export async
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 6,
                "end": 12
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "export async",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6
✖ Did you mean 'async function foo() {}'? An 'async' modifier can only follow a function declaration in this context - start: 6, end: 12

```


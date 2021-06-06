# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\module\export\async-await-module-errors\gen\stand-alone
> :: test: stand-alone
> :: case: export async
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
                    "start": 6,
                    "end": 12
                },
                "flags": 16,
                "start": 6,
                "end": 12
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "export async",
    "fileName": "__root__",
    "flags": 0,
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
✖ Declaration or statement expected - start: 6, end: 12

```


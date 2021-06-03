# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\module\export\async-await-module-errors\gen\stand-alone
> :: test: stand-alone
> :: case: export async\nfunction async() { await 1; }
## Input

`````js
export async\nfunction async() { await 1; }
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
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nfunction",
                "rawText": "nfunction",
                "flags": 96,
                "start": 13,
                "end": 22
            },
            "flags": 16,
            "start": 13,
            "end": 22
        },
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 22,
                "end": 28
            },
            "argumentList": {
                "kind": 256,
                "elements": [],
                "trailingComma": false,
                "flags": 32,
                "start": 22,
                "end": 22
            },
            "flags": 268435488,
            "start": 22,
            "end": 30
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 32,
                            "end": 38
                        },
                        "flags": 16,
                        "start": 32,
                        "end": 38
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 38,
                            "end": 40
                        },
                        "flags": 16,
                        "start": 38,
                        "end": 41
                    }
                ],
                "flags": 16,
                "start": 32,
                "end": 41
            },
            "flags": 16,
            "start": 30,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "export async\\nfunction async() { await 1; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6
✖ Invalid hexadecimal escape sequence - start: 6, end: 12
✖ Invalid hexadecimal escape sequence - start: 12, end: 12
✖ Declaration or statement expected - start: 6, end: 13
✖ Expected a `;` - start: 12, end: 13
✖ Expected a `;` - start: 22, end: 28
✖ Expected a `;` - start: 38, end: 40

```


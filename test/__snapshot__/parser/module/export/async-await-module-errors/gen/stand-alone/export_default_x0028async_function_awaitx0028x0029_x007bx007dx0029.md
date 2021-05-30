# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw7/test\__snapshot__\parser\module\export\async-await-module-errors\gen\stand-alone
> :: test: stand-alone
> :: case: export default (async function await() {})
## Input

`````js
export default (async function await() {})
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 16,
                        "end": 21
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 21,
                        "end": 30
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "start": 30,
                        "end": 36
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 36,
                        "end": 38
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 38,
                        "end": 41
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 160,
                    "start": 16,
                    "end": 41
                },
                "flags": 32,
                "start": 14,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "export default (async function await() {})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6
✖ Cannot use 'await' as a name on a async generator expression - start: 30, end: 36

```


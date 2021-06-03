# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\module\export\async-await-module-errors\gen\stand-alone
> :: test: stand-alone
> :: case: export default async function await() {
## Input

`````js
export default async function await() {
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
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 14,
                    "end": 20
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 20,
                    "end": 29
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 29,
                    "end": 35
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 35,
                    "end": 37
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 37,
                    "end": 39
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 144,
                "start": 14,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "export default async function await() {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6
✖ The parser expected to find a '}' to match the '{' token here - start: 39, end: 39

```


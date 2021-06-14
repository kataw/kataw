# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/gen/stand-alone
> :: test: stand-alone
> :: case: export async function await() {}
## Options

`````js
{"module":true}
`````
## Input

`````js
export async function await() {}
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
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 6,
                    "end": 12
                },
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 12,
                    "end": 21
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 21,
                    "end": 27
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 27,
                    "end": 29
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "returnType": null,
                "flags": 144,
                "start": 6,
                "end": 32
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "export async function await() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 21, end: 27

```


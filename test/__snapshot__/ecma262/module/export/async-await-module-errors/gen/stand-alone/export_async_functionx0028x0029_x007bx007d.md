# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/module/export/async-await-module-errors/gen/stand-alone
> :: test: stand-alone
> :: case: export async function() {}
## Options

`````js
{"module":true}
`````
## Input

`````js
export async function() {}
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
                "asteriskToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 21,
                    "end": 23
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 23,
                    "end": 26
                },
                "returnType": null,
                "flags": 144,
                "start": 6,
                "end": 26
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": true,
    "source": "export async function() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 21, end: 22

```


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/import-call/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/import-call/gen/stand-alone
> :: test: stand-alone
> :: case: async () => { await import(x) }
## Options

`````js
{}
`````
## Input

`````js
async () => { await import(x) }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 7,
                "end": 7
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 8,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 206,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 64,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 29
                },
                "flags": 32,
                "start": 11,
                "end": 31
            },
            "flags": 288,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async () => { await import(x) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

async  =>  {
  await ;
}
```

### Diagnostics

```javascript
✔ No errors
```


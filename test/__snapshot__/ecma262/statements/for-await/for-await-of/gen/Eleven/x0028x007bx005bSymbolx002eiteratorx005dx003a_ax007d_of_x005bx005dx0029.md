# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/gen/Eleven
> :: test: Eleven
> :: case: ({[Symbol.iterator]: a} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { 'use strict'; for
await ({[Symbol.iterator]: a} of []) { } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "start": 20,
                            "end": 33
                        }
                    ],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 34,
                                "end": 38
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 65,
                                "start": 38,
                                "end": 44
                            },
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Symbol",
                                                        "rawText": "Symbol",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 54
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "start": 55,
                                                        "end": 63
                                                    },
                                                    "flags": 536870944,
                                                    "start": 48,
                                                    "end": 63
                                                },
                                                "flags": 32,
                                                "start": 47,
                                                "end": 64
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 65,
                                                "end": 67
                                            },
                                            "flags": 32,
                                            "start": 47,
                                            "end": 67
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 47,
                                    "end": 67
                                },
                                "flags": 48,
                                "start": 46,
                                "end": 68
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 68,
                                "end": 71
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 73,
                                    "end": 73
                                },
                                "flags": 32,
                                "start": 71,
                                "end": 74
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 77,
                                    "end": 77
                                },
                                "flags": 16,
                                "start": 75,
                                "end": 79
                            },
                            "flags": 80,
                            "start": 34,
                            "end": 79
                        }
                    ],
                    "flags": 4194336,
                    "start": 20,
                    "end": 79
                },
                "flags": 32,
                "start": 18,
                "end": 81
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "async function f() { 'use strict'; for\nawait ({[Symbol.iterator]: a} of []) { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

async function f() {
  for await ({ [Symbol.iterator]: a } of [])
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```


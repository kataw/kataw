# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/for-await-of/gen/Five
> :: test: Five
> :: case: (var {[Symbol.iterator]: a = 1} of [])
## Input

`````js
async function f() { 'use strict'; for await (var {[Symbol.iterator]: a = 1} of [])  { } }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                "flags": 64,
                                "start": 38,
                                "end": 44
                            },
                            "initializer": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 204,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 129,
                                                                "member": {
                                                                    "kind": 134299649,
                                                                    "text": "Symbol",
                                                                    "rawText": "Symbol",
                                                                    "flags": 96,
                                                                    "start": 52,
                                                                    "end": 58
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "iterator",
                                                                    "rawText": "iterator",
                                                                    "flags": 96,
                                                                    "start": 59,
                                                                    "end": 67
                                                                },
                                                                "flags": 536870944,
                                                                "start": 52,
                                                                "end": 67
                                                            },
                                                            "flags": 32,
                                                            "start": 51,
                                                            "end": 68
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 69,
                                                            "end": 71
                                                        },
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 73,
                                                            "end": 75
                                                        },
                                                        "flags": 32,
                                                        "start": 51,
                                                        "end": 75
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 51,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "start": 49,
                                            "end": 76
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 49,
                                        "end": 76
                                    }
                                ],
                                "flags": 16,
                                "start": 49,
                                "end": 76
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 76,
                                "end": 79
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 81,
                                    "end": 81
                                },
                                "flags": 32,
                                "start": 79,
                                "end": 82
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 86,
                                    "end": 86
                                },
                                "flags": 16,
                                "start": 83,
                                "end": 88
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 88
                        }
                    ],
                    "flags": 4194336,
                    "start": 20,
                    "end": 88
                },
                "flags": 32,
                "start": 18,
                "end": 90
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "async function f() { 'use strict'; for await (var {[Symbol.iterator]: a = 1} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

async function f() {
  for await ( of [])
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```


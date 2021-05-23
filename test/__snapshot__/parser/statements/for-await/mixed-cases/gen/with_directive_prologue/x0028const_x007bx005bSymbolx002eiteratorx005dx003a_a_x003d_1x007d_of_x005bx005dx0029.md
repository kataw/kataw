# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: with directive prologue
> :: case: (const {[Symbol.iterator]: a = 1} of [])
## Input

`````js
async function f() { 'use strict'; let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }
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
                "flags": 0,
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
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 34,
                                "end": 38
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 38,
                                        "end": 40
                                    }
                                ],
                                "flags": 16,
                                "start": 38,
                                "end": 40
                            },
                            "flags": 33554448,
                            "start": 34,
                            "end": 41
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 0,
                                "start": 41,
                                "end": 45
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 85,
                                "end": 88
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
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
                                                                    "start": 61,
                                                                    "end": 67
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "iterator",
                                                                    "rawText": "iterator",
                                                                    "flags": 96,
                                                                    "start": 68,
                                                                    "end": 76
                                                                },
                                                                "flags": 536870944,
                                                                "start": 61,
                                                                "end": 76
                                                            },
                                                            "flags": 32,
                                                            "start": 60,
                                                            "end": 77
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 78,
                                                            "end": 80
                                                        },
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 82,
                                                            "end": 84
                                                        },
                                                        "flags": 32,
                                                        "start": 60,
                                                        "end": 84
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 60,
                                                "end": 84
                                            },
                                            "flags": 32,
                                            "start": 58,
                                            "end": 85
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 58,
                                        "end": 85
                                    }
                                ],
                                "flags": 16777232,
                                "start": 58,
                                "end": 85
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 90,
                                    "end": 90
                                },
                                "flags": 32,
                                "start": 88,
                                "end": 91
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 92,
                                "end": 94
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 45,
                                "end": 51
                            },
                            "flags": 16,
                            "start": 41,
                            "end": 94
                        }
                    ],
                    "flags": 4194336,
                    "start": 20,
                    "end": 94
                },
                "flags": 32,
                "start": 18,
                "end": 96
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "async function f() { 'use strict'; let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

async function f() {
  let a;
  for await ( of []);
}
```

### Diagnostics

```javascript
✔ No errors
```


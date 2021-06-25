# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/for-await/mixed-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/for-await/mixed-cases/gen/with_directive_prologue
> :: test: with directive prologue
> :: case: ({[Symbol.iterator]: a} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { 'use strict'; let a; for await ({[Symbol.iterator]: a} of []) ; }
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
                "start": 17,
                "end": 17
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
                                "flags": 80,
                                "start": 41,
                                "end": 45
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 45,
                                "end": 51
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
                                                        "start": 55,
                                                        "end": 61
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "start": 62,
                                                        "end": 70
                                                    },
                                                    "flags": 536870944,
                                                    "start": 55,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 54,
                                                "end": 71
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 72,
                                                "end": 74
                                            },
                                            "flags": 32,
                                            "start": 54,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 54,
                                    "end": 74
                                },
                                "flags": 48,
                                "start": 53,
                                "end": 75
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 75,
                                "end": 78
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 80,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 78,
                                "end": 81
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 82,
                                "end": 84
                            },
                            "flags": 80,
                            "start": 41,
                            "end": 84
                        }
                    ],
                    "flags": 4194336,
                    "start": 20,
                    "end": 84
                },
                "flags": 32,
                "start": 18,
                "end": 86
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "async function f() { 'use strict'; let a; for await ({[Symbol.iterator]: a} of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript

async function f() {
  let a;
  for await ({ [Symbol.iterator]: a } of []);
}
```

### Diagnostics

```javascript
✔ No errors
```


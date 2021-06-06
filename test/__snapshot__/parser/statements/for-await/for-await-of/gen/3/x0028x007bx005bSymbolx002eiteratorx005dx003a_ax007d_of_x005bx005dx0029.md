# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/statements/for-await/for-await-of/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\for-await\for-await-of\gen\3
> :: test: 3
> :: case: ({[Symbol.iterator]: a} of [])
## Input

`````js
async function * f() { for await ({[Symbol.iterator]: a} of []) { } }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 18,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 22,
                                "end": 26
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 26,
                                "end": 32
                            },
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Symbol",
                                                        "rawText": "Symbol",
                                                        "flags": 96,
                                                        "start": 36,
                                                        "end": 42
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "start": 43,
                                                        "end": 51
                                                    },
                                                    "flags": 536870944,
                                                    "start": 36,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 52
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 53,
                                                "end": 55
                                            },
                                            "flags": 32,
                                            "start": 35,
                                            "end": 55
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 35,
                                    "end": 55
                                },
                                "flags": 48,
                                "start": 34,
                                "end": 56
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 56,
                                "end": 59
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 61,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 59,
                                "end": 62
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 65,
                                    "end": 65
                                },
                                "flags": 16,
                                "start": 63,
                                "end": 67
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 67
                },
                "flags": 32,
                "start": 20,
                "end": 69
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "async function * f() { for await ({[Symbol.iterator]: a} of []) { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

async function * f() {
  for await ({ [Symbol.iterator]: a } of [])
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```


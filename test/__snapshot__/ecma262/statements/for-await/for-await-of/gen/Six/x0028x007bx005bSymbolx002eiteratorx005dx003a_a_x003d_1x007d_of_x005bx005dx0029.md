# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/for-await/for-await-of/gen/Six
> :: test: Six
> :: case: ({[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function * f() { 'use strict'; for await ({[Symbol.iterator]: a = 1} of [])  { } }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 19
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
                            "transformFlags": 0,
                            "start": 22,
                            "end": 35
                        }
                    ],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 40
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 46
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
                                                        "transformFlags": 0,
                                                        "start": 50,
                                                        "end": 56
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 57,
                                                        "end": 65
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 50,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 66
                                            },
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 69,
                                                    "end": 71
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 71,
                                                    "end": 73
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 49,
                                                "end": 73
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 49,
                                            "end": 73
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 73
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 48,
                                "end": 74
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 77
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 79
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 77,
                                "end": 80
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 84,
                                    "end": 84
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 81,
                                "end": 86
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 86
                        }
                    ],
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 86
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 88
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "source": "async function * f() { 'use strict'; for await ({[Symbol.iterator]: a = 1} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript
async function *f() {

  "'use strict'";
  for await ({ [Symbol.iterator]: a = 1 } of []) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


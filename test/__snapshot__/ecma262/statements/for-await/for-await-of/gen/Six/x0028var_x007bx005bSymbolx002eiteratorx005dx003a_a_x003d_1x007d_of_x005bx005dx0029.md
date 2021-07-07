# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/for-await/for-await-of/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/for-await/for-await-of/gen/Six
> :: test: Six
> :: case: (var {[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function * f() { 'use strict'; for await (var {[Symbol.iterator]: a = 1} of [])  { } }
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
                "transformFlags": 32,
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
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 51
                                },
                                "declarationList": {
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
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "Symbol",
                                                                        "rawText": "Symbol",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 54,
                                                                        "end": 60
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "iterator",
                                                                        "rawText": "iterator",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 61,
                                                                        "end": 69
                                                                    },
                                                                    "flags": 96,
                                                                    "transformFlags": 2,
                                                                    "start": 54,
                                                                    "end": 69
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 70
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 71,
                                                                "end": 73
                                                            },
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 77
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 53,
                                                    "end": 77
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 78
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 128,
                                            "start": 51,
                                            "end": 78
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 78
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 81
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 78,
                                "end": 81
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 83,
                                    "end": 83
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 81,
                                "end": 84
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 88
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 90
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 90
                        }
                    ],
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 90
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 92
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "async function * f() { 'use strict'; for await (var {[Symbol.iterator]: a = 1} of [])  { } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript
async function *f() {

  "'use strict'";
  for await (var { [Symbol.iterator]: a = 1 } of []) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


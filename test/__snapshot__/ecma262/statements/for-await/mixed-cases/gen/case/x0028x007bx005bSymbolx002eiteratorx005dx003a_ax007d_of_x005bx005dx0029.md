# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/for-await/mixed-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/for-await/mixed-cases/gen/case
> :: test: case
> :: case: ({[Symbol.iterator]: a} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { let a; for await ({[Symbol.iterator]: a} of []) ; }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
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
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 128,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 27
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 31
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 37
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
                                                        "start": 41,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "iterator",
                                                        "rawText": "iterator",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 56
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 41,
                                                    "end": 56
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 57
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 60
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 40,
                                            "end": 60
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 60
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 39,
                                "end": 61
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 64
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 66
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 64,
                                "end": 67
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 68,
                                "end": 70
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 70
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 72
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "source": "async function f() { let a; for await ({[Symbol.iterator]: a} of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 72
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


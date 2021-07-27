# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Options

`````js
{}
`````
## Input

`````js
let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "asteriskToken": {
                                "kind": 201360950,
                                "flags": 64,
                                "transformFlags": 32,
                                "start": 18,
                                "end": 19
                            },
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 20
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 27
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 29,
                                                                    "end": 34
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 34,
                                                                    "end": 37
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 29,
                                                                "end": 37
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 29,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 38
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": {
                                                "kind": 37757016,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 46
                                            },
                                            "finallyBlock": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 120,
                                                            "expression": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 48,
                                                                    "end": 53
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 43,
                                                                    "rawText": "43",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 56
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 48,
                                                                "end": 56
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4096,
                                                            "start": 48,
                                                            "end": 57
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 57,
                                                                "end": 64
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 13,
                                                                "rawText": "13",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 64,
                                                                "end": 67
                                                            },
                                                            "flags": 80,
                                                            "transformFlags": 256,
                                                            "start": 57,
                                                            "end": 67
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 68
                                            },
                                            "flags": 16,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 68
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 68
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 70
                            },
                            "returnType": null,
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 70
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 70
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 70
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
let foo = function *() {
    try {
      yield 42;
    } finally {
      yield 43;
      return 13;
    }
  };
```

### Diagnostics

```javascript
✔ No errors
```


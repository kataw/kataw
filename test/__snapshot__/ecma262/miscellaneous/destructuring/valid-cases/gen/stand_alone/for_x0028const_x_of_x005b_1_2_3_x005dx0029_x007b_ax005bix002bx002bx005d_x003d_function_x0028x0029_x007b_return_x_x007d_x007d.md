# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }
## Options

`````js
{}
`````
## Input

`````js
for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 12
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 10,
                            "end": 12
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 12,
                "end": 15
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 15,
                "end": 27
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 127,
                                        "operandToken": {
                                            "kind": 196635,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "operand": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 4,
                                    "start": 30,
                                    "end": 37
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 48
                                    },
                                    "asteriskToken": null,
                                    "name": null,
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 50,
                                        "end": 50
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 60
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "flags": 80,
                                                    "transformFlags": 256,
                                                    "start": 53,
                                                    "end": 63
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 53,
                                            "end": 63
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 65
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 65
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 30,
                                "end": 65
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 66
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 66
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 68
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

for (const x of [1, 2, 3]) {
    a[i++] = function () {
      return x;
    };
  }
```

### Diagnostics

```javascript
✔ No errors
```


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\destructuring\valid-cases\gen\stand_alone
> :: test: stand alone
> :: case: for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }
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
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 10,
                        "end": 12
                    }
                ],
                "flags": 16777232,
                "start": 10,
                "end": 12
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
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
                            "start": 17,
                            "end": 19
                        },
                        {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        {
                            "kind": 201392130,
                            "text": 3,
                            "rawText": "3",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 17,
                    "end": 25
                },
                "flags": 32,
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
                                    "kind": 536871042,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 127,
                                        "operandToken": {
                                            "kind": 196635,
                                            "flags": 64,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "operand": {
                                            "kind": 134299649,
                                            "text": "i",
                                            "rawText": "i",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 33,
                                        "end": 36
                                    },
                                    "flags": 32,
                                    "start": 30,
                                    "end": 37
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 37,
                                    "end": 39
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 48
                                    },
                                    "generatorToken": null,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 48,
                                        "end": 51
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
                                                        "start": 53,
                                                        "end": 60
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "flags": 16,
                                                    "start": 0,
                                                    "end": 53
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 53,
                                            "end": 63
                                        },
                                        "flags": 32,
                                        "start": 51,
                                        "end": 65
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 32,
                                    "start": 39,
                                    "end": 65
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 65
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 66
                        }
                    ],
                    "flags": 16,
                    "start": 30,
                    "end": 66
                },
                "flags": 16,
                "start": 28,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "for (const x of [ 1, 2, 3 ]) { a[i++] = function () { return x; }; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

for (const of [1, 2, 3])
  {
     = function () {
      return  x;
    };
  }
```

### Diagnostics

```javascript
✔ No errors
```


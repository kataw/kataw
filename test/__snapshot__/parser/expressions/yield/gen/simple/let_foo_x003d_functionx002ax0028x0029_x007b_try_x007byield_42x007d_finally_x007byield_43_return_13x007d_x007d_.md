# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\simple
> :: test: simple
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
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
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 18,
                                "end": 19
                            },
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 21
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
                                                                    "start": 34,
                                                                    "end": 37
                                                                },
                                                                "flags": 32,
                                                                "start": 29,
                                                                "end": 37
                                                            },
                                                            "flags": 16,
                                                            "start": 29,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "start": 27,
                                                "end": 38
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": {
                                                "kind": 37757016,
                                                "flags": 64,
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
                                                                    "start": 53,
                                                                    "end": 56
                                                                },
                                                                "flags": 32,
                                                                "start": 48,
                                                                "end": 56
                                                            },
                                                            "flags": 16,
                                                            "start": 48,
                                                            "end": 57
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 80,
                                                                "start": 57,
                                                                "end": 64
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 13,
                                                                "rawText": "13",
                                                                "flags": 96,
                                                                "start": 64,
                                                                "end": 67
                                                            },
                                                            "flags": 16,
                                                            "start": 0,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "flags": 16,
                                                "start": 46,
                                                "end": 68
                                            },
                                            "flags": 16,
                                            "start": 23,
                                            "end": 68
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 23,
                                    "end": 68
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 70
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 288,
                            "start": 9,
                            "end": 70
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 70
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 70
            },
            "flags": 33554448,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

let foo = function * () {
  try {
    yield 42;
  } try{
    yield 43;
    return  13;
  }
};
```

### Diagnostics

```javascript
✔ No errors
```


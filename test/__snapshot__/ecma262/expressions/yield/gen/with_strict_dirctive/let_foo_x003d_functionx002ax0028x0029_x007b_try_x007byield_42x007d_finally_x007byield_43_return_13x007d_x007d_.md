# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let foo = function*() { try {yield 42} finally {yield 43; return 13} };
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 23,
                                "end": 32
                            },
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 32,
                                "end": 33
                            },
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 34,
                                "end": 34
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
                                                "start": 37,
                                                "end": 41
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
                                                                    "start": 43,
                                                                    "end": 48
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 42,
                                                                    "rawText": "42",
                                                                    "flags": 96,
                                                                    "start": 48,
                                                                    "end": 51
                                                                },
                                                                "flags": 32,
                                                                "start": 43,
                                                                "end": 51
                                                            },
                                                            "flags": 16,
                                                            "start": 43,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 43,
                                                    "end": 51
                                                },
                                                "flags": 16,
                                                "start": 41,
                                                "end": 52
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": {
                                                "kind": 37757016,
                                                "flags": 64,
                                                "start": 52,
                                                "end": 60
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
                                                                    "start": 62,
                                                                    "end": 67
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": {
                                                                    "kind": 201392130,
                                                                    "text": 43,
                                                                    "rawText": "43",
                                                                    "flags": 96,
                                                                    "start": 67,
                                                                    "end": 70
                                                                },
                                                                "flags": 32,
                                                                "start": 62,
                                                                "end": 70
                                                            },
                                                            "flags": 16,
                                                            "start": 62,
                                                            "end": 71
                                                        },
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 80,
                                                                "start": 71,
                                                                "end": 78
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 13,
                                                                "rawText": "13",
                                                                "flags": 96,
                                                                "start": 78,
                                                                "end": 81
                                                            },
                                                            "flags": 80,
                                                            "start": 71,
                                                            "end": 81
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 62,
                                                    "end": 81
                                                },
                                                "flags": 16,
                                                "start": 60,
                                                "end": 82
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 82
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 37,
                                    "end": 82
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 84
                            },
                            "returnType": null,
                            "flags": 288,
                            "start": 23,
                            "end": 84
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 84
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 84
            },
            "flags": 33554448,
            "start": 13,
            "end": 85
        }
    ],
    "isModule": false,
    "source": "'use strict'; let foo = function*() { try {yield 42} finally {yield 43; return 13} };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

"'use strict'";
let  foo = function * () {
  try {
    yield  42;
  }
  finally {
    yield  43;
    return 13;
  }
} ;

```

### Diagnostics

```javascript
✔ No errors
```


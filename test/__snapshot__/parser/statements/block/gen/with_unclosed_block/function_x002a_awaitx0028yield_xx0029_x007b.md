# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: function * await(yield x) ; {
## Input

`````js
{ {} finally(x) { function * await(yield x) ; {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 12
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 17,
                            "start": 0,
                            "end": 26
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 26,
                            "start": 512,
                            "end": 28
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 28,
                            "end": 34
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 35,
                                        "end": 40
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 35,
                                    "end": 40
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 42
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 34,
                            "end": 43
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 256,
                            "start": 43,
                            "end": 43
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 2176,
                        "start": 17,
                        "end": 43
                    },
                    {
                        "kind": 168,
                        "flags": 128,
                        "start": 43,
                        "end": 45
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 47,
                            "end": 47
                        },
                        "flags": 128,
                        "start": 45,
                        "end": 47
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 47
            },
            "flags": 128,
            "start": 15,
            "end": 47
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 14, end: 15
✖ `Yield` expression cannot be used in function parameters - start: 35, end: 40
✖ ',' expected - start: 40, end: 42
✖ Unexpected token. - start: 43, end: 45

```


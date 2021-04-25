# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: function * await(yield x) ; {
## Input

`````js
{ [catch] function * await(yield x) ; {
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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
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
                                "start": 8,
                                "end": 8
                            },
                            "flags": 128,
                            "start": 8,
                            "end": 8
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
                                "start": 9,
                                "end": 9
                            },
                            "flags": 128,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 768,
                            "start": 9,
                            "end": 18
                        },
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 768,
                            "start": 18,
                            "end": 20
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 20,
                            "end": 26
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
                                        "start": 27,
                                        "end": 32
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 32
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 256,
                                    "start": 32,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 26,
                            "end": 35
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 256,
                            "start": 35,
                            "end": 35
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 2176,
                        "start": 9,
                        "end": 35
                    },
                    {
                        "kind": 168,
                        "flags": 128,
                        "start": 35,
                        "end": 37
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 39,
                            "end": 39
                        },
                        "flags": 128,
                        "start": 37,
                        "end": 39
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 39
            },
            "flags": 128,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "{ [catch] function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 3, end: 8
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 8, end: 9
@{x2716}@ Unexpected token. - start: 9, end: 18
@{x2716}@ `Yield` expression cannot be used in function parameters - start: 27, end: 32
@{x2716}@ ',' expected - start: 32, end: 34
@{x2716}@ Unexpected token. - start: 35, end: 37
@{x2716}@ Unexpected token. - start: 35, end: 37
@{x2716}@ Unexpected token. - start: 39, end: 39
@{x2716}@ Unexpected token. - start: 39, end: 39

```


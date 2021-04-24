# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: function * await(yield x) ; {
## Input

`````js
{[ function * await(yield x) ; {
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
                                "elements": [
                                    {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 768,
                                            "start": 2,
                                            "end": 11
                                        },
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 768,
                                            "start": 13,
                                            "end": 19
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
                                                        "start": 20,
                                                        "end": 25
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 20,
                                                    "end": 25
                                                },
                                                {
                                                    "kind": 215,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 768,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 256,
                                                    "start": 25,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 19,
                                            "end": 28
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 256,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 2304,
                                        "start": 2,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 28
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 30
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 128,
                        "start": 30,
                        "end": 32
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "{[ function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


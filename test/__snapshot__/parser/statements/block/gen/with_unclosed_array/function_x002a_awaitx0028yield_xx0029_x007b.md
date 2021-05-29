# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: d
- Path: y
> :: test: with unclosed array
> :: case: function * await(yield x) ; {
## Input

`````js
{[ function * await(yield x) ; {
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                            "flags": 64,
                                            "start": 2,
                                            "end": 11
                                        },
                                        "generatorToken": {
                                            "kind": 67143222,
                                            "flags": 64,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "name": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
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
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 25
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
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
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 27
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 19,
                                            "end": 28
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 28,
                                            "end": 28
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 288,
                                        "start": 2,
                                        "end": 28
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 30
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "{[ function * await(yield x) ; {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 20, end: 25
✖ ',' expected - start: 25, end: 27
✖ Missing an opening brace - '{ - start: 28, end: 30
✖ Expression expected - start: 28, end: 30
✖ The parser expected to find a '}' to match the '{' token here - start: 32, end: 32

```


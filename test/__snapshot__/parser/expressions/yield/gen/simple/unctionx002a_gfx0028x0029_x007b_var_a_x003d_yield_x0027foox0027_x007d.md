# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
unction* gf() { var a = yield 'foo'; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": "unction",
                    "rawText": "unction",
                    "flags": 768,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "text": "gf",
                        "rawText": "gf",
                        "flags": 768,
                        "start": 8,
                        "end": 11
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 155,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 768,
                            "start": 15,
                            "end": 19
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 81921,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 768,
                                        "start": 23,
                                        "end": 29
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 29
                                }
                            ],
                            "flags": 128,
                            "start": 19,
                            "end": 29
                        },
                        "flags": 128,
                        "start": 15,
                        "end": 29
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 15,
                "end": 29
            },
            "flags": 128,
            "start": 13,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "foo",
                "rawText": "foo",
                "flags": 67109632,
                "start": 29,
                "end": 35
            },
            "flags": 128,
            "start": 29,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "unction* gf() { var a = yield 'foo'; }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 15
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 29,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 35
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 36,
            "end": 38
        }
    ],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
unction* gf() { var a = yield 'foo'; }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: unction* gf() { var a = yield 'foo'; }
## Input

`````js
unction* gf() { var a = yield 'foo'; }
`````
```


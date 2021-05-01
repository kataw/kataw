# Kataw parser test case

## Input

`````js
{ (x = x + foo(a, yield y)) => x; }
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
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 27,
                                "end": 30
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": " x",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": " foo",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 14
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 16
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": " yield",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 23
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": " y",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 25
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 15,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 1,
                                    "end": 26
                                }
                            ],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": " x",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ (x = x + foo(a, yield y)) => x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 23, end: 25

```


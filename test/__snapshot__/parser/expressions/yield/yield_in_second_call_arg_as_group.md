# Kataw parser test case

## Input

`````js
{ (x = x + foo(a, yield y)); }
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
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 34098,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
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
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 16
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 768,
                                                    "start": 17,
                                                    "end": 23
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 15,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 10,
                                        "end": 26
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 28
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 28
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "{ (x = x + foo(a, yield y)); }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 23,
            "end": 25
        }
    ],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


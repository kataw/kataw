# Kataw parser test case

## Input

`````js
async (x = (yield x))
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 17
                    },
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "async (x = (yield x))",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 20,
            "end": 21
        }
    ],
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


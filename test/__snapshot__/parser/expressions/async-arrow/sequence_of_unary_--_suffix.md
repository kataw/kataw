# Kataw parser test case

## Input

`````js
async (x--, y) => x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 81921,
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
                        "kind": 127,
                        "operandToken": {
                            "kind": 196636,
                            "flags": 768,
                            "start": 8,
                            "end": 10
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 7,
                        "end": 10
                    },
                    {
                        "kind": 81921,
                        "text": "y",
                        "rawText": "y",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "async (x--, y) => x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 14,
            "end": 17
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


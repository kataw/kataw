# Kataw parser test case

## Input

`````js
async (x, /x/g) => x
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
                        "kind": 81921,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 221,
                        "text": "/x/g",
                        "flags": 768,
                        "start": 9,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 256,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "flags": 128,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "async (x, /x/g) => x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 15,
            "end": 18
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


# Kataw parser test case

## Input

`````js
!3 ** 2;
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
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": 3,
                        "rawText": "3",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 2
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 768,
                    "start": 2,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": 2,
                    "rawText": "2",
                    "flags": 768,
                    "start": 5,
                    "end": 7
                },
                "flags": 256,
                "start": 0,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "!3 ** 2;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


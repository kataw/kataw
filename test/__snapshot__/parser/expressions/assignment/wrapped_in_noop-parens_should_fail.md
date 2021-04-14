# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
(1) = x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 81921,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
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
            "end": 7
        }
    ],
    "isModule": false,
    "text": "(1) = x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 3,
            "end": 5
        }
    ],
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


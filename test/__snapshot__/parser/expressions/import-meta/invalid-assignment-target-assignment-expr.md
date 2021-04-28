# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import.meta = 0;
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
                "kind": 125,
                "left": {
                    "kind": 207,
                    "importKeyword": {
                        "kind": 37814364,
                        "flags": 768,
                        "start": 0,
                        "end": 6
                    },
                    "flags": 768,
                    "start": 6,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 6,
                "end": 15
            },
            "flags": 128,
            "start": 6,
            "end": 16
        }
    ],
    "isModule": true,
    "text": "import.meta = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13

```


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

### CST

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
                        "flags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "metaIdentifier": {
                        "kind": 16595,
                        "flags": 0,
                        "start": 7,
                        "end": 11
                    },
                    "flags": 6,
                    "start": 96,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "start": 6,
                "end": 15
            },
            "flags": 16,
            "start": 6,
            "end": 16
        }
    ],
    "isModule": true,
    "source": "import.meta = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 11, end: 13

```


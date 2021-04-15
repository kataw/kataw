# Kataw parser test case

## Input

`````js
delete typeof true
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 768,
                        "start": 6,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134,
                        "text": true,
                        "flags": 768,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "delete typeof true",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


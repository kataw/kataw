# Kataw parser test case

## Input

`````js
new +
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 34098,
                        "flags": 3,
                        "start": 512,
                        "end": 5
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 12,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 5
                },
                "argumentList": null,
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "text": "new +",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 5, end: 5

```


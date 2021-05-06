# Kataw parser test case

## Input

`````js
delete.500
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 64,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 201392130,
                    "text": 0.5,
                    "rawText": ".500",
                    "flags": 32864,
                    "start": 6,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "delete.500",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

delete0.5;
```

### Diagnostics

```javascript
✔ No errors
```


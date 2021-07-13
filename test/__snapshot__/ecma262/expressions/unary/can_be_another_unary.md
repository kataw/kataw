# Kataw parser test case

## Input

`````js
delete typeof true
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
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477613,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 13
                    },
                    "operand": {
                        "kind": 24752947,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 18
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 6,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "delete typeof true",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
delete typeof true;
```

### Diagnostics

```javascript
✔ No errors
```


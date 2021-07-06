# Kataw parser test case

## Input

`````js
(!t).y
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 65584,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "operand": {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 4
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(!t).y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

(!t).y;
```

### Diagnostics

```javascript
✔ No errors
```


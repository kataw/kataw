# Kataw parser test case

## Input

`````js
(delete /a/g.x);
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
                "kind": 121,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    },
                    "operand": {
                        "kind": 129,
                        "member": {
                            "kind": 371,
                            "text": "/a/g",
                            "rawText": "/a/g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 12
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 7,
                        "end": 14
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 1,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "(delete /a/g.x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
(delete /a/g.x);
```

### Diagnostics

```javascript
✔ No errors
```


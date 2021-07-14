# Kataw parser test case

## Input

`````js
--/b/.c
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
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "operand": {
                    "kind": 129,
                    "member": {
                        "kind": 371,
                        "text": "/b/",
                        "rawText": "/b/",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 5
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 96,
                    "transformFlags": 2,
                    "start": 2,
                    "end": 7
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "--/b/.c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
-- /b/.c;
```

### Diagnostics

```javascript
✔ No errors
```


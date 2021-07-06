# Kataw parser test case

## Input

`````js
(4..x)()
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
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 201392130,
                            "text": 4,
                            "rawText": "4.",
                            "flags": 32864,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        },
                        "flags": 32864,
                        "transformFlags": 2,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 6
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "(4..x)()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
(4..x)();
```

### Diagnostics

```javascript
✔ No errors
```


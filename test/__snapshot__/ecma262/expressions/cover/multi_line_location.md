# Kataw parser test case

## Input

`````js
a = (
  b,
  c
)
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 9
                            },
                            {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 14
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 3,
                        "end": 16
                    },
                    "flags": 3,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "a = (\n  b,\n  c\n)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
a = (b, c);
```

### Diagnostics

```javascript
✔ No errors
```


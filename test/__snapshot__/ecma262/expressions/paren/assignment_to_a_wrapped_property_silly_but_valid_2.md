# Kataw parser test case

## Input

`````js
(a[b]) += 1;
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
                    "kind": 121,
                    "expression": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 4,
                        "start": 0,
                        "end": 5
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(a[b]) += 1;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
(a[b]) += 1;
```

### Diagnostics

```javascript
✔ No errors
```


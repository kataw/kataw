# Kataw parser test case

## Input

`````js
(a.b = {});
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
                    "kind": 125,
                    "left": {
                        "kind": 129,
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
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 0,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 0,
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(a.b = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
(a.b = {});
```

### Diagnostics

```javascript
✔ No errors
```


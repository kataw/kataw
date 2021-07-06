# Kataw parser test case

## Input

`````js
(-a, b) => {}
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
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 126,
                            "operandToken": {
                                "kind": 134318643,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 6
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 10,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "(-a, b) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 10

```


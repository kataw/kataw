# Kataw parser test case

## Input

`````js
(a, b++) => {}
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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 5
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 7
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(a, b++) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' expected - start: 8, end: 11

```


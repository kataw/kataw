# Kataw parser test case

## Input

`````js
while (true) { continue /* Multiline\nComment */there; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 23
                            },
                            "label": {
                                "kind": 134299649,
                                "text": "there",
                                "rawText": "there",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 53
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 54
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 54
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 56
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "while (true) { continue /* Multiline\\nComment */there; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 14, end: 54

```


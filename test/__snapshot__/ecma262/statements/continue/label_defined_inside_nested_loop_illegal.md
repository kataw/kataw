# Kataw parser test case

## Input

`````js
while (true) while (true) x: continue x;
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
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 18
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 24
                },
                "statement": {
                    "kind": 163,
                    "label": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 28
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 37
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 40
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 40
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 40
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "while (true) while (true) x: continue x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 28, end: 40

```


# Kataw parser test case

## Input

`````js
(a, (b)) => 42
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
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 3,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 7
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 7
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 42,
                "rawText": "42",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(a, (b)) => 42",
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
✖ Expected a `;` - start: 8, end: 11

```


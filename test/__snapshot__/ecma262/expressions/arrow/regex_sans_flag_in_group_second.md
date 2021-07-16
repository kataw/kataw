# Kataw parser test case

## Input

`````js
(x, /x/g) => x
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 371,
                            "text": "/x/g",
                            "rawText": "/x/g",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
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
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(x, /x/g) => x",
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
✖ '; ' expected - start: 9, end: 12

```


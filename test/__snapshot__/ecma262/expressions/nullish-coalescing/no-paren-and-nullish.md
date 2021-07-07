# Kataw parser test case

## Input

`````js
c && d ?? e;
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 33594,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 33047,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "flags": 96,
                "transformFlags": 5120,
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
    "source": "c && d ?? e;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '&&' and '??' operations cannot be mixed without parentheses - start: 6, end: 9

```


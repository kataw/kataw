# Kataw parser test case

## Input

`````js
(x);
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "(x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
(x);
```

### Diagnostics

```javascript
✔ No errors
```


# Kataw parser test case

## Input

`````js
(/x/) => x
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
                    "kind": 371,
                    "text": "/x/",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 4
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(/x/) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 0, end: 8

```


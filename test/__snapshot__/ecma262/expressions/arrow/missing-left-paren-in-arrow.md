# Kataw parser test case

## Input

`````js
) => 0
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
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 6
        }
    ],
    "isModule": false,
    "source": ") => 0",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 0, end: 1
✖ Declaration or statement expected - start: 1, end: 4

```


# Kataw parser test case

## Input

`````js
(this)
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
                    "kind": 4276321,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 5
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(this)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

(this);
```

### Diagnostics

```javascript
✔ No errors
```


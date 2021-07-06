# Kataw parser test case

## Input

`````js

[]


// detached comment
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "\n[]\n\n\n// detached comment",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

[];
```

### Diagnostics

```javascript
✔ No errors
```


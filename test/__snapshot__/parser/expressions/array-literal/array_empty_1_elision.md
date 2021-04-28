# Kataw parser test case

## Input

`````js
[,]
`````

## Output

### Hybrid CST

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
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 1,
                            "end": 1
                        }
                    ],
                    "trailingComma": true,
                    "flags": 256,
                    "start": 1,
                    "end": 2
                },
                "flags": 256,
                "start": 0,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "text": "[,]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```


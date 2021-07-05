# Kataw parser test case

## Input

`````js
[,]
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
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1,
                            "end": 1
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "[,]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3
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


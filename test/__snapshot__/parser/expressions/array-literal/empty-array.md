# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
[]
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
                    "elements": [],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 1,
                    "end": 1
                },
                "flags": 256,
                "start": 0,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": true,
    "text": "[]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 2
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


# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[,,]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
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
                        },
                        {
                            "kind": 230,
                            "flags": 768,
                            "start": 2,
                            "end": 2
                        }
                    ],
                    "trailingComma": true,
                    "flags": 256,
                    "start": 1,
                    "end": 3
                },
                "flags": 256,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 4
        }
    ],
    "isModule": false,
    "text": "[,,]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


# Kataw parser test case

## Input

`````js
({}.length) => y
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
                "kind": 121,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "autofix": 0,
                            "flags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "length",
                        "autofix": 0,
                        "flags": 768,
                        "start": 4,
                        "end": 10
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "y",
                "autofix": 0,
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "({}.length) => y",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 14
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 14
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


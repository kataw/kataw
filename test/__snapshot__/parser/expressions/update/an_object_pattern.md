# Kataw parser test case

## Input

`````js
({}++)
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
                "kind": 121,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 3,
                        "start": 512,
                        "end": 5
                    },
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "({}++)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 3, end: 5

```


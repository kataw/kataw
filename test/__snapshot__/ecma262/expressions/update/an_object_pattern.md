# Kataw parser test case

## Input

`````js
({}++)
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
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "operand": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 3
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "({}++)",
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
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 3, end: 5

```


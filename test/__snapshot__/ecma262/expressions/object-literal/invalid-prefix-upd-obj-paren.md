# Kataw parser test case

## Input

`````js
++({x=1})
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
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "operand": {
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "right": {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 7
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 8
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "++({x=1})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 9, end: 9
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 9, end: 9

```


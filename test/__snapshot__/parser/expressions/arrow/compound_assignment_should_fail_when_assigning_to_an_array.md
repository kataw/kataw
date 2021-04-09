# Kataw parser test case

## Input

`````js
({ident: [foo, bar] += x})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 81921,
                                                    "value": "foo",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 10,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 81921,
                                                    "value": "bar",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 10,
                                            "end": 18
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 4130,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "value": "x",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 8,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 81921,
                                    "value": "ident",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 2,
                                    "end": 7
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 24
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 24
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 25
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar] += x})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 9,
            "error": "Expression exprected. A compound assignment cannot follow an array literal",
            "start": 19,
            "end": 22
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


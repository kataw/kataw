# Kataw parser test case

## Input

`````js
({ident: [foo, bar].join("")})
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
                                    "kind": 131,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
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
                                        "expression": {
                                            "kind": 81921,
                                            "value": "join",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 2,
                                        "end": 24
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 67174403,
                                                "value": "",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 28
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
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 2,
                        "end": 28
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 29
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 30
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "({ident: [foo, bar].join(\"\")})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


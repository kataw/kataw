# Kataw parser test case

## Input

`````js
wrap({[a]:b, [15]:d}=obj);
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "wrap",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 81921,
                                                "value": "b",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 10,
                                                "end": 11
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 7,
                                                    "end": 8
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 6,
                                                "end": 9
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 11
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 18,
                                                "end": 19
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 15,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 16
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 12,
                                                "end": 17
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 6,
                                    "end": 19
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 20,
                                "end": 21
                            },
                            "right": {
                                "kind": 81921,
                                "value": "obj",
                                "autofix": 0,
                                "flags": 768,
                                "start": 21,
                                "end": 24
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 5,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 5,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "wrap({[a]:b, [15]:d}=obj);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
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


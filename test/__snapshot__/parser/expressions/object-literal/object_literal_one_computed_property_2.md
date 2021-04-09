# Kataw parser test case

## Input

`````js
x({[a]:b, [15]:d}=obj);
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
                    "value": "x",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
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
                                                "start": 7,
                                                "end": 8
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": "a",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 4,
                                                    "end": 5
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 3,
                                                "end": 6
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 3,
                                            "end": 8
                                        },
                                        {
                                            "kind": 219,
                                            "left": {
                                                "kind": 81921,
                                                "value": "d",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 81921,
                                                    "value": 15,
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 11,
                                                    "end": 13
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 9,
                                                "end": 14
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 3,
                                    "end": 16
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 2,
                                "end": 17
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "autofix": 0,
                                "flags": 0,
                                "start": 17,
                                "end": 18
                            },
                            "right": {
                                "kind": 81921,
                                "value": "obj",
                                "autofix": 0,
                                "flags": 768,
                                "start": 18,
                                "end": 21
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 2,
                            "end": 21
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 21
                },
                "flags": 256,
                "start": 0,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "x({[a]:b, [15]:d}=obj);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


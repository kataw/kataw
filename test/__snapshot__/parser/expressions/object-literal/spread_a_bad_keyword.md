# Kataw parser test case

## Input

`````js
x={...new}
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 3,
                                    "start": 0,
                                    "end": 6
                                },
                                "argument": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 6,
                                        "start": 0,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 9,
                                        "end": 9
                                    },
                                    "argumentList": null,
                                    "flags": 256,
                                    "start": 6,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "x={...new}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 10

```


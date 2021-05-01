# Kataw parser test case

## Input

`````js
({...x.x, y})
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "original": "x",
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "original": "x",
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 8
                            },
                            {
                                "kind": 134299649,
                                "original": "y",
                                "text": "y",
                                "rawText": " y",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "({...x.x, y})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```


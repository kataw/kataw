# Kataw parser test case

## Input

`````js
({...a,} = {});
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 224,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 6
                                }
                            ],
                            "trailingComma": true,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 8,
                        "start": 512,
                        "end": 10
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 256,
                        "start": 10,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "({...a,} = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 8, end: 10

```


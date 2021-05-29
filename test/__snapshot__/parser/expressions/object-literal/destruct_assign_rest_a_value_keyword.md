# Kataw parser test case

## Input

`````js
x={...true} = x
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 2
                },
                "right": {
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
                                        "flags": 0,
                                        "start": 3,
                                        "end": 6
                                    },
                                    "argument": {
                                        "kind": 24752947,
                                        "flags": 0,
                                        "start": 6,
                                        "end": 10
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 3,
                            "end": 10
                        },
                        "flags": 48,
                        "start": 2,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 11,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x={...true} = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

x = { ...true } = x;
```

### Diagnostics

```javascript
✔ No errors
```


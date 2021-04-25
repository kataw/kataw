# Kataw parser test case

## Input

`````js
0, {...rest, b} = {}
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 4,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 2,
                        "end": 20
                    }
                ],
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "0, {...rest, b} = {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 15, end: 17

```


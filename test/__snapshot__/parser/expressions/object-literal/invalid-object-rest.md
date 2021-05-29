# Kataw parser test case

## Input

`````js
0, {...rest, b} = {}
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
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
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "rest",
                                            "rawText": "rest",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 4,
                                "end": 14
                            },
                            "flags": 48,
                            "start": 2,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 48,
                            "start": 17,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 20
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "0, {...rest, b} = {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 15, end: 17

```


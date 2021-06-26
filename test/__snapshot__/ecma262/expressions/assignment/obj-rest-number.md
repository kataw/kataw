# Kataw parser test case

## Input

`````js
result = {...rest} = 69;
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 6,
                    "end": 8
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
                                        "flags": 64,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 1073741856,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 48,
                        "start": 8,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 69,
                        "rawText": "69",
                        "flags": 96,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "result = {...rest} = 69;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

result = { ...rest } = 69;
```

### Diagnostics

```javascript
✔ No errors
```


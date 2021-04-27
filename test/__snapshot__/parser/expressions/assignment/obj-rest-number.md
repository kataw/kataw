# Kataw parser test case

## Input

`````js
result = {...rest} = 69;
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 768,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
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
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 768,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 69,
                        "rawText": "69",
                        "flags": 768,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "result = {...rest} = 69;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```


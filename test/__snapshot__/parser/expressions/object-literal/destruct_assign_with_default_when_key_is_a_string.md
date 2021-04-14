# Kataw parser test case

## Input

`````js
a={"b":c=d}
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
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 81921,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 67174403,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 3,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 3,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "a={\"b\":c=d}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


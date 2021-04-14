# Kataw parser test case

## Input

`````js
x({a=b}=c);
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
                    "text": "x",
                    "rawText": "x",
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
                                            "kind": 205,
                                            "left": {
                                                "kind": 81921,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "right": {
                                                "kind": 81921,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 768,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "flags": 256,
                                            "start": 3,
                                            "end": 6
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "right": {
                                "kind": 81921,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "x({a=b}=c);",
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


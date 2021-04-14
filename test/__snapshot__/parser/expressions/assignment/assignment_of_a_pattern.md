# Kataw parser test case

## Input

`````js
x = {x=y};
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
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 205,
                                "left": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 7,
                                    "end": 8
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 8
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "x = {x=y};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 24,
            "error": "The left-hand side of an assignment expression must be a variable or a property access",
            "start": 9,
            "end": 10
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


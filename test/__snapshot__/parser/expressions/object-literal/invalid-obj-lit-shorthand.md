# Kataw parser test case

## Input

`````js
obj = {x = 0};

f({x = 0});
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
                    "original": "obj",
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 205,
                                "left": {
                                    "kind": 134299649,
                                    "original": "x",
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "original": "0",
                                    "rawText": " 0",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "f",
                    "text": "f",
                    "rawText": "\n\nf",
                    "flags": 96,
                    "start": 14,
                    "end": 17
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 205,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "x",
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "original": "0",
                                            "rawText": " 0",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 18,
                    "end": 25
                },
                "flags": 32,
                "start": 14,
                "end": 26
            },
            "flags": 16,
            "start": 14,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "obj = {x = 0};\n\nf({x = 0});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 13, end: 14
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 25, end: 26

```


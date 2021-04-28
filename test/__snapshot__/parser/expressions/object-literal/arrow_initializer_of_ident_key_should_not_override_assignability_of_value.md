# Kataw parser test case

## Input

`````js
({foo: fail() = x}) => x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 19,
                    "start": 0,
                    "end": 22
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "fail",
                                                "rawText": "fail",
                                                "flags": 768,
                                                "start": 6,
                                                "end": 11
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "flags": 256,
                                            "start": 2,
                                            "end": 13
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 13,
                                            "start": 512,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "flags": 256,
                                        "start": 2,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 2,
                            "end": 17
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 18
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "({foo: fail() = x}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 13, end: 15
✖ The left hand side of the arrow is not destructible  - start: 19, end: 22

```


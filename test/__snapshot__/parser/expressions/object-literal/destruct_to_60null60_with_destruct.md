# Kataw parser test case

## Input

`````js
s = {"foo": null = x} = x
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
                    "text": "s",
                    "rawText": "s",
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
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "left": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 269,
                                            "text": null,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 18,
                                            "end": 20
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 20
                                    },
                                    "right": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "start": 5,
                            "end": 20
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 21
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 21,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "s = {\"foo\": null = x} = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 21, end: 23

```


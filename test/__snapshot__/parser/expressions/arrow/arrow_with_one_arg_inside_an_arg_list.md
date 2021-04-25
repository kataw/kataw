# Kataw parser test case

## Input

`````js
f(((a) => a + b)(1, 4), 5);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 6,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        }
                                    ],
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 768,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 9,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 3,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 16
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 768,
                                        "start": 17,
                                        "end": 18
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": 4,
                                        "rawText": "4",
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 17,
                                "end": 21
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 22
                        },
                        {
                            "kind": 134299649,
                            "text": 5,
                            "rawText": "5",
                            "flags": 768,
                            "start": 23,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "f(((a) => a + b)(1, 4), 5);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
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


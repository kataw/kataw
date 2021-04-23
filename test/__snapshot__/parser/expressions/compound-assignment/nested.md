# Kataw parser test case

## Input

`````js
z(z(z(a&&=)));
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
                    "text": "z",
                    "rawText": "z",
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
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 768,
                                "start": 2,
                                "end": 3
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 768,
                                                        "start": 6,
                                                        "end": 7
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4139,
                                                        "flags": 768,
                                                        "start": 7,
                                                        "end": 10
                                                    },
                                                    "right": {
                                                        "kind": 16637,
                                                        "text": "",
                                                        "autofix": 0,
                                                        "flags": 12,
                                                        "start": 10,
                                                        "end": 10
                                                    },
                                                    "flags": 256,
                                                    "start": 6,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 2,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "z(z(z(a&&=)));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


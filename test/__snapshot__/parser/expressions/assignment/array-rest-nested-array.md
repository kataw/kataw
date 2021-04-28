# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
result = [...[x]] = vals;
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
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "argument": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 14,
                                                    "end": 15
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 256,
                                        "start": 13,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 10,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 10,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 768,
                        "start": 19,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "text": "result = [...[x]] = vals;",
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
✔ No errors
```


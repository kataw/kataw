# Kataw parser test case

## Input

`````js
([foo /=g/m.x]);
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
                "kind": 121,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 5
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 512,
                                    "start": 5,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 768,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 512,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "m",
                                            "rawText": "m",
                                            "flags": 768,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "flags": 256,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "([foo /=g/m.x]);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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


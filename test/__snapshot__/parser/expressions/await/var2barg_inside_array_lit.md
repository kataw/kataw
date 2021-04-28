# Kataw parser test case

## Input

`````js
{ (x = [await x]) }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 8,
                                                "end": 13
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 768,
                                                "start": 13,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 16
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 17
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 17
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "{ (x = [await x]) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 13, end: 15

```


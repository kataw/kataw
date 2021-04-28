# Kataw parser test case

## Input

`````js
var a : [] = [];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 512,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 12,
                    "end": 15
                },
                "flags": 256,
                "start": 7,
                "end": 15
            },
            "flags": 128,
            "start": 7,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "var a : [] = [];",
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
✖ ',' expected - start: 5, end: 7
✖ Statement expected - start: 5, end: 7

```


# Kataw parser test case

## Input

`````js
{ (x = [yield]) }
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
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 768,
                                                "start": 8,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 6,
                                    "end": 14
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 14
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 15
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 15
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "{ (x = [yield]) }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


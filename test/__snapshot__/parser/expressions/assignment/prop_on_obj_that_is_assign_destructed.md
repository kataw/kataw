# Kataw parser test case

## Input

`````js
[...[{prop: 1}.prop]] = []
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "argument": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": 1,
                                                                    "rawText": "1",
                                                                    "flags": 768,
                                                                    "start": 11,
                                                                    "end": 13
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "prop",
                                                                    "rawText": "prop",
                                                                    "flags": 768,
                                                                    "start": 6,
                                                                    "end": 10
                                                                },
                                                                "flags": 256,
                                                                "start": 6,
                                                                "end": 13
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 6,
                                                        "end": 13
                                                    },
                                                    "flags": 256,
                                                    "start": 5,
                                                    "end": 14
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "prop",
                                                    "rawText": "prop",
                                                    "flags": 768,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 5,
                                                "end": 19
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 19
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 20
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 25,
                        "end": 25
                    },
                    "flags": 256,
                    "start": 23,
                    "end": 26
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "[...[{prop: 1}.prop]] = []",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


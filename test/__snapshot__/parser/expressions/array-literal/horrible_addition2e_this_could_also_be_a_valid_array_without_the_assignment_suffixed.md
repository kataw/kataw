# Kataw parser test case

## Input

`````js
[please, {[make]: it}, stop] = bwahahahaha
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
                                "kind": 134299649,
                                "text": "please",
                                "rawText": "please",
                                "flags": 96,
                                "start": 1,
                                "end": 7
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "asyncKeyword": null,
                                            "getKeyword": null,
                                            "setKeyword": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "it",
                                                "rawText": " it",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 20
                                            },
                                            "right": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "make",
                                                    "rawText": "make",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 21
                            },
                            {
                                "kind": 134299649,
                                "text": "stop",
                                "rawText": " stop",
                                "flags": 96,
                                "start": 22,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 134299649,
                    "text": "bwahahahaha",
                    "rawText": " bwahahahaha",
                    "flags": 96,
                    "start": 30,
                    "end": 42
                },
                "flags": 32,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "[please, {[make]: it}, stop] = bwahahahaha",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
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


# Kataw parser test case

## Input

`````js
[please, {[make]: it}, stop] = bwahahahaha
`````

## Output

### CST

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
                                "transformFlags": 0,
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
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "make",
                                                    "rawText": "make",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 11,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "it",
                                                "rawText": "it",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 17,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 10,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 20
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 8,
                                "end": 21
                            },
                            {
                                "kind": 134299649,
                                "text": "stop",
                                "rawText": "stop",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 134299649,
                    "text": "bwahahahaha",
                    "rawText": "bwahahahaha",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 42
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "[please, {[make]: it}, stop] = bwahahahaha",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
[please, { [make]: it }, stop] = bwahahahaha;
```

### Diagnostics

```javascript
✔ No errors
```


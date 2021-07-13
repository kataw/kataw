# Kataw parser test case

## Input

`````js
[{b: [([a = 1])]}] = t
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
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2,
                                                "end": 3
                                            },
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
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
                                                                                "text": "a",
                                                                                "rawText": "a",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 8,
                                                                                "end": 9
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 9,
                                                                                "end": 11
                                                                            },
                                                                            "right": {
                                                                                "kind": 201392130,
                                                                                "text": 1,
                                                                                "rawText": "1",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 11,
                                                                                "end": 13
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 128,
                                                                            "start": 8,
                                                                            "end": 13
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 8,
                                                                    "end": 13
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 8,
                                                                "start": 7,
                                                                "end": 14
                                                            },
                                                            "flags": 6,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 15
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 15
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 4,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 2,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 16
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 1,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "[{b: [([a = 1])]}] = t",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 18, end: 20

```


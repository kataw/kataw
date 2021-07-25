# Kataw parser test case

## Input

`````js
[({ a: [b = 2]})] = t
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
                                "kind": 121,
                                "expression": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 3,
                                                    "end": 5
                                                },
                                                "right": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 125,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "b",
                                                                    "rawText": "b",
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
                                                                    "text": 2,
                                                                    "rawText": "2",
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
                                                    "start": 6,
                                                    "end": 14
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 3,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 14
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 2,
                                    "end": 15
                                },
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 134299649,
                    "text": "t",
                    "rawText": "t",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "[({ a: [b = 2]})] = t",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 17, end: 19

```


# Kataw parser test case

## Input

`````js
x = {x: [{a = b}] + x}.x
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "right": {
                                        "kind": 198,
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
                                                                    "kind": 301,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 10,
                                                                        "end": 11
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "b",
                                                                        "rawText": "b",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 13,
                                                                        "end": 15
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 10,
                                                                    "end": 15
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 10,
                                                            "end": 15
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 9,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 16
                                            },
                                            "flags": 32,
                                            "transformFlags": 8,
                                            "start": 7,
                                            "end": 17
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "flags": 32,
                                        "transformFlags": 5120,
                                        "start": 5,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 5,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 21
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 3,
                        "end": 22
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 24
                    },
                    "flags": 48,
                    "transformFlags": 2,
                    "start": 3,
                    "end": 24
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "x = {x: [{a = b}] + x}.x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid optional chain from new expression - start: 17, end: 19

```


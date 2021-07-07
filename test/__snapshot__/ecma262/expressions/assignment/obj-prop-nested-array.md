# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
result = { x: [y] } = { x: [321] };
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
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
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 13,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 10,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 17
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 8,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
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
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392130,
                                                    "text": 321,
                                                    "rawText": "321",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 31
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 23,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 32
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 21,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 34
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": true,
    "source": "result = { x: [y] } = { x: [321] };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
result = { x: [y] } = { x: [321] };
```

### Diagnostics

```javascript
✔ No errors
```


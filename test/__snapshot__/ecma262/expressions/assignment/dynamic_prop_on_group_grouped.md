# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
([(x())[y],] = z);
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 130,
                                    "member": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 5
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 2,
                                            "end": 6
                                        },
                                        "flags": 2,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 7
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 4,
                                    "start": 2,
                                    "end": 10
                                }
                            ],
                            "trailingComma": true,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 12
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 16
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "([(x())[y],] = z);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

([(x())[y],] = z);
```

### Diagnostics

```javascript
✔ No errors
```


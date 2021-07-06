# Kataw parser test case

## Input

`````js
{ (x = [await x]) }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
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
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 13
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 15
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 15
                                    },
                                    "flags": 32,
                                    "transformFlags": 8,
                                    "start": 6,
                                    "end": 16
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 1,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 17
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 17
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ (x = [await x]) }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 14, end: 15

```


# Kataw parser test case

## Input

`````js
async <T>[(x)];

(async <T>[(x)]);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 9
                    },
                    "right": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 10,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 13
                        },
                        "flags": 32,
                        "transformFlags": 8,
                        "start": 9,
                        "end": 14
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 8,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 27
                        },
                        "right": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "flags": 28,
                                        "transformFlags": 0,
                                        "start": 32,
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
                            "start": 27,
                            "end": 32
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 26,
                        "end": 32
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 18,
                    "end": 32
                },
                "flags": 15,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async <T>[(x)];\n\n(async <T>[(x)]);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

async  < T > [(x)];
(async  < T > [(x)]);

```

### Diagnostics

```javascript
✔ No errors
```


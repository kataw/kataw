# Kataw parser test case

## Input

`````js
for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "type": null,
                            "initializer": {
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
                                                "start": 21,
                                                "end": 23
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 23,
                                                "rawText": "23",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 21,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 27
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 19,
                                "end": 29
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 10,
                            "end": 29
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 29
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 29
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 34
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 30,
                "end": 36
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 43
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 43,
                "end": 47
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 37757004,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 54
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 56,
                                            "end": 58
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 59
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 61
                            },
                            "type": null,
                            "initializer": {
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
                                                "start": 65,
                                                "end": 67
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 23,
                                                "rawText": "23",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 68,
                                                "end": 71
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 65,
                                            "end": 71
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 71
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 63,
                                "end": 73
                            },
                            "flags": 16,
                            "transformFlags": 128,
                            "start": 54,
                            "end": 73
                        }
                    ],
                    "flags": 16777232,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 73
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 43,
                "end": 73
            },
            "condition": null,
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 74,
                    "end": 76
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 76,
                    "end": 78
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 78,
                    "end": 80
                },
                "flags": 96,
                "transformFlags": 1024,
                "start": 74,
                "end": 80
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 85,
                    "end": 85
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 83,
                "end": 86
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 43,
            "end": 86
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 86,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "for (const { x, } = { x: 23 }; a < 1; ) {}; for (const { x, } = { x: 23 }; a < 1; ) {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

for (const { x } = { x: 23 }; ; a  < 1) {}
for (const { x } = { x: 23 }; ; a  < 1) {}

```

### Diagnostics

```javascript
✔ No errors
```


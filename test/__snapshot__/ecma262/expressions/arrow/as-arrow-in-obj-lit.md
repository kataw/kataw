# Kataw parser test case

## Input

`````js
x = {arrow: (x) => ok};

x = {arrow: (x, y) => ok};
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 11,
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
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 28
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
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 39
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 42
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 43
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 30,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 49
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 28,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 23,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "x = {arrow: (x) => ok};\n\nx = {arrow: (x, y) => ok};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

x = { arrow: (x) => ok };
x = { arrow: (x, y) => ok };

```

### Diagnostics

```javascript
✔ No errors
```


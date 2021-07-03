# Kataw parser test case

## Input

`````js
(x, y) => (u, v) => x*u + y*v;
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
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 6
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 6,
                    "end": 9
                },
                "contents": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 11,
                        "end": 16
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 16,
                        "end": 19
                    },
                    "contents": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 21,
                                "end": 22
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "u",
                                "rawText": "u",
                                "flags": 96,
                                "start": 22,
                                "end": 23
                            },
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 99634,
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 25,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 96,
                                "start": 27,
                                "end": 28
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "v",
                                "rawText": "v",
                                "flags": 96,
                                "start": 28,
                                "end": 29
                            },
                            "flags": 96,
                            "start": 27,
                            "end": 29
                        },
                        "flags": 96,
                        "start": 19,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "(x, y) => (u, v) => x*u + y*v;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

(x, y) => (u, v) => x * u + y * v;

```

### Diagnostics

```javascript
✔ No errors
```


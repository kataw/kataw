# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 16
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "e",
                                        "rawText": "e",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 32,
                                        "end": 34
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 15,
                                "end": 35
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 35,
                                "end": 38
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 198,
                                            "left": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 38,
                                                            "end": 44
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 44,
                                                            "end": 46
                                                        },
                                                        "flags": 32,
                                                        "start": 38,
                                                        "end": 46
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 48
                                                    },
                                                    "right": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 48,
                                                            "end": 54
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 54,
                                                            "end": 56
                                                        },
                                                        "flags": 32,
                                                        "start": 48,
                                                        "end": 56
                                                    },
                                                    "flags": 32,
                                                    "start": 38,
                                                    "end": 56
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 56,
                                                    "end": 58
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 60
                                            },
                                            "operatorToken": {
                                                "kind": 99634,
                                                "flags": 96,
                                                "start": 60,
                                                "end": 62
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 62,
                                                "end": 64
                                            },
                                            "flags": 32,
                                            "start": 38,
                                            "end": 64
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "start": 64,
                                            "end": 66
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 66,
                                            "end": 68
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 68
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "start": 68,
                                        "end": 70
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 70,
                                        "end": 72
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 72
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 72,
                                    "end": 74
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "start": 74,
                                    "end": 76
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 76
                            },
                            "flags": 288,
                            "start": 7,
                            "end": 76
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 76
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 76
            },
            "flags": 16,
            "start": 0,
            "end": 77
        }
    ],
    "isModule": true,
    "source": "var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

var x = async (a, b, c, d, e, f, g) => await a + await b + c + d + e + f + g;

```

### Diagnostics

```javascript
✔ No errors
```


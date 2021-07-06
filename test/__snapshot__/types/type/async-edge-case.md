# Kataw parser test case

## Input

`````js
(async /*1*/ <T>[(x)]);

(async<{/*1*/}>(x));

async <T, /*1*/ U>(x) >> y /*2*/ - /*3*/ z;;


(async <T>(

/*1*/

x


/*2*/

));

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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 14
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
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
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 16,
                            "end": 21
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 15,
                        "end": 21
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 1,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 31
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 32,
                            "end": 39
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 40
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 40,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 43
                        },
                        "flags": 48,
                        "transformFlags": 1024,
                        "start": 39,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 26,
                    "end": 43
                },
                "flags": 23,
                "transformFlags": 0,
                "start": 33,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 52
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 54,
                            "end": 55
                        },
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 45,
                        "end": 55
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "U",
                            "rawText": "U",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 64
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 65
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 66,
                                    "end": 67
                                },
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 68
                            },
                            "operatorToken": {
                                "kind": 35141,
                                "flags": 96,
                                "transformFlags": 64,
                                "start": 68,
                                "end": 71
                            },
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 73
                                },
                                "operatorToken": {
                                    "kind": 134318643,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 73,
                                    "end": 81
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 89
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 73,
                                "end": 89
                            },
                            "flags": 97,
                            "transformFlags": 1024,
                            "start": 68,
                            "end": 89
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 56,
                        "end": 89
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 45,
                "end": 89
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 45,
            "end": 90
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 90,
            "end": 91
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
                        "start": 95,
                        "end": 100
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 102
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 102,
                            "end": 103
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 104
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 105,
                                "end": 115
                            },
                            "flags": 104,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 126
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 103,
                        "end": 126
                    },
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 95,
                    "end": 126
                },
                "flags": 91,
                "transformFlags": 0,
                "start": 33,
                "end": 127
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 91,
            "end": 128
        }
    ],
    "isModule": false,
    "source": "(async /*1*/ <T>[(x)]);\n\n(async<{/*1*/}>(x));\n\nasync <T, /*1*/ U>(x) >> y /*2*/ - /*3*/ z;;\n\n\n(async <T>(\n\n/*1*/\n\nx\n\n\n/*2*/\n\n));\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 129
}
```

### Printed

```javascript

(async  < T > [(x)]);
(async  < {} > (x));

async  < T, U > (x) >> y - z;

(async  < T > (x));

```

### Diagnostics

```javascript
✔ No errors
```


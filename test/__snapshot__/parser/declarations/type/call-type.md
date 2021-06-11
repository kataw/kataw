# Kataw parser test case

## Input

`````js
  type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 6,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "$Call",
                    "rawText": "$Call",
                    "flags": 96,
                    "start": 10,
                    "end": 16
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [
                        {
                            "kind": 267,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 261,
                                    "arrowToken": null,
                                    "parameters": {
                                        "kind": 208,
                                        "functionTypeParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "returnType": {
                                        "kind": 260,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 23
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 0,
                                        "start": 21,
                                        "end": 24
                                    },
                                    "typeParameters": {
                                        "kind": 265,
                                        "typeParameters": [
                                            {
                                                "kind": 146,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "T",
                                                    "rawText": "T",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "type": null,
                                                "defaultType": null,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 20
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 0,
                                    "start": 18,
                                    "end": 24
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 24
                        }
                    ],
                    "flags": 0,
                    "start": 16,
                    "end": 24
                },
                "flags": 0,
                "start": 10,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 30,
                            "end": 30
                        },
                        "operatorToken": {
                            "kind": 134252103,
                            "flags": 64,
                            "start": 30,
                            "end": 32
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 40,
                                    "end": 43
                                },
                                "typeParameters": {
                                    "kind": 265,
                                    "typeParameters": [
                                        {
                                            "kind": 146,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 36
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 0,
                                            "start": 35,
                                            "end": 36
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 34,
                                    "end": 37
                                },
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 39
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 43,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 45
                            },
                            "flags": 32,
                            "start": 32,
                            "end": 46
                        },
                        "flags": 32,
                        "start": 30,
                        "end": 46
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 47,
                            "end": 49
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 64,
                            "start": 49,
                            "end": 51
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 51,
                                "end": 53
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 53,
                                "end": 54
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 54,
                                "end": 54
                            },
                            "flags": 32,
                            "start": 53,
                            "end": 54
                        },
                        "flags": 32,
                        "start": 47,
                        "end": 54
                    }
                ],
                "flags": 32,
                "start": 30,
                "end": 54
            },
            "flags": 16,
            "start": 30,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "  type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 21, end: 22
✖ Expected a ')' to match the '(' token here - start: 24, end: 27
✖ Expected a `;` - start: 29, end: 30
✖ Identifier expected - start: 30, end: 32
✖ Identifier expected - start: 54, end: 55

```


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
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 144,
                "id": {
                    "kind": 134299649,
                    "text": "$Call",
                    "rawText": "$Call",
                    "flags": 96,
                    "start": 8,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 266,
                    "parameters": [],
                    "flags": 0,
                    "start": 14,
                    "end": 15
                },
                "flags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 198,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 25
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
                                                "start": 17,
                                                "end": 18
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 0,
                                            "start": 17,
                                            "end": 18
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 16,
                                    "end": 19
                                },
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 21
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 28
                        },
                        "operatorToken": {
                            "kind": 134252103,
                            "flags": 64,
                            "start": 28,
                            "end": 30
                        },
                        "right": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 38,
                                    "end": 41
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
                                                "start": 33,
                                                "end": 34
                                            },
                                            "type": null,
                                            "defaultType": null,
                                            "flags": 0,
                                            "start": 33,
                                            "end": 34
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 32,
                                    "end": 35
                                },
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "start": 36,
                                        "end": 37
                                    }
                                ],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 44
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 44
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "A",
                            "rawText": "A",
                            "flags": 96,
                            "start": 45,
                            "end": 47
                        },
                        "operatorToken": {
                            "kind": 134251592,
                            "flags": 64,
                            "start": 47,
                            "end": 49
                        },
                        "right": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 49,
                                "end": 51
                            },
                            "operatorToken": {
                                "kind": 34883,
                                "flags": 64,
                                "start": 51,
                                "end": 52
                            },
                            "right": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 51,
                            "end": 52
                        },
                        "flags": 32,
                        "start": 45,
                        "end": 52
                    }
                ],
                "flags": 32,
                "start": 15,
                "end": 52
            },
            "flags": 16,
            "start": 15,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "type X = $Call<(<T>(T) => T) & (<T>(T) => T), A | B>;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 15, end: 16
✖ Identifier expected - start: 52, end: 53

```


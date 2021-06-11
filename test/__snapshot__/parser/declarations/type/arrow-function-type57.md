# Kataw parser test case

## Input

`````js
type a = (([-1] | x | q & (x)) => T | x | q & (x)) => T;
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 137,
                "types": [
                    {
                        "kind": 268,
                        "objectType": {
                            "kind": 260,
                            "type": {
                                "kind": 16637,
                                "text": "",
                                "flags": 64,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 11
                        },
                        "indexType": {
                            "kind": 271,
                            "subtractionToken": {
                                "kind": 134318643,
                                "flags": 64,
                                "start": 12,
                                "end": 13
                            },
                            "value": 1,
                            "flags": 64,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 17
                    },
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 138,
                        "types": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "q",
                                    "rawText": "q",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 21,
                                "end": 23
                            },
                            {
                                "kind": 260,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 28
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 25,
                                "end": 29
                            }
                        ],
                        "flags": 0,
                        "start": 23,
                        "end": 29
                    }
                ],
                "flags": 0,
                "start": 15,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 33,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 64,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 64,
                    "start": 39,
                    "end": 41
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "q",
                        "rawText": "q",
                        "flags": 96,
                        "start": 41,
                        "end": 43
                    },
                    "operatorToken": {
                        "kind": 134252103,
                        "flags": 64,
                        "start": 43,
                        "end": 45
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 47,
                            "end": 48
                        },
                        "flags": 32,
                        "start": 45,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 43,
                    "end": 49
                },
                "flags": 32,
                "start": 33,
                "end": 49
            },
            "flags": 16,
            "start": 33,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 53,
                "end": 55
            },
            "flags": 16,
            "start": 53,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "type a = (([-1] | x | q & (x)) => T | x | q & (x)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 11, end: 12
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 33
✖ Expected a `;` - start: 49, end: 50
✖ Declaration or statement expected - start: 50, end: 53

```


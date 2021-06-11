# Kataw parser test case

## Input

`````js
type a = (a[a & b][c | d][(x) => T][][][]) => T;
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
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 136,
                        "type": {
                            "kind": 268,
                            "objectType": {
                                "kind": 268,
                                "objectType": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "indexType": {
                                    "kind": 138,
                                    "types": [
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 12,
                                            "end": 13
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 15,
                                            "end": 17
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 13,
                                    "end": 17
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 19
                            },
                            "indexType": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 20
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 24
                                    }
                                ],
                                "flags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 26
                },
                "flags": 0,
                "start": 8,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 27,
                        "end": 28
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 32,
                    "end": 34
                },
                "flags": 32,
                "start": 26,
                "end": 34
            },
            "flags": 16,
            "start": 26,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 536871042,
                "member": {
                    "kind": 536871042,
                    "member": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 36,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 35,
                        "end": 37
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 39
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 40,
                    "end": 40
                },
                "flags": 32,
                "start": 35,
                "end": 41
            },
            "flags": 16,
            "start": 35,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 45,
                "end": 47
            },
            "flags": 16,
            "start": 45,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b][c | d][(x) => T][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 26, end: 27
✖ Expected a `;` - start: 34, end: 35
✖ An member access expression should take an argument. - start: 35, end: 39
✖ Identifier expected - start: 38, end: 39
✖ An member access expression should take an argument. - start: 35, end: 41
✖ Identifier expected - start: 40, end: 41
✖ Expected a `;` - start: 41, end: 42
✖ Declaration or statement expected - start: 42, end: 45

```


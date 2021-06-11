# Kataw parser test case

## Input

`````js
type a = (a[a & b[]][c | d][(x) => T][][][]) => T;
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
                                            "kind": 136,
                                            "type": {
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
                                            },
                                            "flags": 0,
                                            "start": 18,
                                            "end": 19
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 13,
                                    "end": 19
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 21
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
                                            "start": 21,
                                            "end": 22
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 21,
                                        "end": 22
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "flags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 21,
                            "end": 28
                        },
                        "flags": 0,
                        "start": 28,
                        "end": 28
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 28
                },
                "flags": 0,
                "start": 8,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 31,
                    "end": 34
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 29,
                        "end": 30
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "T",
                    "rawText": "T",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "flags": 32,
                "start": 28,
                "end": 36
            },
            "flags": 16,
            "start": 28,
            "end": 36
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
                            "start": 38,
                            "end": 38
                        },
                        "flags": 32,
                        "start": 37,
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
                    "start": 37,
                    "end": 41
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 42,
                    "end": 42
                },
                "flags": 32,
                "start": 37,
                "end": 43
            },
            "flags": 16,
            "start": 37,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 47,
                "end": 49
            },
            "flags": 16,
            "start": 47,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "type a = (a[a & b[]][c | d][(x) => T][][][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 28, end: 29
✖ Expected a `;` - start: 36, end: 37
✖ An member access expression should take an argument. - start: 37, end: 41
✖ Identifier expected - start: 40, end: 41
✖ An member access expression should take an argument. - start: 37, end: 43
✖ Identifier expected - start: 42, end: 43
✖ Expected a `;` - start: 43, end: 44
✖ Declaration or statement expected - start: 44, end: 47

```


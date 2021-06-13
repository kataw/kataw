# Kataw parser test case

## Input

`````js
type a = (bj[c] & d) => T;

type a = (bj[c] | e) => T;

`````

## Options


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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 20,
                    "end": 23
                },
                "parameters": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 268,
                            "objectType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "bj",
                                    "rawText": "bj",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 8,
                                "end": 12
                            },
                            "indexType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 17
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 19
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "typeParameters": null,
                    "flags": 32,
                    "start": 23,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 32,
                "start": 8,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 26,
                "end": 34
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 34,
                "end": 36
            },
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 48,
                    "end": 51
                },
                "parameters": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 268,
                            "objectType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "bj",
                                    "rawText": "bj",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 36,
                                "end": 40
                            },
                            "indexType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 41,
                                "end": 42
                            },
                            "flags": 0,
                            "start": 41,
                            "end": 45
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "e",
                                "rawText": "e",
                                "flags": 96,
                                "start": 45,
                                "end": 47
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 45,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 43,
                    "end": 47
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 51,
                        "end": 53
                    },
                    "typeParameters": null,
                    "flags": 32,
                    "start": 51,
                    "end": 53
                },
                "typeParameters": null,
                "flags": 32,
                "start": 36,
                "end": 53
            },
            "flags": 17,
            "start": 26,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c] & d) => T;\n\ntype a = (bj[c] | e) => T;\n",
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
✔ No errors
```


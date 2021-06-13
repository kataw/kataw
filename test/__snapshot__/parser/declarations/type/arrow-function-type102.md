# Kataw parser test case

## Input

`````js
type a = ((x?:string )=> T) => T;
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 27,
                        "end": 30
                    },
                    "arrowToken": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 261,
                                    "arrowTypeParameterList": {
                                        "kind": 10,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "arrowToken": {
                                        "kind": 279,
                                        "parameters": [
                                            {
                                                "kind": 149,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "optionalToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "types": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 14,
                                                    "end": 20
                                                },
                                                "flags": 2097152,
                                                "start": 8,
                                                "end": 20
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 8,
                                        "end": 20
                                    },
                                    "returnType": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 30
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 30,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 32
                },
                "flags": 2097152,
                "start": 8,
                "end": 32
            },
            "flags": 2097152,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "type a = ((x?:string )=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```


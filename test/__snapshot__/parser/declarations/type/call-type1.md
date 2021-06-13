# Kataw parser test case

## Input

`````js
type Fn2 = <A, B>(A, B) => A | B;
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
                "text": "Fn2",
                "rawText": "Fn2",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "type": {
                "kind": 261,
                "arrowToken": null,
                "parameters": {
                    "kind": 282,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "returnType": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 23,
                        "end": 26
                    },
                    "parameters": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "A",
                                        "rawText": "A",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "typeParameters": null,
                                    "flags": 32,
                                    "start": 17,
                                    "end": 19
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 32,
                                "start": 17,
                                "end": 19
                            },
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": null,
                                "optionalToken": null,
                                "types": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "flags": 32,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 17,
                        "end": 22
                    },
                    "returnType": {
                        "kind": 137,
                        "types": [
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 26,
                                "end": 28
                            },
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 32
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 30,
                                "end": 32
                            }
                        ],
                        "flags": 32,
                        "start": 28,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 32,
                    "start": 17,
                    "end": 32
                },
                "typeParameters": {
                    "kind": 265,
                    "typeParameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "A",
                                "rawText": "A",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 32,
                            "start": 12,
                            "end": 13
                        },
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 32,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "flags": 0,
                    "start": 10,
                    "end": 17
                },
                "flags": 32,
                "start": 10,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "type Fn2 = <A, B>(A, B) => A | B;",
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


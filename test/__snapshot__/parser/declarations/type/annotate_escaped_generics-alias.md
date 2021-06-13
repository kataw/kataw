# Kataw parser test case

## Input

`````js
type Tr = <Return>(() => Pr<Return>) => Return;
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "Tr",
                "rawText": "Tr",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 7,
                "end": 9
            },
            "type": {
                "kind": 288,
                "arrowTypeParameterList": {
                    "kind": 292,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 18,
                    "end": 18
                },
                "arrowToken": null,
                "returnType": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 36,
                        "end": 39
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 288,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 21,
                                    "end": 24
                                },
                                "arrowToken": {
                                    "kind": 292,
                                    "parameters": [
                                        []
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 18,
                                    "end": 24
                                },
                                "returnType": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Pr",
                                        "rawText": "Pr",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "typeParameters": {
                                        "kind": 266,
                                        "parameters": [
                                            {
                                                "kind": 267,
                                                "type": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "Return",
                                                        "rawText": "Return",
                                                        "flags": 96,
                                                        "start": 28,
                                                        "end": 34
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "start": 28,
                                                    "end": 34
                                                },
                                                "flags": 2097152,
                                                "start": 28,
                                                "end": 34
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 27,
                                        "end": 35
                                    },
                                    "flags": 2097152,
                                    "start": 24,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 18,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 18,
                        "end": 39
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "Return",
                            "rawText": "Return",
                            "flags": 96,
                            "start": 39,
                            "end": 46
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 39,
                        "end": 46
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 18,
                    "end": 46
                },
                "typeParameters": {
                    "kind": 265,
                    "typeParameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "Return",
                                "rawText": "Return",
                                "flags": 96,
                                "start": 11,
                                "end": 17
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 11,
                            "end": 17
                        }
                    ],
                    "flags": 2097152,
                    "start": 9,
                    "end": 18
                },
                "flags": 2097152,
                "start": 9,
                "end": 46
            },
            "flags": 2097152,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "type Tr = <Return>(() => Pr<Return>) => Return;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```


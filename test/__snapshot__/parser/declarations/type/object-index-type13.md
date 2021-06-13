# Kataw parser test case

## Input

`````js
type X = {[|(x) =>x&symbol[][x|y]]: string,};
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 15,
                                "end": 18
                            },
                            "parameters": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 32,
                                "start": 12,
                                "end": 14
                            },
                            "returnType": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 19
                                    },
                                    {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 136,
                                            "type": {
                                                "kind": 134234343,
                                                "flags": 64,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 28
                                        },
                                        "indexType": {
                                            "kind": 137,
                                            "types": [
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 30
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 30
                                                },
                                                {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 32
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 31,
                                                    "end": 32
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 0,
                                        "start": 29,
                                        "end": 34
                                    }
                                ],
                                "flags": 32,
                                "start": 19,
                                "end": 33
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 12,
                            "end": 33
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 35,
                            "end": 42
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type X = {[|(x) =>x&symbol[][x|y]]: string,};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```


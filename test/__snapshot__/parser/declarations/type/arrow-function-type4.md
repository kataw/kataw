# Kataw parser test case

## Input

`````js
type X = (x.y) => T;
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
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 14,
                        "end": 17
                    },
                    "arrowToken": {
                        "kind": 144,
                        "id": {
                            "kind": 145,
                            "qualification": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            "id": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 13
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 8,
                        "end": 13
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 2097152,
                        "start": 17,
                        "end": 19
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 19
                },
                "flags": 2097152,
                "start": 8,
                "end": 19
            },
            "flags": 2097152,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "type X = (x.y) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```


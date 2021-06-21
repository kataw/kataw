# Kataw parser test case

## Input

`````js
type a = (bj[c]) => T;
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
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 16,
                        "end": 19
                    },
                    "arrowToken": {
                        "kind": 311,
                        "objectType": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "bj",
                                "rawText": "bj",
                                "flags": 96,
                                "start": 10,
                                "end": 12
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 12
                        },
                        "indexType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 16
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 2097152,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 21
                },
                "flags": 2097152,
                "start": 8,
                "end": 21
            },
            "flags": 2097152,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "type a = (bj[c]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

 type a =  
```

### Diagnostics

```javascript
✔ No errors
```


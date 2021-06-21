# Kataw parser test case

## Input

`````js
type a = (() => T) => T
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
                        "start": 18,
                        "end": 21
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 288,
                                "arrowTypeParameterList": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 15
                                },
                                "arrowToken": {
                                    "kind": 292,
                                    "parameters": [
                                        []
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 15
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
                                            "start": 15,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "flags": 2097152,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 21
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
                                "start": 21,
                                "end": 23
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 2097152,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 23
                },
                "flags": 2097152,
                "start": 8,
                "end": 23
            },
            "flags": 2097152,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = (() => T) => T",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
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


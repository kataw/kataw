# Kataw parser test case

## Input

`````js
var a : typeof A.B<T>
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "start": 7,
                                    "end": 14
                                },
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 145,
                                        "qualification": {
                                            "kind": 134299649,
                                            "text": "A",
                                            "rawText": "A",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "id": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "typeParameters": {
                                        "kind": 309,
                                        "parameters": [
                                            {
                                                "kind": 310,
                                                "type": {
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
                                                            "start": 19,
                                                            "end": 20
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 20
                                                    },
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "flags": 2097152,
                                                "start": 19,
                                                "end": 20
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 14,
                                    "end": 21
                                },
                                "flags": 2097216,
                                "start": 7,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 7,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "var a : typeof A.B<T>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

var a: ;
```

### Diagnostics

```javascript
✔ No errors
```


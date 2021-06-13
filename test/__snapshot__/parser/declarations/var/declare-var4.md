# Kataw parser test case

## Input

`````js
declare var x1: ?X;
declare var x1?: X;
declare var x2: X;
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x1",
                            "rawText": "x1",
                            "flags": 96,
                            "start": 11,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 17
                                },
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 2097152,
                            "start": 14,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 18
            },
            "flags": 4112,
            "start": 7,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 19,
                "end": 27
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 27,
                "end": 31
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x1",
                            "rawText": "x1",
                            "flags": 96,
                            "start": 31,
                            "end": 34
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 34,
                            "end": 35
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 36,
                                "end": 38
                            },
                            "flags": 2097152,
                            "start": 35,
                            "end": 38
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 31,
                        "end": 38
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 38
            },
            "flags": 4112,
            "start": 27,
            "end": 39
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 39,
                "end": 47
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 47,
                "end": 51
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x2",
                            "rawText": "x2",
                            "flags": 96,
                            "start": 51,
                            "end": 54
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 55,
                                    "end": 57
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 55,
                                "end": 57
                            },
                            "flags": 2097152,
                            "start": 54,
                            "end": 57
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 51,
                        "end": 57
                    }
                ],
                "flags": 16,
                "start": 51,
                "end": 57
            },
            "flags": 4112,
            "start": 47,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "declare var x1: ?X;\ndeclare var x1?: X;\ndeclare var x2: X;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

var x1;
var x1;
var x2;
```

### Diagnostics

```javascript
✔ No errors
```


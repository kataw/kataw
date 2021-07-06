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
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 18
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 11,
                        "end": 18
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 18
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 27
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 31,
                            "end": 34
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 31,
                        "end": 34
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 27,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 36,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 36,
            "end": 39
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 39,
                "end": 47
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 51,
                            "end": 54
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 57
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 57
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 57
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 51,
                        "end": 57
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 51,
                "end": 57
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 47,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "declare var x1: ?X;\ndeclare var x1?: X;\ndeclare var x2: X;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 34, end: 35
✖ Expected a `;` - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 36

```


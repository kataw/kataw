# Kataw parser test case

## Input

`````js
type C = Obj['bar'][foo]['boz'];
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
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                    "kind": 311,
                    "objectType": {
                        "kind": 311,
                        "objectType": {
                            "kind": 311,
                            "objectType": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "Obj",
                                    "rawText": "Obj",
                                    "flags": 96,
                                    "start": 8,
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
                                    "kind": 134217967,
                                    "text": "bar",
                                    "rawText": "'bar'",
                                    "flags": 2097216,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 20
                        },
                        "indexType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 20,
                                "end": 23
                            },
                            "flags": 2097152,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 0,
                        "start": 8,
                        "end": 25
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134217967,
                            "text": "boz",
                            "rawText": "'boz'",
                            "flags": 2097216,
                            "start": 25,
                            "end": 30
                        },
                        "flags": 2097152,
                        "start": 25,
                        "end": 30
                    },
                    "flags": 0,
                    "start": 8,
                    "end": 32
                },
                "flags": 2097152,
                "start": 8,
                "end": 31
            },
            "flags": 64,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type C = Obj['bar'][foo]['boz'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

type C = Obj['\'bar\''][foo]['\'boz\'']

```

### Diagnostics

```javascript
✔ No errors
```


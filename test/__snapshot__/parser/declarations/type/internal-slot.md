# Kataw parser test case

## Input

`````js
type x = { [[foo]]: X }

type y = { [[foo]](): X }

type z = { [[foo]]?: X }

type q = { [[foo]]: X }
`````

## Options

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
                "text": "x",
                "rawText": "x",
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
                        "kind": 248,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 19,
                            "end": 21
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 2097152,
                        "start": 10,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 23
            },
            "flags": 2097152,
            "start": 0,
            "end": 23
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 23,
                "end": 31
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 29,
                "end": 31
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 31,
                "end": 33
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 38,
                            "end": 41
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 282,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 44,
                                "end": 44
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 46,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 46,
                                "end": 48
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 35,
                            "end": 48
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 2097152,
                        "start": 35,
                        "end": 48
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 33,
                "end": 50
            },
            "flags": 2097153,
            "start": 23,
            "end": 50
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 50,
                "end": 58
            },
            "name": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "start": 56,
                "end": 58
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 58,
                "end": 60
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 65,
                            "end": 68
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 72,
                                "end": 74
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 72,
                            "end": 74
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 70,
                            "end": 71
                        },
                        "staticToken": null,
                        "flags": 2097152,
                        "start": 62,
                        "end": 74
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 60,
                "end": 76
            },
            "flags": 2097153,
            "start": 50,
            "end": 76
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 76,
                "end": 84
            },
            "name": {
                "kind": 134299649,
                "text": "q",
                "rawText": "q",
                "flags": 96,
                "start": 82,
                "end": 84
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 84,
                "end": 86
            },
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "protoKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 91,
                            "end": 94
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 97,
                                "end": 99
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 97,
                            "end": 99
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 2097152,
                        "start": 88,
                        "end": 99
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 86,
                "end": 101
            },
            "flags": 2097153,
            "start": 76,
            "end": 101
        }
    ],
    "isModule": false,
    "source": "type x = { [[foo]]: X }\n\ntype y = { [[foo]](): X }\n\ntype z = { [[foo]]?: X }\n\ntype q = { [[foo]]: X }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript





```

### Diagnostics

```javascript
✔ No errors
```


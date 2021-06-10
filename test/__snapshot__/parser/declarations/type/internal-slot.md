# Kataw parser test case

## Input

`````js
type T1 = { [[foo]]: X }
type T2 = { [[foo]](): X }
type T3 = { [[foo]]?: X }
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
                "text": "T1",
                "rawText": "T1",
                "flags": 96,
                "start": 4,
                "end": 7
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 14,
                            "end": 17
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 11,
                        "end": 22
                    }
                ],
                "flags": 0,
                "start": 9,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 24,
                "end": 32
            },
            "name": {
                "kind": 134299649,
                "text": "T2",
                "rawText": "T2",
                "flags": 96,
                "start": 29,
                "end": 32
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 39,
                            "end": 42
                        },
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "functionTypeParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 45,
                                "end": 45
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "X",
                                    "rawText": "X",
                                    "flags": 96,
                                    "start": 47,
                                    "end": 49
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 47,
                                "end": 49
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 36,
                            "end": 49
                        },
                        "optionalToken": null,
                        "staticToken": null,
                        "flags": 0,
                        "start": 36,
                        "end": 49
                    }
                ],
                "flags": 0,
                "start": 34,
                "end": 51
            },
            "flags": 17,
            "start": 24,
            "end": 51
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 51,
                "end": 59
            },
            "name": {
                "kind": 134299649,
                "text": "T3",
                "rawText": "T3",
                "flags": 96,
                "start": 56,
                "end": 59
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 66,
                            "end": 69
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 96,
                                "start": 73,
                                "end": 75
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 73,
                            "end": 75
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 71,
                            "end": 72
                        },
                        "staticToken": null,
                        "flags": 0,
                        "start": 63,
                        "end": 75
                    }
                ],
                "flags": 0,
                "start": 61,
                "end": 77
            },
            "flags": 17,
            "start": 51,
            "end": 77
        }
    ],
    "isModule": false,
    "source": "type T1 = { [[foo]]: X }\ntype T2 = { [[foo]](): X }\ntype T3 = { [[foo]]?: X }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript




```

### Diagnostics

```javascript
✔ No errors
```


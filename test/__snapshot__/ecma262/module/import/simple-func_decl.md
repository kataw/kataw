# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
x@{x9}@+@{x9}@y
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 0,
                "end": 1
            },
            "flags": 16,
            "start": 0,
            "end": 1
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 1,
                            "end": 2
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 2,
                            "end": 2
                        },
                        "flags": 0,
                        "start": 2,
                        "end": 2
                    }
                ],
                "flags": 32,
                "start": 1,
                "end": 2
            },
            "classKeyword": null,
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x9",
                                "rawText": "x9",
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 3,
                            "end": 5
                        }
                    ],
                    "flags": 32,
                    "start": 3,
                    "end": 5
                },
                "flags": 2,
                "start": 32,
                "end": 6
            },
            "flags": 16,
            "start": 1,
            "end": 6
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 6,
                            "end": 7
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 0,
                        "start": 7,
                        "end": 7
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 7
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 7,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 7,
                    "end": 7
                },
                "flags": 7,
                "start": 32,
                "end": 7
            },
            "flags": 16,
            "start": 6,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 7,
                    "end": 8
                },
                "operand": {
                    "kind": 189,
                    "decorators": {
                        "kind": 207,
                        "elements": [
                            {
                                "kind": 34611453,
                                "decoratorToken": {
                                    "kind": 34611453,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 9
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 9,
                                    "end": 9
                                },
                                "flags": 0,
                                "start": 9,
                                "end": 9
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 9
                    },
                    "classKeyword": null,
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "x9",
                                        "rawText": "x9",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "flags": 32,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 9,
                        "start": 32,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "flags": 32,
                "start": 7,
                "end": 13
            },
            "flags": 16,
            "start": 7,
            "end": 13
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 13,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "flags": 0,
                        "start": 14,
                        "end": 15
                    }
                ],
                "flags": 32,
                "start": 13,
                "end": 15
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "flags": 15,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x@{x9}@+@{x9}@y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 2, end: 3
✖ A class declaration without the 'default' modifier must have a name. - start: 2, end: 3
✖ Identifier expected. A decorator name can only be an identifier - start: 7, end: 8
✖ Identifier expected. A decorator name can only be an identifier - start: 9, end: 10
✖ Binding identifier expected - start: 15, end: 15

```


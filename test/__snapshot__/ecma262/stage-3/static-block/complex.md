# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
const a = 1;
const b = 2;

class C {
    static {
        const a = 11;

        a;
        b;
    }

    static {
        const a = 11;

        a;
        b;
    }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 11
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 11
            },
            "flags": 33554448,
            "start": 0,
            "end": 12
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 12,
                "end": 18
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 24
                    }
                ],
                "flags": 16777232,
                "start": 18,
                "end": 24
            },
            "flags": 33554448,
            "start": 12,
            "end": 25
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "start": 25,
                "end": 32
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 49,
                                                "end": 63
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 11,
                                                            "rawText": "11",
                                                            "flags": 96,
                                                            "start": 67,
                                                            "end": 70
                                                        },
                                                        "flags": 16,
                                                        "start": 63,
                                                        "end": 70
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 63,
                                                "end": 70
                                            },
                                            "flags": 33554448,
                                            "start": 49,
                                            "end": 71
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 71,
                                                "end": 82
                                            },
                                            "flags": 16,
                                            "start": 71,
                                            "end": 83
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 83,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "start": 83,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 49,
                                    "end": 94
                                },
                                "flags": 36,
                                "start": 0,
                                "end": 100
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 100
                        },
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 81,
                                                "start": 114,
                                                "end": 128
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 128,
                                                            "end": 130
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 11,
                                                            "rawText": "11",
                                                            "flags": 96,
                                                            "start": 132,
                                                            "end": 135
                                                        },
                                                        "flags": 16,
                                                        "start": 128,
                                                        "end": 135
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "start": 128,
                                                "end": 135
                                            },
                                            "flags": 33554448,
                                            "start": 114,
                                            "end": 136
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 136,
                                                "end": 147
                                            },
                                            "flags": 16,
                                            "start": 136,
                                            "end": 148
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 148,
                                                "end": 158
                                            },
                                            "flags": 16,
                                            "start": 148,
                                            "end": 159
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 114,
                                    "end": 159
                                },
                                "flags": 100,
                                "start": 0,
                                "end": 165
                            },
                            "flags": 32,
                            "start": 100,
                            "end": 165
                        }
                    ],
                    "flags": 32,
                    "start": 36,
                    "end": 165
                },
                "flags": 34,
                "start": 32,
                "end": 167
            },
            "flags": 17,
            "start": 25,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "const a = 1;\nconst b = 2;\n\nclass C {\n    static {\n        const a = 11;\n\n        a;\n        b;\n    }\n\n    static {\n        const a = 11;\n\n        a;\n        b;\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 167
}
```

### Printed

```javascript

const a = 1;
const b = 2;
class C {
}

```

### Diagnostics

```javascript
✔ No errors
```


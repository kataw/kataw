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
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 11
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
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
                            "transformFlags": 0,
                            "start": 18,
                            "end": 20
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "2",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 18,
                        "end": 24
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 18,
                "end": 24
            },
            "flags": 33554448,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 25,
                "end": 32
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 47
                            },
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
                                                "transformFlags": 0,
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
                                                            "transformFlags": 0,
                                                            "start": 63,
                                                            "end": 65
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 11,
                                                            "rawText": "11",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 67,
                                                            "end": 70
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 63,
                                                        "end": 70
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 70
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 71
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 71,
                                                "end": 82
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 71,
                                            "end": 83
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 83,
                                                "end": 93
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 83,
                                            "end": 94
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 94
                                },
                                "flags": 36,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 100
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 100
                        },
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 100,
                                "end": 112
                            },
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
                                                "transformFlags": 0,
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
                                                            "transformFlags": 0,
                                                            "start": 128,
                                                            "end": 130
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 201392130,
                                                            "text": 11,
                                                            "rawText": "11",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 132,
                                                            "end": 135
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 4224,
                                                        "start": 128,
                                                        "end": 135
                                                    }
                                                ],
                                                "flags": 16777232,
                                                "transformFlags": 0,
                                                "start": 128,
                                                "end": 135
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 114,
                                            "end": 136
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 136,
                                                "end": 147
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 136,
                                            "end": 148
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 148,
                                                "end": 158
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 148,
                                            "end": 159
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 114,
                                    "end": 159
                                },
                                "flags": 100,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 165
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 165
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 165
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 32,
                "end": 167
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 25,
            "end": 167
        }
    ],
    "isModule": false,
    "source": "const a = 1;\nconst b = 2;\n\nclass C {\n    static {\n        const a = 11;\n\n        a;\n        b;\n    }\n\n    static {\n        const a = 11;\n\n        a;\n        b;\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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


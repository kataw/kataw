# Kataw parser test case

## Input

`````js
(class {}) + 1;
(class a {}) + 1;
(class extends b {}) + 1;
(class a extends b {}) + 1;

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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "name": null,
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 6,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 9
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 22
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 24
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 26
                            },
                            "flags": 24,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 27
                    },
                    "flags": 15,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 32
                },
                "flags": 47,
                "transformFlags": 1024,
                "start": 15,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 40
                        },
                        "name": null,
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 48
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 50
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 40,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 53
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 53
                    },
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 54
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 54,
                    "end": 56
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 58
                },
                "flags": 33,
                "transformFlags": 1024,
                "start": 33,
                "end": 58
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 33,
            "end": 59
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 66
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 68
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 76
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 78
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 78
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 80,
                                "end": 80
                            },
                            "flags": 68,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 81
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 81
                    },
                    "flags": 59,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 82
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 84
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 86
                },
                "flags": 59,
                "transformFlags": 1024,
                "start": 59,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 59,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "(class {}) + 1;\n(class a {}) + 1;\n(class extends b {}) + 1;\n(class a extends b {}) + 1;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 88
}
```

### Printed

```javascript

(class  {}) + 1;
(class a {}) + 1;

(class   extends b {}) + 1;

(class a  extends b {}) + 1;

```

### Diagnostics

```javascript
✔ No errors
```


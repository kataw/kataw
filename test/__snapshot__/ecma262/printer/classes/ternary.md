# Kataw parser test case

## Input

`````js
if (1) (class {}) ? 1 : 2;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 121,
                        "expression": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
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
                                    "start": 15,
                                    "end": 15
                                },
                                "flags": 13,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 17
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "consequent": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "alternate": {
                        "kind": 201392130,
                        "text": 2,
                        "rawText": "2",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 38,
                    "transformFlags": 4096,
                    "start": 6,
                    "end": 25
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 6,
                "end": 26
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "if (1) (class {}) ? 1 : 2;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
if (1) (class {}) ? 1 : 2;
```

### Diagnostics

```javascript
✔ No errors
```


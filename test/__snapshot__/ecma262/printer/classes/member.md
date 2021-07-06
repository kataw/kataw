# Kataw parser test case

## Input

`````js
(class {})[1];
(class {}).a;

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
                "kind": 130,
                "member": {
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
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "flags": 536870944,
                "transformFlags": 4,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 21
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
                                "start": 23,
                                "end": 23
                            },
                            "flags": 21,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 24
                    },
                    "flags": 14,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 25
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 27
                },
                "flags": 46,
                "transformFlags": 2,
                "start": 14,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 14,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(class {})[1];\n(class {}).a;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
(class {})[1];
(class {}).a;

```

### Diagnostics

```javascript
✔ No errors
```


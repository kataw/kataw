# Kataw parser test case

## Input

`````js
new class {};
new Ctor(class {});

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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
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
                            "start": 11,
                            "end": 11
                        },
                        "flags": 9,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 12
                },
                "argumentList": null,
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Ctor",
                    "rawText": "Ctor",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 22
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 28
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
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 28,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 31
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 31
                },
                "flags": 97,
                "transformFlags": 0,
                "start": 13,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "new class {};\nnew Ctor(class {});\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

new class  {};
new Ctor(class  {});

```

### Diagnostics

```javascript
✔ No errors
```


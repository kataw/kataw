# Kataw parser test case

## Input

`````js
x = class Foo { static x = class extends this {} }
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 13
                    },
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
                                    "staticKeyword": {
                                        "kind": 8388716,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 22
                                    },
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 189,
                                        "decorators": null,
                                        "classKeyword": {
                                            "kind": 37822544,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 32
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
                                                    "start": 32,
                                                    "end": 40
                                                },
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 45
                                                },
                                                "typeParameter": null,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 45
                                            },
                                            "body": {
                                                "kind": 303,
                                                "elements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 48
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 22,
                                    "end": 48
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 48
                        },
                        "flags": 13,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 50
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 50
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "x = class Foo { static x = class extends this {} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

x = class Foo {
  static x = class   extends this {};
};
```

### Diagnostics

```javascript
✔ No errors
```


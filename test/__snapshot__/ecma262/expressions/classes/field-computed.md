f# Kataw parser test case

## Input

`````js
class X {
  x = "y"
  [computed] = "z"
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 201392131,
                                        "text": "y",
                                        "rawText": "\"y\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 19
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "computed",
                                        "rawText": "computed",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "transformFlags": 4,
                                    "start": 15,
                                    "end": 32
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 34
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "z",
                                    "rawText": "\"z\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 38
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 15,
                                "end": 38
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 38
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 38
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class X {\n  x = \"y\"\n  [computed] = \"z\"\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
class X {
  x = "\"y\""[computed] = "\"z\"";
}
```

### Diagnostics

```javascript
✔ No errors
```


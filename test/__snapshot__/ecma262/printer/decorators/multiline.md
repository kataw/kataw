# Kataw parser test case

## Input

`````js
class Foo {
  @deco([
    foo,
    bar
  ]) prop = value;
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
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
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "deco",
                                                "rawText": "deco",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 19
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 21,
                                                                    "end": 29
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "bar",
                                                                    "rawText": "bar",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 30,
                                                                    "end": 38
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 33,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 38
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 8,
                                                        "start": 20,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 42
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 15,
                                            "end": 43
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 43
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 43
                            },
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 48
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "value",
                                "rawText": "value",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 56
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 56
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 57
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 59
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  @deco([\n    foo,\n    bar\n  ]) prop = value;\n}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
class Foo {
  @deco([foo, bar]) prop = value;;
}
```

### Diagnostics

```javascript
✔ No errors
```


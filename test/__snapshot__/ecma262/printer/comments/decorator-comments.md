# Kataw parser test case

## Input

`````js
class Something {
    @Annotateme()
    // comment
    static property;
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
                "text": "Something",
                "rawText": "Something",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 15
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
                                            "start": 17,
                                            "end": 23
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "Annotateme",
                                                "rawText": "Annotateme",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 33
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 23,
                                            "end": 35
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 35
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 35
                            },
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 61
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "property",
                                "rawText": "property",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 70
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 61,
                            "end": 70
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 71
                },
                "flags": 15,
                "transformFlags": 0,
                "start": 32,
                "end": 73
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "class Something {\n    @Annotateme()\n    // comment\n    static property;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript

class Something {
  @ Annotateme() static property;;
}
```

### Diagnostics

```javascript
✔ No errors
```


# Kataw parser test case

## Input

`````js
class C {
  ["foo"]
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
                "text": "C",
                "rawText": "C",
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
                                "kind": 194,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "foo",
                                    "rawText": "\"foo\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 18
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "class C {\n  [\"foo\"]\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

class C {
    ['foo']
}

```

### Diagnostics

```javascript
✔ No errors
```


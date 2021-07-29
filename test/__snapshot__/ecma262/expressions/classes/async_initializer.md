# Kataw parser test case

## Input

`````js
class C {
  async = false
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
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 17
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 205586437,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 25
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "class C {\n  async = false\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

class C {
    async = false
}

```

### Diagnostics

```javascript
✔ No errors
```


# Kataw parser test case

## Input

`````js
class x { @declare a }
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
                "text": "x",
                "rawText": "x",
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
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "declare",
                                            "rawText": "declare",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 18
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 20
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "class x { @declare a }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

class x {
  @ declare a;
}
```

### Diagnostics

```javascript
✔ No errors
```


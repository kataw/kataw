# Kataw parser test case

## Input

`````js
class A {
  @dec static name = 0
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
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
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
                                            "flags": 65,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "dec",
                                            "rawText": "dec",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 16
                                        },
                                        "flags": 0,
                                        "start": 13,
                                        "end": 16
                                    }
                                ],
                                "flags": 32,
                                "start": 9,
                                "end": 16
                            },
                            "declaredToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 23
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "name",
                                "rawText": "name",
                                "flags": 96,
                                "start": 23,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 32
                },
                "flags": 7,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "class A {\n  @dec static name = 0\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

class A {
  @dec
  name = 0;
}
```

### Diagnostics

```javascript
✔ No errors
```


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
                "flags": 0,
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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
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
  static name = 0;
}
```

### Diagnostics

```javascript
✔ No errors
```


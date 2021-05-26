# Kataw parser test case

## Input

`````js
class Foo { static x = class { y = this } }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
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
                                "start": 11,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 189,
                                "decorators": null,
                                "classKeyword": {
                                    "kind": 37822544,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 28
                                },
                                "name": null,
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
                                                "staticToken": null,
                                                "asyncKeyword": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 135,
                                                    "flags": 34,
                                                    "start": 96,
                                                    "end": 39
                                                },
                                                "flags": 32,
                                                "start": 30,
                                                "end": 39
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 39
                                    },
                                    "flags": 28,
                                    "start": 32,
                                    "end": 41
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 41
                },
                "flags": 9,
                "start": 32,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "class Foo { static x = class { y = this } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

class Foo {
  static x = class  {
      y = this;
    };
}
```

### Diagnostics

```javascript
✔ No errors
```


# Kataw parser test case

## Input

`````js
@deco class Foo {}

const foo = @deco class {
  //
};

const bar =
  @deco
  class {
    //
  };
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "deco",
                            "rawText": "deco",
                            "flags": 96,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 0,
                        "start": 1,
                        "end": 5
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 5
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 11,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 17,
                    "end": 17
                },
                "flags": 15,
                "start": 32,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 18,
                "end": 25
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 25,
                            "end": 29
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 64,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "deco",
                                            "rawText": "deco",
                                            "flags": 96,
                                            "start": 33,
                                            "end": 37
                                        },
                                        "flags": 0,
                                        "start": 33,
                                        "end": 37
                                    }
                                ],
                                "flags": 32,
                                "start": 31,
                                "end": 37
                            },
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 37,
                                "end": 43
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 43,
                                "start": 32,
                                "end": 52
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 52
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 52
                    }
                ],
                "flags": 16777232,
                "start": 25,
                "end": 52
            },
            "flags": 33554448,
            "start": 18,
            "end": 53
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 53,
                "end": 60
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 60,
                            "end": 64
                        },
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "start": 66,
                                            "end": 70
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "deco",
                                            "rawText": "deco",
                                            "flags": 96,
                                            "start": 70,
                                            "end": 74
                                        },
                                        "flags": 0,
                                        "start": 70,
                                        "end": 74
                                    }
                                ],
                                "flags": 32,
                                "start": 66,
                                "end": 74
                            },
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 65,
                                "start": 74,
                                "end": 82
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 84,
                                    "end": 84
                                },
                                "flags": 82,
                                "start": 32,
                                "end": 95
                            },
                            "flags": 33,
                            "start": 66,
                            "end": 95
                        },
                        "flags": 16,
                        "start": 60,
                        "end": 95
                    }
                ],
                "flags": 16777232,
                "start": 60,
                "end": 95
            },
            "flags": 33554448,
            "start": 53,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "@deco class Foo {}\n\nconst foo = @deco class {\n  //\n};\n\nconst bar =\n  @deco\n  class {\n    //\n  };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript

@deco
class Foo {}
const foo = @deco
  class  {};
const bar = @deco
  class  {};
```

### Diagnostics

```javascript
✔ No errors
```


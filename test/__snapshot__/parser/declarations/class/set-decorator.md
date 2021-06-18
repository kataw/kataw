# Kataw parser test case

## Input

`````js
class A {
  @foo set setter(_val){}
}
`````

## Options

### Parser Options

`````js
{}
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
                            "kind": 278,
                            "declareToken": null,
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
                                            "text": "foo",
                                            "rawText": "foo",
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
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 20
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "setter",
                                    "rawText": "setter",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "_val",
                                            "rawText": "_val",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 28,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 512,
                                "start": 27,
                                "end": 35
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "class A {\n  @foo set setter(_val){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

class A {
  @foo
  set setter {}
}
```

### Diagnostics

```javascript
✔ No errors
```


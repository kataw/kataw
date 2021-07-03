# Kataw parser test case

## Input

`````js
class Foo {
  @abc
  constructor(){}
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
                                            "start": 11,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "abc",
                                            "rawText": "abc",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 18
                                    }
                                ],
                                "flags": 32,
                                "start": 11,
                                "end": 18
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "start": 18,
                                    "end": 32
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 33,
                                    "end": 34
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
                                },
                                "flags": 2048,
                                "start": 32,
                                "end": 36
                            },
                            "flags": 2048,
                            "start": 11,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 36
                },
                "flags": 9,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  @abc\n  constructor(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Decorators are not valid here - start: 32, end: 33

```


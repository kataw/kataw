# Kataw parser test case

## Input

`````js
class A {
  @foo get getter(){}
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": {
                                "kind": 16498,
                                "flags": 64,
                                "start": 9,
                                "end": 20
                            },
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "getter",
                                    "rawText": "getter",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 27
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 1024,
                                    "start": 28,
                                    "end": 29
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 1024,
                                "start": 27,
                                "end": 31
                            },
                            "flags": 1024,
                            "start": 9,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 31
                },
                "flags": 7,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "class A {\n  @foo get getter(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

class A {
  @ foo get getter() {}
}
```

### Diagnostics

```javascript
✔ No errors
```


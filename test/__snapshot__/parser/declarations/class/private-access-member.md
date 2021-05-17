# Kataw parser test case

## Input

`````js
class C { #aaa; f(obj) { obj?.#aaa } }
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
                "text": "C",
                "rawText": "C",
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
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#aaa",
                                "flags": 96,
                                "start": 9,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 14
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 18,
                                            "end": 21
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 18,
                                    "end": 22
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 0,
                                                        "start": 28,
                                                        "end": 30
                                                    },
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "obj",
                                                        "rawText": "obj",
                                                        "flags": 96,
                                                        "start": 24,
                                                        "end": 28
                                                    },
                                                    "chain": {
                                                        "kind": 206,
                                                        "chain": {
                                                            "kind": 536871114,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 67174651,
                                                                "text": "#aaa",
                                                                "flags": 96,
                                                                "start": 30,
                                                                "end": 34
                                                            },
                                                            "flags": 32,
                                                            "start": 30,
                                                            "end": 34
                                                        },
                                                        "flags": 32,
                                                        "start": 30,
                                                        "end": 34
                                                    },
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 34
                                                },
                                                "flags": 16,
                                                "start": 24,
                                                "end": 34
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 24,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 36
                                },
                                "flags": 0,
                                "start": 17,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 36
                },
                "flags": 32,
                "start": 7,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "class C { #aaa; f(obj) { obj?.#aaa } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

class C {
  #aaa;

  f(obj) {
    obj?.;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```


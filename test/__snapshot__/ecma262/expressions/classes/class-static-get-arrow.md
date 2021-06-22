# Kataw parser test case

## Input

`````js
(class{static get[()=>null](){}}())
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "start": 1,
                            "end": 6
                        },
                        "name": null,
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
                                        "decorators": null,
                                        "staticKeyword": {
                                            "kind": 8388716,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 13
                                        },
                                        "asyncKeyword": null,
                                        "setKeyword": {
                                            "kind": 16498,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 17
                                        },
                                        "getKeyword": null,
                                        "asteriskToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "contents": {
                                                        "kind": 138477575,
                                                        "flags": 96,
                                                        "start": 22,
                                                        "end": 26
                                                    },
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 26
                                                },
                                                "flags": 32,
                                                "start": 17,
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
                                        "start": 13,
                                        "end": 31
                                    }
                                ],
                                "flags": 32,
                                "start": 7,
                                "end": 31
                            },
                            "flags": 6,
                            "start": 32,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 32
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 268435488,
                    "start": 1,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(class{static get[()=>null](){}}())",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

(class  {
    static get static [() =>  null]() {}
  }());
```

### Diagnostics

```javascript
✔ No errors
```


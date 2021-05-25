# Kataw parser test case

## Input

`````js
class A {
  @a.b.c.d(e, f)
  m(){}
}
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": {
                                "kind": 207,
                                "decoratorList": [
                                    {
                                        "kind": 34611453,
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 13,
                                                            "end": 14
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 15,
                                                            "end": 16
                                                        },
                                                        "flags": 536870944,
                                                        "start": 13,
                                                        "end": 16
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 18
                                                    },
                                                    "flags": 536870944,
                                                    "start": 13,
                                                    "end": 18
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "d",
                                                    "rawText": "d",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "flags": 536870944,
                                                "start": 13,
                                                "end": 20
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "e",
                                                        "rawText": "e",
                                                        "flags": 96,
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "f",
                                                        "rawText": "f",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 25
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "flags": 268435488,
                                            "start": 13,
                                            "end": 26
                                        },
                                        "flags": 1,
                                        "start": 13,
                                        "end": 26
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 26
                            },
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "m",
                                    "rawText": "m",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 31,
                                    "end": 32
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 33,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 32,
                                    "end": 34
                                },
                                "flags": 0,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 34
                },
                "flags": 7,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "class A {\n  @a.b.c.d(e, f)\n  m(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

class A {
  @a.b.c.d(e, f)
  m() {}
}
```

### Diagnostics

```javascript
✔ No errors
```


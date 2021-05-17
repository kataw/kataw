# Kataw parser test case

## Input

`````js
class C { #aaa; f() { this.#aaa } }
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
            "members": {
                "kind": 277,
                "classHeritage": null,
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
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 18,
                                "end": 19
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
                                                "kind": 129,
                                                "member": {
                                                    "kind": 135,
                                                    "flags": 96,
                                                    "start": 21,
                                                    "end": 26
                                                },
                                                "expression": {
                                                    "kind": 67174651,
                                                    "text": "#aaa",
                                                    "flags": 96,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "flags": 536870944,
                                                "start": 21,
                                                "end": 31
                                            },
                                            "flags": 16,
                                            "start": 21,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 21,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 0,
                        "start": 15,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 7,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class C { #aaa; f() { this.#aaa } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

class C {
  #aaa;

  f() {
    this.#aaa;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```


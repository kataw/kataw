# Kataw parser test case

## Input

`````js
class Foo extends Base {
    method() {
      super.method?.();
    }
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
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 9,
                        "end": 17
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "start": 17,
                        "end": 22
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 17,
                    "end": 22
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 37
                                },
                                "returnType": null,
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
                                                        "flags": 64,
                                                        "start": 58,
                                                        "end": 60
                                                    },
                                                    "member": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4259935,
                                                            "flags": 97,
                                                            "start": 39,
                                                            "end": 51
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "method",
                                                            "rawText": "method",
                                                            "flags": 96,
                                                            "start": 52,
                                                            "end": 58
                                                        },
                                                        "flags": 97,
                                                        "start": 39,
                                                        "end": 58
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 204,
                                                            "chain": null,
                                                            "typeArguments": null,
                                                            "argumentList": {
                                                                "kind": 256,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "start": 61,
                                                                "end": 61
                                                            },
                                                            "flags": 268435488,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "flags": 32,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 62
                                                },
                                                "flags": 16,
                                                "start": 39,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 39,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 69
                                },
                                "flags": 0,
                                "start": 35,
                                "end": 69
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 69
                },
                "flags": 9,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "class Foo extends Base {\n    method() {\n      super.method?.();\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

class Foo  {
  method() {
    .method?.();
  }
}
```

### Diagnostics

```javascript
✔ No errors
```


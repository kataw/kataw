# Kataw parser test case

## Input

`````js
class x { foo(){ function f(){ super.foo; } }}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 14,
                                "end": 15
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 768,
                                                "start": 16,
                                                "end": 25
                                            },
                                            "generatorToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 256,
                                                "start": 27,
                                                "end": 29
                                            },
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
                                                                    "kind": 225,
                                                                    "superKeyword": {
                                                                        "kind": 4259935,
                                                                        "flags": 768,
                                                                        "start": 30,
                                                                        "end": 36
                                                                    },
                                                                    "flags": 768,
                                                                    "start": 30,
                                                                    "end": 36
                                                                },
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 37,
                                                                    "end": 40
                                                                },
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 30,
                                                                "end": 40
                                                            },
                                                            "flags": 128,
                                                            "start": 30,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 30,
                                                    "end": 41
                                                },
                                                "flags": 256,
                                                "start": 29,
                                                "end": 43
                                            },
                                            "typeParameters": null,
                                            "returnType": null,
                                            "flags": 128,
                                            "start": 16,
                                            "end": 43
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 43
                                },
                                "flags": 256,
                                "start": 15,
                                "end": 45
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 45
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 45
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "class x { foo(){ function f(){ super.foo; } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


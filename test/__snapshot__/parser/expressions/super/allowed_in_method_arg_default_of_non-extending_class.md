# Kataw parser test case

## Input

`````js
class x { foo(x=super.foo){ }}
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
                "text": "x",
                "rawText": "x",
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 13
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 0,
                                                        "start": 16,
                                                        "end": 21
                                                    },
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 21
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 25
                                                },
                                                "flags": 536870944,
                                                "start": 16,
                                                "end": 25
                                            },
                                            "flags": 34,
                                            "start": 14,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 14,
                                    "end": 26
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 26,
                                    "end": 29
                                },
                                "flags": 0,
                                "start": 13,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 29
                },
                "flags": 7,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class x { foo(x=super.foo){ }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

class x {
  foo(x = .foo) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


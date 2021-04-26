# Kataw parser test case

## Input

`````js
class x { foo(){ super.foo; }}
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 768,
                                                        "start": 16,
                                                        "end": 22
                                                    },
                                                    "flags": 768,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 768,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 16,
                                                "end": 26
                                            },
                                            "flags": 128,
                                            "start": 16,
                                            "end": 27
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 15,
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
                "flags": 256,
                "start": 9,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "class x { foo(){ super.foo; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: class-gen
> :: case: new super();
## Input

`````js
class C { *method() { new super(); } }
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
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
                                "text": "method",
                                "rawText": "method",
                                "flags": 768,
                                "start": 11,
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
                                                "kind": 210,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 21,
                                                    "start": 0,
                                                    "end": 25
                                                },
                                                "expression": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 25,
                                                        "start": 0,
                                                        "end": 31
                                                    },
                                                    "flags": 768,
                                                    "start": 25,
                                                    "end": 31
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 256,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 256,
                                                "start": 21,
                                                "end": 33
                                            },
                                            "flags": 128,
                                            "start": 21,
                                            "end": 34
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 21,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 36
                        },
                        "flags": 0,
                        "start": 9,
                        "end": 36
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "class C { *method() { new super(); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 31, end: 32

```


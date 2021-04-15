# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: function f() { class C { await() { } } }
## Input

`````js
function f() { class C { await() { } } }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37814352,
                                "flags": 768,
                                "start": 14,
                                "end": 20
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 768,
                                "start": 20,
                                "end": 22
                            },
                            "typeParameters": null,
                            "classHeritage": null,
                            "members": {
                                "kind": 277,
                                "elements": [
                                    {
                                        "kind": 278,
                                        "decorators": null,
                                        "staticToken": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 24,
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
                                            "type": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 256,
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "flags": 256,
                                                "start": 32,
                                                "end": 36
                                            },
                                            "flags": 0,
                                            "start": 30,
                                            "end": 36
                                        },
                                        "flags": 256,
                                        "start": 24,
                                        "end": 36
                                    }
                                ],
                                "flags": 256,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 38
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 38
                },
                "flags": 256,
                "start": 12,
                "end": 40
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "function f() { class C { await() { } } }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


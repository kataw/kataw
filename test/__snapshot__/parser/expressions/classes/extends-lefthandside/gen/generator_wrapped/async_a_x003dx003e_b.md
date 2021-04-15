# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: async a => b
## Input

`````js
function *P(){
  class D extends async a => b {}
}
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "P",
                "rawText": "P",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
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
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "extendsToken": {
                                    "kind": 4194391,
                                    "flags": 768,
                                    "start": 24,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 768,
                                        "start": 40,
                                        "end": 43
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 768,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 32,
                                            "end": 40
                                        }
                                    ],
                                    "asyncToken": {
                                        "kind": 82031,
                                        "flags": 768,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "flags": 2304,
                                    "start": 32,
                                    "end": 45
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 32,
                                "end": 45
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 47,
                                "end": 48
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 48
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 48
                },
                "flags": 256,
                "start": 13,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "function *P(){\n  class D extends async a => b {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


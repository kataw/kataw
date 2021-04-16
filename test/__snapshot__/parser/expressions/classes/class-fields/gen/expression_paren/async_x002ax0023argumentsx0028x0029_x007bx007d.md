# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: async *#arguments() {}
## Input

`````js
(class { async *#arguments() {} });
`````

## Output

### Hybrid CST

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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67109115,
                                        "text": "#arguments",
                                        "flags": 768,
                                        "start": 16,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 3072,
                                        "start": 27,
                                        "end": 28
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
                                            "start": 30,
                                            "end": 30
                                        },
                                        "flags": 256,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "flags": 3072,
                                    "start": 26,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 31
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 33
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 33
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "(class { async *#arguments() {} });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```


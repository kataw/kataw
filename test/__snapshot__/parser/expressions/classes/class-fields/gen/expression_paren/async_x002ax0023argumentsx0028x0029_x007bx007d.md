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

### CST

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
                        "flags": 0,
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
                                "generatorToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "start": 14,
                                    "end": 16
                                },
                                "staticKeyword": null,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 8,
                                    "end": 14
                                },
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 67174651,
                                        "text": "#arguments",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 384,
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
                                            "flags": 32,
                                            "start": 30,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 31
                                    },
                                    "flags": 384,
                                    "start": 26,
                                    "end": 31
                                },
                                "flags": 384,
                                "start": 8,
                                "end": 31
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "(class { async *#arguments() {} });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

(class  {
    async #arguments() {}
  });
```

### Diagnostics

```javascript
✔ No errors
```


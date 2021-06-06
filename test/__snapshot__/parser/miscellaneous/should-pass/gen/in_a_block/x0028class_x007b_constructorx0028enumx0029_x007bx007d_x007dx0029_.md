# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: (class { constructor(enum) {} });
## Input

`````js
{ (class { constructor(enum) {} }); }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
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
                                    "flags": 64,
                                    "start": 3,
                                    "end": 8
                                },
                                "name": null,
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
                                                        "text": "constructor",
                                                        "rawText": "constructor",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 22
                                                    },
                                                    "typeParameters": null,
                                                    "formalParameters": {
                                                        "kind": 214,
                                                        "formalParameterList": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "enum",
                                                                "rawText": "enum",
                                                                "flags": 96,
                                                                "start": 23,
                                                                "end": 27
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2144,
                                                        "start": 23,
                                                        "end": 28
                                                    },
                                                    "returnType": null,
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
                                                    "flags": 2048,
                                                    "start": 22,
                                                    "end": 31
                                                },
                                                "flags": 2048,
                                                "start": 10,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 10,
                                        "end": 31
                                    },
                                    "flags": 8,
                                    "start": 32,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "{ (class { constructor(enum) {} }); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

{
  (class  {
      constructor(enum) {}
    });
}
```

### Diagnostics

```javascript
✔ No errors
```


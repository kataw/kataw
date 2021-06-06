# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function argsLengthRestObject(...{a}) {}
## Input

`````js
{ function argsLengthRestObject(...{a}) {} }
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
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "argsLengthRestObject",
                            "rawText": "argsLengthRestObject",
                            "flags": 96,
                            "start": 10,
                            "end": 31
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 32,
                                        "end": 35
                                    },
                                    "left": {
                                        "kind": 212,
                                        "propertyList": {
                                            "kind": 213,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 36,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 36,
                                            "end": 37
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 34,
                                    "start": 32,
                                    "end": 38
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "start": 31,
                            "end": 39
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 41,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 39,
                            "end": 42
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "{ function argsLengthRestObject(...{a}) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

{
  function argsLengthRestObject(...{
    a
  }) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


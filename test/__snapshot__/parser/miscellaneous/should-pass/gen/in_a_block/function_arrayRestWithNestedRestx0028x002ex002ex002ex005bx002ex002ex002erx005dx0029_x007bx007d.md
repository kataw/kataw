# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function arrayRestWithNestedRest(...[...r]) {}
## Input

`````js
{ function arrayRestWithNestedRest(...[...r]) {} }
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
                            "text": "arrayRestWithNestedRest",
                            "rawText": "arrayRestWithNestedRest",
                            "flags": 96,
                            "start": 10,
                            "end": 34
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "left": {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 39,
                                                        "end": 42
                                                    },
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "r",
                                                        "rawText": "r",
                                                        "flags": 96,
                                                        "start": 42,
                                                        "end": 43
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": null,
                                                    "flags": 32,
                                                    "start": 39,
                                                    "end": 43
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 39,
                                            "end": 43
                                        },
                                        "flags": 32,
                                        "start": 38,
                                        "end": 44
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 34,
                                    "start": 35,
                                    "end": 44
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "start": 34,
                            "end": 45
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 32,
                            "start": 45,
                            "end": 48
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "{ function arrayRestWithNestedRest(...[...r]) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

{
  function arrayRestWithNestedRest(...[...r]) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


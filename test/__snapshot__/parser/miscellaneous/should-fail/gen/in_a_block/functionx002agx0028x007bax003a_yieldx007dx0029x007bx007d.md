# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: function*g({a: yield}){}
## Input

`````js
{ function*g({a: yield}){} }
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
                        "generatorToken": {
                            "kind": 67143222,
                            "flags": 64,
                            "start": 10,
                            "end": 11
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 204,
                                                "ellipsisToken": null,
                                                "key": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 15
                                                },
                                                "value": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 22
                                                },
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 14,
                                                "end": 22
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 24
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 26
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 272,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ function*g({a: yield}){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 16, end: 22

```


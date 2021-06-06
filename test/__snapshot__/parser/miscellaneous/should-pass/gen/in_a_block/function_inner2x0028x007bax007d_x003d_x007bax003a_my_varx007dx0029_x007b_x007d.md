# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: function inner2({a} = {a: my_var}) { }
## Input

`````js
{ function inner2({a} = {a: my_var}) { } }
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
                            "text": "inner2",
                            "rawText": "inner2",
                            "flags": 96,
                            "start": 10,
                            "end": 17
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
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
                                                    "start": 19,
                                                    "end": 20
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "generatorToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 25,
                                                        "end": 26
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "my_var",
                                                        "rawText": "my_var",
                                                        "flags": 96,
                                                        "start": 27,
                                                        "end": 34
                                                    },
                                                    "flags": 32,
                                                    "start": 25,
                                                    "end": 34
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 25,
                                            "end": 34
                                        },
                                        "flags": 48,
                                        "start": 23,
                                        "end": 35
                                    },
                                    "flags": 34,
                                    "start": 18,
                                    "end": 35
                                }
                            ],
                            "trailingComma": false,
                            "flags": 34,
                            "start": 17,
                            "end": 36
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 40
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 40
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "{ function inner2({a} = {a: my_var}) { } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

{
  function inner2({
    a
  } = { a: my_var }) {}
}
```

### Diagnostics

```javascript
✔ No errors
```


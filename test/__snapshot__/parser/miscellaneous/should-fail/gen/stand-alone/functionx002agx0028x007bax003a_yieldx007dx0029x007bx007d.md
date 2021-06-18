# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: function*g({a: yield}){}
## Options

`````js
{}
`````
## Input

`````js
function*g({a: yield}){}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 20
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 22
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 23,
                    "end": 23
                },
                "flags": 32,
                "start": 22,
                "end": 24
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "function*g({a: yield}){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 14, end: 20

```


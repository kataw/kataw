# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/function_formal_param_list
> :: test: function formal param list
> :: case: [a,b,...rest]
## Options

`````js
{}
`````
## Input

`````js
function f([a,b,...rest]) {}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                },
                                {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "rest",
                                        "rawText": "rest",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 23
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 32,
                                    "start": 16,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 12,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 24
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 25,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function f([a,b,...rest]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

function f([a, b, ...rest]) {}
```

### Diagnostics

```javascript
✔ No errors
```


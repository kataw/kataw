# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/function_formal_param_list
> :: test: function formal param list
> :: case: {arguments: x, ...z}
## Options

`````js
{}
`````
## Input

`````js
function f({arguments: x, ...z}) {}
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
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 21
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 24
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 25,
                                        "end": 29
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 30
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 30
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 31
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 32,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function f({arguments: x, ...z}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

function f({
  arguments: x,
  ...z
}) {}
```

### Diagnostics

```javascript
✔ No errors
```


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/function_formal_param_list_second_arg
> :: test: function formal param list second arg
> :: case: { __proto__: x, __proto__: y}
## Options

`````js
{}
`````
## Input

`````js
function f(argument1, { __proto__: x, __proto__: y}) {}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "argument1",
                        "rawText": "argument1",
                        "flags": 96,
                        "start": 11,
                        "end": 20
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 33
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 23,
                                    "end": 36
                                },
                                {
                                    "kind": 329,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 47
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 37,
                                    "end": 50
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 23,
                            "end": 50
                        },
                        "flags": 32,
                        "start": 21,
                        "end": 51
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 51
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 54,
                    "end": 54
                },
                "flags": 32,
                "start": 52,
                "end": 55
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "function f(argument1, { __proto__: x, __proto__: y}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 55
}
```

### Printed

```javascript

function f(argument1, {
    __proto__: x,
    __proto__: y
  }) { }

```

### Diagnostics

```javascript
✔ No errors
```


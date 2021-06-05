# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-05
- From: kataw8/test\__snapshot__/parser/misc/destructuring/positive-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\positive-cases\gen\function_formal_param_list
> :: test: function formal param list
> :: case: { __proto__: x, __proto__: y, ...z}
## Input

`````js
function f({ __proto__: x, __proto__: y, ...z}) {}
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
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 22
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 12,
                                    "end": 25
                                },
                                {
                                    "kind": 204,
                                    "ellipsisToken": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "__proto__",
                                        "rawText": "__proto__",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 36
                                    },
                                    "value": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 26,
                                    "end": 39
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 64,
                                        "start": 40,
                                        "end": 44
                                    },
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 44,
                                        "end": 45
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "right": null,
                                    "flags": 0,
                                    "start": 40,
                                    "end": 45
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 46
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 47
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 49,
                    "end": 49
                },
                "flags": 32,
                "start": 47,
                "end": 50
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "function f({ __proto__: x, __proto__: y, ...z}) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

function f({
  __proto__: x,
  __proto__: y,
  ...z
}) {}
```

### Diagnostics

```javascript
✔ No errors
```


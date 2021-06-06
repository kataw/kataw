# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: var {a: my_var} = {a: 3}; my_var;
## Input

`````js
{ var {a: my_var} = {a: 3}; my_var; }
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
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [
                                {
                                    "kind": 157,
                                    "binding": {
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
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "my_var",
                                                        "rawText": "my_var",
                                                        "flags": 96,
                                                        "start": 9,
                                                        "end": 16
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 17
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
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
                                                        "start": 21,
                                                        "end": 22
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 96,
                                                        "start": 23,
                                                        "end": 25
                                                    },
                                                    "flags": 32,
                                                    "start": 21,
                                                    "end": 25
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 48,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 26
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 27
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 27,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 27,
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
    "source": "{ var {a: my_var} = {a: 3}; my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

{
  var {
    a: my_var
  } = { a: 3 };
  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```


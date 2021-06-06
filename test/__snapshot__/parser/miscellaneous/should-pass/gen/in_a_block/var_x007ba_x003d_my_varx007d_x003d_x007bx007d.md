# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: var {a = my_var} = {}
## Input

`````js
{ var {a = my_var} = {} }
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
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 8
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "my_var",
                                                        "rawText": "my_var",
                                                        "flags": 96,
                                                        "start": 10,
                                                        "end": 17
                                                    },
                                                    "flags": 0,
                                                    "start": 7,
                                                    "end": 17
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 18
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 48,
                                        "start": 20,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ var {a = my_var} = {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
  var {
    a = my_var
  } = {};
}
```

### Diagnostics

```javascript
✔ No errors
```


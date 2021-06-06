# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: var [localVar = defaultValue] = obj
## Input

`````js
{ var [localVar = defaultValue] = obj }
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 202,
                                            "elements": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "localVar",
                                                        "rawText": "localVar",
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 15
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "defaultValue",
                                                        "rawText": "defaultValue",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 30
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "start": 7,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 31
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 134299649,
                                        "text": "obj",
                                        "rawText": "obj",
                                        "flags": 96,
                                        "start": 33,
                                        "end": 37
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 37
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "{ var [localVar = defaultValue] = obj }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

{
  var [localVar = defaultValue] = obj;
}
```

### Diagnostics

```javascript
✔ No errors
```


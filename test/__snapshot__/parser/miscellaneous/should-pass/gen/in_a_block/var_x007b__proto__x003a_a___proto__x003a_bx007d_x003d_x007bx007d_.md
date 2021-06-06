# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: var {__proto__: a, __proto__: b} = {};
## Input

`````js
{ var {__proto__: a, __proto__: b} = {}; }
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
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 7,
                                                        "end": 16
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 7,
                                                    "end": 19
                                                },
                                                {
                                                    "kind": 204,
                                                    "ellipsisToken": null,
                                                    "key": {
                                                        "kind": 134299649,
                                                        "text": "__proto__",
                                                        "rawText": "__proto__",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 30
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 20,
                                                    "end": 33
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 7,
                                            "end": 33
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 34
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
                                            "start": 38,
                                            "end": 38
                                        },
                                        "flags": 48,
                                        "start": 36,
                                        "end": 39
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 39
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 39
                        },
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
    "source": "{ var {__proto__: a, __proto__: b} = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

{
  var {
    __proto__: a,
    __proto__: b
  } = {};
}
```

### Diagnostics

```javascript
✔ No errors
```


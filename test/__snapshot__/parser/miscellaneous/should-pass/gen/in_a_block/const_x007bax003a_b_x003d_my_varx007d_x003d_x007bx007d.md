# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: const {a: b = my_var} = {}
## Input

`````js
{ const {a: b = my_var} = {} }
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
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 80,
                            "start": 1,
                            "end": 7
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
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
                                                        "start": 9,
                                                        "end": 10
                                                    },
                                                    "value": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "initializer": {
                                                        "kind": 134299649,
                                                        "text": "my_var",
                                                        "rawText": "my_var",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 22
                                                    },
                                                    "flags": 32,
                                                    "start": 9,
                                                    "end": 22
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 9,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 23
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
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 48,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "start": 7,
                                    "end": 28
                                }
                            ],
                            "flags": 16777232,
                            "start": 7,
                            "end": 28
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "{ const {a: b = my_var} = {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

{
  const {
    a: b = my_var
  } = {};
}
```

### Diagnostics

```javascript
✔ No errors
```


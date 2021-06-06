# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: someObject = { someKey: { ...mapGetters([ "some_val_1", "some_val_2" ]) } }
## Input

`````js
{ someObject = { someKey: { ...mapGetters([ "some_val_1", "some_val_2" ]) } } }
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
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "someObject",
                                "rawText": "someObject",
                                "flags": 96,
                                "start": 1,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 12,
                                "end": 14
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "generatorToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "someKey",
                                                "rawText": "someKey",
                                                "flags": 96,
                                                "start": 16,
                                                "end": 24
                                            },
                                            "right": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 224,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "start": 27,
                                                                "end": 31
                                                            },
                                                            "argument": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "mapGetters",
                                                                    "rawText": "mapGetters",
                                                                    "flags": 96,
                                                                    "start": 31,
                                                                    "end": 41
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 201392131,
                                                                                        "text": "some_val_1",
                                                                                        "rawText": "\"some_val_1\"",
                                                                                        "flags": 96,
                                                                                        "start": 43,
                                                                                        "end": 56
                                                                                    },
                                                                                    {
                                                                                        "kind": 201392131,
                                                                                        "text": "some_val_2",
                                                                                        "rawText": "\"some_val_2\"",
                                                                                        "flags": 96,
                                                                                        "start": 57,
                                                                                        "end": 70
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 43,
                                                                                "end": 70
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 42,
                                                                            "end": 72
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 42,
                                                                    "end": 72
                                                                },
                                                                "flags": 268435488,
                                                                "start": 31,
                                                                "end": 73
                                                            },
                                                            "flags": 32,
                                                            "start": 27,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 27,
                                                    "end": 73
                                                },
                                                "flags": 48,
                                                "start": 25,
                                                "end": 75
                                            },
                                            "flags": 32,
                                            "start": 16,
                                            "end": 75
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 16,
                                    "end": 75
                                },
                                "flags": 48,
                                "start": 14,
                                "end": 77
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 77
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 77
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 77
            },
            "flags": 16,
            "start": 0,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "{ someObject = { someKey: { ...mapGetters([ \"some_val_1\", \"some_val_2\" ]) } } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

{
  someObject = {
    someKey: { ...mapGetters(["\"some_val_1\"", "\"some_val_2\""]) }
  };
}
```

### Diagnostics

```javascript
✔ No errors
```


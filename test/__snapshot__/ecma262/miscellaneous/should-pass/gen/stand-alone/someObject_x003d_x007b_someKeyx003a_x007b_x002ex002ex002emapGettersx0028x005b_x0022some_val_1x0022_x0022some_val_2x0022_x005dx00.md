# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: someObject = { someKey: { ...mapGetters([ "some_val_1", "some_val_2" ]) } }
## Options

`````js
{}
`````
## Input

`````js
someObject = { someKey: { ...mapGetters([ "some_val_1", "some_val_2" ]) } }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "someKey",
                                    "rawText": "someKey",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 22
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
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 29
                                                },
                                                "argument": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "mapGetters",
                                                        "rawText": "mapGetters",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 39
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
                                                                            "transformFlags": 0,
                                                                            "start": 41,
                                                                            "end": 54
                                                                        },
                                                                        {
                                                                            "kind": 201392131,
                                                                            "text": "some_val_2",
                                                                            "rawText": "\"some_val_2\"",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 55,
                                                                            "end": 68
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 41,
                                                                    "end": 68
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 8,
                                                                "start": 40,
                                                                "end": 70
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 70
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1,
                                                    "start": 29,
                                                    "end": 71
                                                },
                                                "flags": 1073741856,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 71
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 71
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 23,
                                    "end": 73
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 14,
                                "end": 73
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 73
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 12,
                    "end": 75
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 75
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "someObject = { someKey: { ...mapGetters([ \"some_val_1\", \"some_val_2\" ]) } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
someObject = {
  someKey: { ...mapGetters(["\"some_val_1\"", "\"some_val_2\""]) }
};
```

### Diagnostics

```javascript
✔ No errors
```


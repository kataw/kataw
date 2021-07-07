# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: async try while { catch }
## Options

`````js
{}
`````
## Input

`````js
do[ async try while { catch }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 2,
                    "end": 9
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 9
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 9,
                "end": 9
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 13
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 134299649,
                            "text": "catch",
                            "rawText": "catch",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "flags": 48,
                "transformFlags": 8,
                "start": 19,
                "end": 29
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 29
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 29,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "do[ async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 10, end: 13
✖ Declaration or statement expected - start: 13, end: 19
✖ Missing an opening parentheses - '( - start: 20, end: 21
✖ Property definition expected. Did you mean to use a ':'? - start: 27, end: 29
✖ Declaration or statement expected - start: 28, end: 29

```


# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: let const x = var
## Options

`````js
{}
`````
## Input

`````js
{[ let const x = var
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
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 12
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 12,
                                    "end": 16
                                }
                            ],
                            "flags": 16777232,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 16
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 20
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 20
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{[ let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 7, end: 12
✖ Identifier expected - start: 16, end: 20
✖ Lexical declaration expected - start: 16, end: 20

```


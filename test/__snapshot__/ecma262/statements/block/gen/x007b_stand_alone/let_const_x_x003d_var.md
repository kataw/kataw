# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: let const x = var
## Options

`````js
{}
`````
## Input

`````js
{ let const x = var
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
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 5
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 5
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
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
                                        "start": 11,
                                        "end": 13
                                    },
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "transformFlags": 4224,
                                    "start": 11,
                                    "end": 15
                                }
                            ],
                            "flags": 16777232,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 33554448,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 15
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 19
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "{ let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'const' expected - start: 5, end: 11
✖ Identifier expected - start: 15, end: 19
✖ Lexical declaration expected - start: 15, end: 19

```


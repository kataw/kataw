# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/statements/block/autogen.md
- Path: kataw8/test\__snapshot__\parser\statements\block\gen\with_unclosed_block
> :: test: with unclosed block
> :: case: let const x = var
## Input

`````js
{ {} finally(x) { let const x = var
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
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
                                        "start": 17,
                                        "end": 21
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 21
                                },
                                {
                                    "kind": 162,
                                    "lexicalKeyword": {
                                        "kind": 37757004,
                                        "flags": 64,
                                        "start": 21,
                                        "end": 27
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
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 31,
                                                    "end": 31
                                                },
                                                "flags": 16,
                                                "start": 27,
                                                "end": 31
                                            }
                                        ],
                                        "flags": 16777232,
                                        "start": 27,
                                        "end": 31
                                    },
                                    "flags": 33554448,
                                    "start": 21,
                                    "end": 31
                                },
                                {
                                    "kind": 155,
                                    "declareKeyword": null,
                                    "varKeyword": {
                                        "kind": 37757002,
                                        "flags": 80,
                                        "start": 31,
                                        "end": 35
                                    },
                                    "declarationList": {
                                        "kind": 156,
                                        "declarations": [],
                                        "flags": 16,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 16,
                                    "start": 31,
                                    "end": 35
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ Expected a `;` - start: 21, end: 27
✖ Identifier expected - start: 31, end: 35
✖ Lexical declaration expected - start: 31, end: 35

```


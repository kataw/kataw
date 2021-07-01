# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: switch (a) { case b: let {x} }
## Options

`````js
{}
`````
## Input

`````js
{ switch (a) { case b: let {x} } }
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
                        "kind": 160,
                        "switchKeyword": {
                            "kind": 37757024,
                            "flags": 80,
                            "start": 1,
                            "end": 8
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "caseBlock": {
                            "kind": 152,
                            "clauses": {
                                "kind": 383,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 80,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "statements": [
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 41951307,
                                                    "flags": 80,
                                                    "start": 22,
                                                    "end": 26
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
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "start": 28,
                                                                            "end": 29
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 28,
                                                                    "end": 29
                                                                },
                                                                "flags": 32,
                                                                "start": 26,
                                                                "end": 30
                                                            },
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 16,
                                                            "start": 26,
                                                            "end": 30
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "flags": 33554448,
                                                "start": 22,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 14,
                                        "end": 30
                                    }
                                ],
                                "flags": 16,
                                "start": 14,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 32
                        },
                        "flags": 80,
                        "start": 1,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "{ switch (a) { case b: let {x} } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 30, end: 32

```


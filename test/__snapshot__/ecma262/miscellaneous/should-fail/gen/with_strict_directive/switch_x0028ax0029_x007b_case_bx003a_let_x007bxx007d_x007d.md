# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: switch (a) { case b: let {x} }
## Options

`````js
{}
`````
## Input

`````js
"use strict"; switch (a) { case b: let {x} }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 22,
                "end": 23
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 80,
                            "start": 26,
                            "end": 31
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 33,
                            "end": 34
                        },
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "start": 34,
                                    "end": 38
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
                                                            "start": 40,
                                                            "end": 41
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 42
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 38,
                                            "end": 42
                                        }
                                    ],
                                    "flags": 16,
                                    "start": 38,
                                    "end": 42
                                },
                                "flags": 33554448,
                                "start": 34,
                                "end": 42
                            }
                        ],
                        "flags": 16,
                        "start": 26,
                        "end": 42
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 42
            },
            "flags": 80,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; switch (a) { case b: let {x} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 42, end: 44

```


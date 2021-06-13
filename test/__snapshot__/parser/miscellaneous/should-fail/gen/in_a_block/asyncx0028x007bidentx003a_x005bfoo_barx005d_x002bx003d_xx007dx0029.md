# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async({ident: [foo, bar] += x})
## Options

`````js
{}
`````
## Input

`````js
{ async({ident: [foo, bar] += x}) }
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
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 1,
                            "end": 7
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "ident",
                                                    "rawText": "ident",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 14
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 96,
                                                                    "start": 17,
                                                                    "end": 20
                                                                },
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "bar",
                                                                    "rawText": "bar",
                                                                    "flags": 96,
                                                                    "start": 21,
                                                                    "end": 25
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "start": 17,
                                                            "end": 25
                                                        },
                                                        "flags": 32,
                                                        "start": 15,
                                                        "end": 26
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4130,
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 29,
                                                        "end": 31
                                                    },
                                                    "flags": 32,
                                                    "start": 15,
                                                    "end": 31
                                                },
                                                "flags": 32,
                                                "start": 9,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 9,
                                        "end": 31
                                    },
                                    "flags": 48,
                                    "start": 8,
                                    "end": 32
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 1,
                            "end": 1
                        },
                        "flags": 268435490,
                        "start": 1,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ async({ident: [foo, bar] += x}) }",
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
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 26, end: 29

```


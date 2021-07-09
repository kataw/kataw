# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: async({ident: [foo, bar] += x})
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async({ident: [foo, bar] += x})
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
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
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
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ident",
                                            "rawText": "ident",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 26
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
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 32
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 37
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 37
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 27,
                                                "end": 38
                                            },
                                            "operatorToken": {
                                                "kind": 4130,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 41
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 27,
                                            "end": 43
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 21,
                                        "end": 43
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 43
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "flags": 268435490,
                "transformFlags": 1,
                "start": 13,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async({ident: [foo, bar] += x})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 38, end: 41

```


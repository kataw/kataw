# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: async({ident: [foo, bar] += x})
## Options

`````js
{}
`````
## Input

`````js
async({ident: [foo, bar] += x})
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
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
                                            "start": 7,
                                            "end": 12
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
                                                            "start": 15,
                                                            "end": 18
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 19,
                                                            "end": 23
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 23
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 13,
                                                "end": 24
                                            },
                                            "operatorToken": {
                                                "kind": 4130,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 7,
                                        "end": 29
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 29
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 6,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 34,
                "transformFlags": 1,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async({ident: [foo, bar] += x})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an array literal - start: 24, end: 27

```


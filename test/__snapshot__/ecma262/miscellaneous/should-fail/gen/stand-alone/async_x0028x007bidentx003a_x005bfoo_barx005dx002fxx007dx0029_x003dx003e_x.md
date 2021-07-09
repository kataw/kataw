# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: async ({ident: [foo, bar]/x}) => x
## Options

`````js
{}
`````
## Input

`````js
async ({ident: [foo, bar]/x}) => x
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "ident",
                                            "rawText": "ident",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 198,
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
                                                            "start": 16,
                                                            "end": 19
                                                        },
                                                        {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 20,
                                                            "end": 24
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 16,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 14,
                                                "end": 25
                                            },
                                            "operatorToken": {
                                                "kind": 35640,
                                                "flags": 96,
                                                "transformFlags": 32,
                                                "start": 25,
                                                "end": 26
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "transformFlags": 5120,
                                            "start": 8,
                                            "end": 27
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 27
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 29
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 32
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 34
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async ({ident: [foo, bar]/x}) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 0, end: 32

```


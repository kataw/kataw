# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: async ({ident: [foo, bar]/x}) => x
## Options

`````js
{}
`````
## Input

`````js
{ async ({ident: [foo, bar]/x}) => x }
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
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 7
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
                                                        "start": 10,
                                                        "end": 15
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
                                                                        "start": 18,
                                                                        "end": 21
                                                                    },
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "bar",
                                                                        "rawText": "bar",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 26
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 18,
                                                                "end": 26
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 8,
                                                            "start": 16,
                                                            "end": 27
                                                        },
                                                        "operatorToken": {
                                                            "kind": 35640,
                                                            "flags": 96,
                                                            "transformFlags": 32,
                                                            "start": 27,
                                                            "end": 28
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 29
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 1024,
                                                        "start": 10,
                                                        "end": 29
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 10,
                                                    "end": 29
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 29
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 31
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            },
                            "contents": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 290,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 36
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{ async ({ident: [foo, bar]/x}) => x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 1, end: 34

```


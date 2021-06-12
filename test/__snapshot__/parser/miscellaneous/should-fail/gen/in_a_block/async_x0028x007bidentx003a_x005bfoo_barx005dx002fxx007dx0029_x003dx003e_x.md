# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
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
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 31,
                            "end": 34
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 204,
                                            "ellipsisToken": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "ident",
                                                "rawText": "ident",
                                                "flags": 96,
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
                                                                "start": 18,
                                                                "end": 21
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "start": 22,
                                                                "end": 26
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 18,
                                                        "end": 26
                                                    },
                                                    "flags": 32,
                                                    "start": 16,
                                                    "end": 27
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 64,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 28,
                                                    "end": 29
                                                },
                                                "flags": 32,
                                                "start": 10,
                                                "end": 29
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 10,
                                    "end": 29
                                },
                                "flags": 48,
                                "start": 9,
                                "end": 30
                            }
                        ],
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 1,
                            "end": 7
                        },
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "flags": 290,
                        "start": 1,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "{ async ({ident: [foo, bar]/x}) => x }",
    "fileName": "__root__",
    "flags": 0,
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


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: ({interface}) => null
## Options

`````js
{}
`````
## Input

`````js
{ ({interface}) => null }
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
                            "asyncKeyword": null,
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
                                                    "kind": 134299649,
                                                    "text": "interface",
                                                    "rawText": "interface",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 4,
                                                    "end": 13
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 13
                                        },
                                        "flags": 48,
                                        "transformFlags": 0,
                                        "start": 3,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 15
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 18
                            },
                            "contents": {
                                "kind": 138477575,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 23
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ ({interface}) => null }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
{
  ({ interface }) => null;
}
```

### Diagnostics

```javascript
✔ No errors
```


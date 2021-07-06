# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: try {} finally a()
## Options

`````js
{}
`````
## Input

`````js
{ try {} finally a() }
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
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 5
                        },
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 16
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 16
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 16
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 20
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "{ try {} finally a() }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

{
  try {} finally {}
  a();
}
```

### Diagnostics

```javascript
✔ No errors
```


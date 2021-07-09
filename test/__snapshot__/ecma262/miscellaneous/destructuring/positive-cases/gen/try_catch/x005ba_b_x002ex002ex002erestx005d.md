# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/try_catch
> :: test: try catch
> :: case: [a,b,...rest]
## Options

`````js
{}
`````
## Input

`````js
try {} catch([a,b,...rest]) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 15
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 17
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "left": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 25
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": null,
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 18,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 26
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 29
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 30
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 30
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "try {} catch([a,b,...rest]) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
try {} catch ([a, b, ...rest]) {}
```

### Diagnostics

```javascript
✔ No errors
```


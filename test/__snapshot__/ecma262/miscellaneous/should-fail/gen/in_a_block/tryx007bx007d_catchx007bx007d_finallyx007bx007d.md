# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: try{};catch{};finally{}
## Options

`````js
{}
`````
## Input

`````js
{ try{};catch{};finally{} }
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
                                "start": 6,
                                "end": 6
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
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
                            "start": 7,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 7
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": {
                            "kind": 173,
                            "catchKeyword": {
                                "kind": 4202575,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            "catchParameter": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 15
                        },
                        "finallyKeyword": null,
                        "finallyBlock": null,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 15
                    },
                    {
                        "kind": 168,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
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
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 23
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 25
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "{ try{};catch{};finally{} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'catch' expected - start: 7, end: 8
✖ 'try' expected - start: 8, end: 13
✖ 'try' expected - start: 16, end: 23

```


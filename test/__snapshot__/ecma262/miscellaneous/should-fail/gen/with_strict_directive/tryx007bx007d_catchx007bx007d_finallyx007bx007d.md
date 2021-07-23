# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: try{};catch{};finally{}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; try{};catch{};finally{}
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 19
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
                    "start": 19,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 19
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 20
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
                    "start": 20,
                    "end": 20
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 25
                },
                "catchParameter": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 27
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 20,
                "end": 27
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 20,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 28
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
                    "start": 28,
                    "end": 28
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 28,
                "end": 28
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "transformFlags": 0,
                "start": 28,
                "end": 35
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 36
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 35,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 28,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; try{};catch{};finally{}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'catch' expected - start: 19, end: 20

```


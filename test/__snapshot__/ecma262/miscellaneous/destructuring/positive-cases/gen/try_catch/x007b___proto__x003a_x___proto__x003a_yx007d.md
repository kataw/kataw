# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/positive-cases/gen/try_catch
> :: test: try catch
> :: case: { __proto__: x, __proto__: y}
## Options

`````js
{}
`````
## Input

`````js
try {} catch({ __proto__: x, __proto__: y}) {}
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
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 24
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 27
                                },
                                "initializer": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 27
                            },
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 38
                                },
                                "value": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 41
                                },
                                "initializer": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 41
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 42
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 45
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 46
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 6,
                "end": 46
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "try {} catch({ __proto__: x, __proto__: y}) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
try {} catch ({ __proto__: x, __proto__: y }) {}
```

### Diagnostics

```javascript
✔ No errors
```


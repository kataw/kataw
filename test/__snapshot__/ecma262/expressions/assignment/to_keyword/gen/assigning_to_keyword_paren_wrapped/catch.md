# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: catch
## Options

`````js
{}
`````
## Input

`````js
(catch = x)
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
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 1
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
                    "start": 1,
                    "end": 1
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 6
                },
                "catchParameter": null,
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
                    "start": 6,
                    "end": 6
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 1,
                "end": 6
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 1,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(catch = x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 6
✖ 'try' expected - start: 1, end: 6
✖ Declaration or statement expected - start: 6, end: 8
✖ ')' is not allowed here. Did you mean ';'? - start: 10, end: 11

```


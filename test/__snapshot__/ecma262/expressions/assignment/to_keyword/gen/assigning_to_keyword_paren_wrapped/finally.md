# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
(finally = x)
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
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "transformFlags": 0,
                "start": 1,
                "end": 8
            },
            "finallyBlock": {
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
            "flags": 16,
            "transformFlags": 0,
            "start": 1,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 10,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(finally = x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 8
✖ 'try' expected - start: 1, end: 8
✖ Declaration or statement expected - start: 8, end: 10
✖ ')' is not allowed here. Did you mean ';'? - start: 12, end: 13

```


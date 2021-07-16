# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assigning_to_keyword_paren_wrapped
> :: test: assigning to keyword paren wrapped
> :: case: try
## Options

`````js
{}
`````
## Input

`````js
(try = x)
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
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 1,
                "end": 4
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 4
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
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 1,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "(try = x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 1, end: 4
✖ 'catch' expected - start: 4, end: 6
✖ '; ' expected - start: 8, end: 9

```


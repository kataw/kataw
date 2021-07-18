# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: finally
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (finally = x);
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 15
                },
                "flags": 13,
                "transformFlags": 0,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 15
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
                    "start": 15,
                    "end": 15
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 15
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 64,
                "transformFlags": 0,
                "start": 15,
                "end": 22
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 26
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (finally = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 22
✖ 'try' expected - start: 15, end: 22
✖ Declaration or statement expected - start: 22, end: 24
✖ ')' is not allowed here. Did you mean ';'? - start: 26, end: 27

```


# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/should_listen_to_use_strict_directive_in_global_wrapped
> :: test: should listen to use strict directive in global wrapped
> :: case: try
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (try = x);
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
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 15,
                "end": 18
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
                "start": 18,
                "end": 18
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
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 23,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (try = x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 18
✖ 'catch' expected - start: 18, end: 20
✖ ')' is not allowed here. Did you mean ';'? - start: 22, end: 23

```


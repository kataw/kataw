# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for_loop
> :: test: for loop
> :: case: let
>          {} = y
## Options

`````js
{}
`````
## Input

`````js
for (;;) let
{} = y
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 8,
                "end": 12
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 12,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (;;) let\n{} = y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected. This follows a block of statements so if you intended to write a destructuring assignment you might need to wrap the whole assignment in parentheses - start: 17, end: 19

```


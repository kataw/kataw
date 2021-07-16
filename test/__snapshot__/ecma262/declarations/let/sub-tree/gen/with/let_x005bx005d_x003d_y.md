# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/with
> :: test: with
> :: case: let
>          [] = y
## Options

`````js
{}
`````
## Input

`````js
with (a) let
[] = y
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 130,
                        "member": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 14
                        },
                        "flags": 32,
                        "transformFlags": 4,
                        "start": 8,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 1,
                    "transformFlags": 128,
                    "start": 8,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 8,
                "end": 19
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "with (a) let\n[] = y",
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
✖ `let 
 [` is a restricted production at the start of a statement - start: 8, end: 14
✖ An member access expression should take an argument. - start: 8, end: 15
✖ Identifier expected - start: 14, end: 15

```


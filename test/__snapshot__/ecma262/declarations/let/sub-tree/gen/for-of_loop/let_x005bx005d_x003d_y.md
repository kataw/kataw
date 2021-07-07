# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for-of_loop
> :: test: for-of loop
> :: case: let
>          [] = y
## Options

`````js
{}
`````
## Input

`````js
for (a of b) let
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
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
                            "start": 12,
                            "end": 16
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 18
                        },
                        "flags": 536870944,
                        "transformFlags": 4,
                        "start": 12,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 23
                    },
                    "flags": 1,
                    "transformFlags": 128,
                    "start": 12,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 12,
                "end": 23
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (a of b) let\n[] = y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `let 
 [` is a restricted production at the start of a statement - start: 12, end: 16
✖ An member access expression should take an argument. - start: 12, end: 19
✖ Identifier expected - start: 18, end: 19

```


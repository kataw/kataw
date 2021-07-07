# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/for-in_loop
> :: test: for-in loop
> :: case: let
>          {}
## Options

`````js
{}
`````
## Input

`````js
for (a in b) let
{}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 6
            },
            "inKeyword": {
                "kind": 21006388,
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
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 12,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 18,
                "end": 18
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 16,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (a in b) let\n{}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
for (a in b) let;
{}

```

### Diagnostics

```javascript
✔ No errors
```


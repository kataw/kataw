# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/sub-tree/gen/do_semi
> :: test: do semi
> :: case: let x
## Options

`````js
{}
`````
## Input

`````js
do let x; while (a);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 6
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 6
            },
            "whileKeyword": null,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 9,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "do let x; while (a);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 6, end: 8
✖ Declaration or statement expected - start: 8, end: 9

```


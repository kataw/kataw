# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/assignment_unwrapped
> :: test: assignment unwrapped
> :: case: fin\u0061lly
## Options

`````js
{}
`````
## Input

`````js
fin\u0061lly = x;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
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
                    "start": 0,
                    "end": 0
                },
                "flags": 16400,
                "transformFlags": 0,
                "start": 0,
                "end": 0
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 16448,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "fin\\u0061lly = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 0, end: 12
✖ Declaration or statement expected - start: 12, end: 14

```


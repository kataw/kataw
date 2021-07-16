# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/strict_mode
> :: test: strict mode
> :: case: var v\u0061r = true
## Options

`````js
{}
`````
## Input

`````js
var v\u0061r = true
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 16464,
                "transformFlags": 0,
                "start": 3,
                "end": 12
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 3,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 24752947,
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "var v\\u0061r = true",
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
✖ '; ' expected - start: 3, end: 12
✖ Keywords cannot contain escape characters - start: 3, end: 12
✖ '; ' expected - start: 12, end: 14

```


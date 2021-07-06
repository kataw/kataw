# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/strict_mode
> :: test: strict mode
> :: case: if (this \u0069nstanceof Array) {}
## Options

`````js
{}
`````
## Input

`````js
if (this \u0069nstanceof Array) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 4276321,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4229173,
                    "flags": 16480,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 24
                },
                "right": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 30
                },
                "flags": 16480,
                "transformFlags": 1024,
                "start": 4,
                "end": 30
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "if (this \\u0069nstanceof Array) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

if (this  instanceof Array) {}
```

### Diagnostics

```javascript
✔ No errors
```


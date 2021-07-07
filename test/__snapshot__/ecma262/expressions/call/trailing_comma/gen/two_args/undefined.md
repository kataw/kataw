# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/gen/two_args
> :: test: two args
> :: case: undefined
## Options

`````js
{}
`````
## Input

`````js
foo(x,y,);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 7
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 8
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "foo(x,y,);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
foo(x, y);
```

### Diagnostics

```javascript
✔ No errors
```


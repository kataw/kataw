# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/gen/not_just_commas
> :: test: not just commas
> :: case: Infinity
## Options

`````js
{}
`````
## Input

`````js
foo(,,);
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
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 5
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "foo(,,);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 4, end: 5
✖ Identifier expected - start: 5, end: 6

```


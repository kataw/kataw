# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/gen/cannot_elide
> :: test: cannot elide
> :: case: Infinity
## Options

`````js
{}
`````
## Input

`````js
foo(a,,);
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 5
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 6
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "foo(a,,);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 7

```


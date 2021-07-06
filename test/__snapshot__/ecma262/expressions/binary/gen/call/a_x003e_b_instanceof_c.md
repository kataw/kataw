# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/call
> :: test: call
> :: case: a > b instanceof c
## Options

`````js
{}
`````
## Input

`````js
foo( a > b instanceof c )
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
                            "kind": 198,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 4,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 23
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "foo( a > b instanceof c )",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

foo(
  a > b instanceof c
);
```

### Diagnostics

```javascript
✔ No errors
```


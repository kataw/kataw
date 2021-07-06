# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/call/trailing_comma/gen/can_after_spread
> :: test: can after spread
> :: case: undefined
## Options

`````js
{}
`````
## Input

`````js
foo(...a,);
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
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 7
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 8
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 9
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "foo(...a,);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

foo(...a);
```

### Diagnostics

```javascript
✔ No errors
```


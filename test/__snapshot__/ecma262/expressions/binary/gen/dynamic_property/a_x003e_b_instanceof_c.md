# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/dynamic_property
> :: test: dynamic property
> :: case: a > b instanceof c
## Options

`````js
{}
`````
## Input

`````js
foo[ a > b instanceof c ]
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
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
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
                        "transformFlags": 5120,
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
                    "transformFlags": 5120,
                    "start": 4,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "foo[ a > b instanceof c ]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
foo[a > b instanceof c];
```

### Diagnostics

```javascript
✔ No errors
```


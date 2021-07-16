# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: foo:for(;;)continue foo
>          /bar/d
## Options

`````js
{}
`````
## Input

`````js
foo:for(;;)continue foo
/bar/d
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 19
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 23
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 23
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 4,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 25
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 28
                    },
                    "flags": 97,
                    "transformFlags": 5120,
                    "start": 23,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 29
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 30
                },
                "flags": 97,
                "transformFlags": 5120,
                "start": 23,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 23,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "foo:for(;;)continue foo\n/bar/d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 23, end: 25

```


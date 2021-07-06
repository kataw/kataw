# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_stand_alone
> :: test: { stand alone
> :: case: super[b?.a]
## Options

`````js
{}
`````
## Input

`````js
{ super[b?.a]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 130,
                            "member": {
                                "kind": 4259935,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 7
                            },
                            "expression": {
                                "kind": 205,
                                "chainToken": {
                                    "kind": 393240,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 11
                                },
                                "member": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "chain": {
                                    "kind": 302,
                                    "chain": {
                                        "kind": 202,
                                        "chain": null,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 12
                                        },
                                        "flags": 536870944,
                                        "transformFlags": 2,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "flags": 536870944,
                            "transformFlags": 4,
                            "start": 1,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 13
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ super[b?.a]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 1, end: 8
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13

```


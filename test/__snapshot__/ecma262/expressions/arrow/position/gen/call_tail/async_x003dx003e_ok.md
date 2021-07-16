# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/call_tail
> :: test: call tail
> :: case: async => ok
## Options

`````js
{}
`````
## Input

`````js
foo(async => ok).bar
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
                "kind": 129,
                "member": {
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
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 9
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 12
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "foo(async => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
foo(async => ok).bar;
```

### Diagnostics

```javascript
✔ No errors
```


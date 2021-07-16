# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: await => async.await[foo]
## Options

`````js
{}
`````
## Input

`````js
await => async.await[foo]
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 8
                },
                "contents": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 20
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 8,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 24
                    },
                    "flags": 32,
                    "transformFlags": 4,
                    "start": 8,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 0,
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
    "source": "await => async.await[foo]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
await => async.await[foo];
```

### Diagnostics

```javascript
✔ No errors
```


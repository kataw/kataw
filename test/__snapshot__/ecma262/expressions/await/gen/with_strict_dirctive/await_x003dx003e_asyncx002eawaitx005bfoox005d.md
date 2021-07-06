# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: await => async.await[foo]
## Options

`````js
{}
`````
## Input

`````js
'use strict'; await => async.await[foo]
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
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
                    "start": 13,
                    "end": 19
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
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
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 96,
                        "transformFlags": 2,
                        "start": 22,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 536870944,
                    "transformFlags": 4,
                    "start": 22,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "'use strict'; await => async.await[foo]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

"'use strict'";
await => async.await[foo];
```

### Diagnostics

```javascript
✔ No errors
```


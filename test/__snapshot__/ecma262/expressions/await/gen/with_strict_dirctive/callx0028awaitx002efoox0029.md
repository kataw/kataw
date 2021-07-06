# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: call(await.foo)
## Options

`````js
{}
`````
## Input

`````js
'use strict'; call(await.foo)
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 24
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 28
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 13,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "'use strict'; call(await.foo)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

"'use strict'";
call(await.foo);
```

### Diagnostics

```javascript
✔ No errors
```


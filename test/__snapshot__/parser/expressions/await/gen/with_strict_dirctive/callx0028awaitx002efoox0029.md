# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await.foo)
## Input

`````js
'use strict'; call(await.foo)
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
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
                                "start": 19,
                                "end": 24
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 19,
                    "end": 28
                },
                "flags": 32,
                "start": 13,
                "end": 29
            },
            "flags": 16,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "'use strict'; call(await.foo)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```


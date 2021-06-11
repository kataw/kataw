# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/await/gen/with_strict_dirctive
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
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 19,
                    "end": 22
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 536871042,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 29,
                            "end": 34
                        },
                        "flags": 536870944,
                        "start": 22,
                        "end": 34
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 39
                },
                "flags": 32,
                "start": 13,
                "end": 39
            },
            "flags": 16,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "'use strict'; await => async.await[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

await =>  ;
```

### Diagnostics

```javascript
✔ No errors
```


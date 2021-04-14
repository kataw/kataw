# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: return async (await) => {};
## Input

`````js
'use strict'; return async (await) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 34,
                    "end": 37
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 81921,
                        "text": "await",
                        "rawText": "await",
                        "flags": 768,
                        "start": 28,
                        "end": 33
                    }
                ],
                "asyncToken": {
                    "kind": 82031,
                    "flags": 768,
                    "start": 20,
                    "end": 26
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 256,
                    "start": 37,
                    "end": 40
                },
                "flags": 2304,
                "start": 20,
                "end": 40
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "'use strict'; return async (await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 13,
            "end": 20
        }
    ],
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: return async (await) => {};
## Input

`````js
'use strict'; return async (await) => {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: return async (await) => {};
## Input

`````js
'use strict'; return async (await) => {};
`````
```


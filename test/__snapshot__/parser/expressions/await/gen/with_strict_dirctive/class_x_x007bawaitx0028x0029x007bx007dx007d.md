# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {await(){}}
## Input

`````js
'use strict'; class x {await(){}}
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
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "name": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 19,
                "end": 21
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "text": "await",
                                "rawText": "await",
                                "flags": 768,
                                "start": 23,
                                "end": 28
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 0,
                            "start": 28,
                            "end": 32
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 32
                    }
                ],
                "flags": 256,
                "start": 23,
                "end": 33
            },
            "flags": 128,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "'use strict'; class x {await(){}}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {await(){}}
## Input

`````js
'use strict'; class x {await(){}}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: class x {await(){}}
## Input

`````js
'use strict'; class x {await(){}}
`````
```


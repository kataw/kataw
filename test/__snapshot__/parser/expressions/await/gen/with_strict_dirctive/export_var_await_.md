# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: export var await;
## Input

`````js
'use strict'; export var await;
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 13,
                "end": 20
            },
            "declaration": {
                "kind": 155,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 81921,
                                "text": "await",
                                "rawText": "await",
                                "flags": 768,
                                "start": 24,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 128,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "flags": 128,
                    "start": 24,
                    "end": 30
                },
                "flags": 128,
                "start": 20,
                "end": 31
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "'use strict'; export var await;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 60,
            "error": "The `export` keyword can only be used with the module goal",
            "start": 13,
            "end": 20
        }
    ],
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: export var await;
## Input

`````js
'use strict'; export var await;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: export var await;
## Input

`````js
'use strict'; export var await;
`````
```


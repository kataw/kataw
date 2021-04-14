# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield typeof 0}
## Input

`````js
'use strict'; function *a(){yield typeof 0}
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
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 13,
                "end": 22
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 22,
                "end": 24
            },
            "name": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 24,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 25,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 33
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259885,
                                        "flags": 768,
                                        "start": 33,
                                        "end": 40
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 768,
                                        "start": 40,
                                        "end": 42
                                    },
                                    "flags": 256,
                                    "start": 33,
                                    "end": 42
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 42
                            },
                            "flags": 128,
                            "start": 28,
                            "end": 42
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 28,
                    "end": 42
                },
                "flags": 256,
                "start": 27,
                "end": 43
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 13,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "'use strict'; function *a(){yield typeof 0}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield typeof 0}
## Input

`````js
'use strict'; function *a(){yield typeof 0}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: function *a(){yield typeof 0}
## Input

`````js
'use strict'; function *a(){yield typeof 0}
`````
```


# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await\n a
## Input

`````js
(class extends Base { await\n a });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37814352,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "extendsToken": {
                            "kind": 4194391,
                            "flags": 768,
                            "start": 6,
                            "end": 14
                        },
                        "expression": {
                            "kind": 81921,
                            "text": "Base",
                            "rawText": "Base",
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "key": {
                                    "kind": 81921,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 21,
                                    "end": 27
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 28,
                "end": 29
            },
            "flags": 128,
            "start": 28,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 29,
                "end": 31
            },
            "flags": 128,
            "start": 29,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "(class extends Base { await\\n a });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 21,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 27,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 33,
            "end": 34
        }
    ],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await\n a
## Input

`````js
(class extends Base { await\n a });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await\n a
## Input

`````js
(class extends Base { await\n a });
`````
```


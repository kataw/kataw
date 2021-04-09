# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: a\n get
## Input

`````js
(class { a\n get });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
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
                                    "value": "a",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "n",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "get",
                "autofix": 0,
                "flags": 768,
                "start": 12,
                "end": 16
            },
            "autofix": 0,
            "flags": 128,
            "start": 12,
            "end": 16
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(class { a\\n get });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 10
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 10,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 10,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 12,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16,
            "end": 18
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 18,
            "end": 19
        }
    ],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: a\n get
## Input

`````js
(class { a\n get });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: a\n get
## Input

`````js
(class { a\n get });
`````
```

